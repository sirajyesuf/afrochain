"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { getEvent } from "@/app/data/events";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type NavItem = {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "About Us", href: "/aboutus" },
  {
    name: "Programs",
    submenu: [
      { name: "Road to Summit 2027", href: "#roadmap" },
      { name: "All Events & Dates", href: "/events" },
      { name: "Hackathon", href: "#hackathon" },
      { name: "Launchpad", href: "#launchpad" },
      { name: "Speakers", href: "#speakers" },
      { name: "Venue", href: "#venue" },
    ],
  },
  {
    name: "Partners",
    submenu: [
      { name: "Partners & Sponsors", href: "/partners" },
      { name: "Exhibitors", href: "/exhibitors" },
    ],
  },
  { name: "Contact us", href: "/contactus" },
];

const registerHref = "https://forms.gle/vrpvDxoufARBNnPLA";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dbe900]";

/** Anchor links stay on the homepage; full paths open their own route. */
function hrefFor(href: string, pathname: string) {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const promotedEvent = getEvent("summit") ?? getEvent("executive-forum");

  const overlayRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pendingHashRef = useRef<string | null>(null);
  const restoreFocusRef = useRef(true);
  const restoreScrollRef = useRef(true);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setOpenSection(null);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // A tap on a hash link closes the overlay before navigating. Remember the
  // target so it can be scrolled to once the page unlock has been released
  // (on some mobile browsers the scroll is ignored while the body is locked).
  useEffect(() => {
    if (isMenuOpen) return;
    const hash = pendingHashRef.current;
    if (!hash) return;
    pendingHashRef.current = null;

    const id = hash.replace(/^#/, "");
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        if (Math.abs(target.getBoundingClientRect().top) > 4) {
          target.scrollIntoView({ block: "start" });
        }
        return;
      }
      if (++attempts < 20) timer = setTimeout(scrollToTarget, 100);
    };

    timer = setTimeout(scrollToTarget, 0);
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  // The overlay only exists below `lg`. If the viewport grows past that
  // breakpoint while it is open (rotation, window resize) the overlay is
  // hidden by CSS but its scroll lock would otherwise stay behind.
  useEffect(() => {
    if (!isMenuOpen) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) closeMenu();
    };
    onChange();
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [isMenuOpen, closeMenu]);

  // Escape closes, focus stays inside the dialog, and the page behind it is
  // locked. `overflow: hidden` alone is ignored by iOS Safari, so the body is
  // pinned at its current offset instead and restored on close.
  useEffect(() => {
    if (!isMenuOpen) return;

    const overlay = overlayRef.current;
    restoreFocusRef.current = true;
    restoreScrollRef.current = true;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !overlay) return;

      const focusable = Array.from(
        overlay.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !overlay.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
      overflow: style.overflow,
    };

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    closeRef.current?.focus({ preventScroll: true });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.width = previous.width;
      style.overflow = previous.overflow;
      if (restoreScrollRef.current) window.scrollTo(0, scrollY);
      if (restoreFocusRef.current) {
        toggleRef.current?.focus({ preventScroll: true });
      }
    };
  }, [isMenuOpen, closeMenu]);

  const isCurrent = (href?: string) =>
    !href ? false : href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isSectionActive = (item: NavItem) =>
    item.submenu?.some((sub) => isCurrent(sub.href)) ?? false;

  // Overlay links dismiss the menu themselves. Hash targets are retried after
  // the body unlock, and focus should follow the navigation instead of
  // snapping back to the menu button.
  const handleNavClick = (href: string) => {
    if (href.includes("#")) {
      pendingHashRef.current = href;
    } else {
      // The router sets the scroll position for a new page; restoring the old
      // offset afterwards would land the next page halfway down.
      restoreScrollRef.current = false;
    }
    restoreFocusRef.current = false;
    closeMenu();
  };

  // The register link opens in a new tab, so this page stays exactly where it
  // was and should not lose its scroll position.
  const handleExternalClick = () => {
    restoreFocusRef.current = false;
    closeMenu();
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      {/* The dates sit in a full-width announcement bar at every size so the
          promoted event is the first thing a visitor reads. */}
      <div
        className="bg-[#dbe900] text-[#0f2f56]"
        suppressHydrationWarning
      >
        <p className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-center sm:flex-row sm:justify-center sm:gap-2 sm:py-2">
          <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.14em] sm:text-[11px]">
            {promotedEvent?.name}
          </span>
          <span
            className="hidden h-1 w-1 shrink-0 rounded-full bg-[#0f2f56]/40 sm:block"
            aria-hidden="true"
          />
          <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.06em] sm:text-[11px]">
            {promotedEvent?.dateLabel}
            <span
              className="mx-1 inline-block h-1 w-1 shrink-0 rounded-full bg-[#0f2f56]/40 align-middle"
              aria-hidden="true"
            />
            {promotedEvent?.location}
          </span>
        </p>
      </div>

      <nav aria-label="Main" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-4 sm:py-5 lg:py-6">
          {/* Left: the wordmark, with the city beneath it. */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link
              href="/"
              scroll={true}
              className={`flex flex-col items-start rounded-sm ${focusRing} focus-visible:outline-offset-4`}
            >
              <span className="text-sm font-bold leading-tight tracking-wide text-white sm:text-base">
                AFROCHAIN
              </span>
              <span className="text-[10px] leading-tight tracking-wide text-white/85">
                ADDIS ABABA, ETHIOPIA
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = item.submenu
                ? isSectionActive(item)
                : isCurrent(item.href);

              if (item.submenu) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <span
                        className={`group flex cursor-pointer items-center gap-1 rounded-md px-2.5 py-1.5 text-sm font-normal transition-colors duration-300 hover:text-[#dbe900] ${focusRing} ${
                          active ? "text-[#dbe900]" : "text-white/85"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        />
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.name === "Programs" ? (
                        <>
                          {item.submenu.slice(0, 2).map((sub) => (
                            <DropdownMenuItem asChild key={sub.name}>
                              <Link
                                href={hrefFor(sub.href, pathname)}
                                scroll={true}
                                className={`w-full focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#245a9a] ${focusRing}`}
                              >
                                {sub.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          {item.submenu.slice(2).map((sub) => (
                            <DropdownMenuItem asChild key={sub.name}>
                              <Link
                                href={hrefFor(sub.href, pathname)}
                                scroll={true}
                                className="w-full focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#245a9a]"
                              >
                                {sub.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </>
                      ) : (
                        item.submenu.map((sub) => (
                          <DropdownMenuItem asChild key={sub.name}>
                            <Link
                              href={sub.href}
                              scroll={true}
                              className="w-full focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#245a9a]"
                            >
                              {sub.name}
                            </Link>
                          </DropdownMenuItem>
                        ))
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href ?? "/"}
                  scroll={true}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-2.5 py-1.5 text-sm font-normal transition-colors duration-300 hover:text-[#dbe900] ${focusRing} ${
                    active ? "text-[#dbe900]" : "text-white/85"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href={registerHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-3 rounded-lg border border-white/70 px-4 py-2 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:border-[#dbe900] hover:bg-[#dbe900] hover:text-[#0f2f56] ${focusRing}`}
            >
              Register for Event
            </a>
          </div>

          {/* Right cluster: a compact register link appears on medium screens
              where the full nav no longer fits, then the menu toggle. */}
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={registerHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-md border border-white/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-white transition-colors duration-300 hover:border-[#dbe900] hover:bg-[#dbe900] hover:text-[#0f2f56] md:inline-flex lg:hidden ${focusRing}`}
            >
              Register
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-haspopup="dialog"
              aria-controls={isMenuOpen ? "mobile-menu" : undefined}
              className={`-mr-1 rounded-md p-2.5 text-white relative z-[60] lg:hidden ${focusRing}`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation - portaled to <body> so `fixed` always covers the
          viewport. Ancestor styles (e.g. backdrop blur) turn the header into a
          containing block, which would clip a child overlay to the nav bar. */}
      {isMenuOpen &&
        createPortal(
          <div
            id="mobile-menu"
            ref={overlayRef}
            className="fixed inset-0 z-[100] h-[100dvh] bg-[#0f2f56] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <div className="flex h-full flex-col overflow-y-auto overscroll-contain">
              {/* Overlay header: same dates + wordmark as the bar, plus its own
                  close button so the interaction is self-contained. */}
              <div className="flex items-center justify-between gap-3 px-4 pb-4 pt-4 sm:px-6">
                <div className="flex min-w-0 items-center gap-2.5">
                  {/*<div
                    className="flex shrink-0 items-center rounded-r border-l-2 border-[#dbe900] bg-white/[0.06] py-1.5 pl-2 pr-2.5"
                    suppressHydrationWarning
                  >
                    <span className="whitespace-nowrap text-[10px] font-semibold uppercase leading-none tracking-[0.08em] text-white">
                      {promotedEvent?.dateLabel}
                    </span>
                  </div>*/}
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="text-sm font-bold tracking-wide text-white">
                      AFROCHAIN
                    </span>
                    <span className="truncate text-[10px] tracking-wide text-white/80">
                      ADDIS ABABA, ETHIOPIA
                    </span>
                  </span>
                </div>

                <button
                  ref={closeRef}
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className={`shrink-0 rounded-full border border-white/20 p-3 text-white/90 transition-colors duration-200 hover:bg-white/10 hover:text-white ${focusRing}`}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="mx-auto w-full max-w-md px-4 pb-10 sm:px-6"
              >
                <ul className="border-y border-white/10">
                  {navigation.map((item, index) => {
                    if (item.submenu) {
                      const isOpen = openSection === item.name;
                      const panelId = `mobile-submenu-${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;

                      return (
                        <li
                          key={item.name}
                          className={index > 0 ? "border-t border-white/10" : ""}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenSection(isOpen ? null : item.name)
                            }
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            className={`flex w-full items-center justify-between px-1 py-3.5 text-left text-base text-white/90 transition-colors duration-300 hover:text-[#dbe900] ${focusRing}`}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>

                          <div id={panelId} hidden={!isOpen} className="pb-2">
                            <ul className="ml-1 space-y-0.5 border-l-2 border-[#dbe900]/40 pl-3">
                              {item.submenu.map((sub) => {
                                const href = hrefFor(sub.href, pathname);
                                return (
                                  <li key={sub.name}>
                                    <Link
                                      href={href}
                                      scroll={true}
                                      onClick={() => handleNavClick(href)}
                                      className={`block py-3 text-sm text-white/80 transition-colors duration-300 hover:text-[#dbe900] ${focusRing}`}
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={item.name}
                        className={index > 0 ? "border-t border-white/10" : ""}
                      >
                        <Link
                          href={item.href ?? "/"}
                          scroll={true}
                          onClick={() => handleNavClick(item.href ?? "/")}
                          aria-current={
                            isCurrent(item.href) ? "page" : undefined
                          }
                          className={`block px-1 py-3.5 text-base text-white/90 transition-colors duration-300 hover:text-[#dbe900] ${focusRing} ${
                            isCurrent(item.href) ? "text-[#dbe900]" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={registerHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleExternalClick}
                  className={`mt-8 flex w-full items-center justify-center rounded-lg bg-[#dbe900] px-6 py-3 text-sm font-semibold tracking-wide text-[#0f2f56] transition-colors duration-300 hover:bg-[#e6f21a] ${focusRing}`}
                >
                  Register for Event
                </a>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
