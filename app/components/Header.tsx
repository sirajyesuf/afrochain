"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
      { name: "Events Roadmap", href: "#roadmap" },
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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSection(null);
  };

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Escape closes and the page scroll is locked while the menu is open.
  // No inert/focus juggling - the overlay owns its own close button, which
  // keeps the interaction working identically on every device.
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const isCurrent = (href?: string) =>
    !href ? false : href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isSectionActive = (item: NavItem) =>
    item.submenu?.some((sub) => isCurrent(sub.href)) ?? false;

  return (
    <header
      className="absolute inset-x-0 top-0 z-50 bg-transparent"
    >
      <nav
        aria-label="Main"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between py-5 lg:py-6">
          <Link
            href="/"
            scroll={true}
            className={`flex flex-col items-start rounded-sm ${focusRing} focus-visible:outline-offset-4`}
          >
            <span className="text-sm font-bold leading-tight tracking-wide text-white">
              AFROCHAIN
            </span>
            <span className="text-[10px] leading-tight tracking-wide text-white/90">
              ADDIS ABABA, ETHIOPIA
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const active = item.submenu
                ? isSectionActive(item)
                : isCurrent(item.href);

              if (item.submenu) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <span
                        className={`group flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1.5 text-sm font-normal transition-colors duration-300 hover:text-[#dbe900] ${focusRing} ${
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
                  className={`rounded-sm px-2 py-1.5 text-sm font-normal transition-colors duration-300 hover:text-[#dbe900] ${focusRing} ${
                    active ? "text-[#dbe900]" : "text-white/85"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href="https://forms.gle/vrpvDxoufARBNnPLA"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg border-2 border-white bg-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-[#245a9a] ${focusRing}`}
            >
              Register for Event
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={`-mr-2 rounded-sm p-2 text-white relative z-[60] lg:hidden ${focusRing}`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation - portaled to <body> so `fixed` always covers the
          viewport. Ancestor styles (e.g. backdrop blur) turn the header into a
          containing block, which would clip a child overlay to the nav bar. */}
      {isMenuOpen &&
        createPortal(
          <div
            id="mobile-menu"
            className="fixed inset-0 z-[100] bg-black/90 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
          <div className="flex h-full flex-col overflow-y-auto overscroll-contain">
            {/* Close button lives inside the overlay - self-contained, always on top. */}
            <div className="flex justify-end px-4 pt-4">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className={`rounded-full border border-white/20 bg-white/5 p-2.5 text-white/90 transition-colors duration-200 hover:bg-white/10 hover:text-white ${focusRing}`}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mx-auto w-full max-w-xs px-4 pb-10 pt-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  if (item.submenu) {
                    const isOpen = openSection === item.name;
                    const panelId = `mobile-submenu-${item.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`;

                    return (
                      <li key={item.name}>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenSection(isOpen ? null : item.name)
                          }
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-4 text-left text-lg font-normal text-white/90 transition-colors duration-300 hover:text-[#dbe900] ${focusRing}`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        <div
                          id={panelId}
                          hidden={!isOpen}
                          className="pb-1"
                        >
                          <ul className="ml-4 space-y-0.5 border-l-2 border-[#dbe900]/40 pl-3">
                            {item.submenu.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={hrefFor(sub.href, pathname)}
                                  scroll={true}
                                  onClick={closeMenu}
                                  className={`block rounded-lg px-3 py-3 text-base font-normal text-white/85 transition-colors duration-300 hover:text-[#dbe900] ${focusRing}`}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href ?? "/"}
                        scroll={true}
                        onClick={closeMenu}
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                        className={`block rounded-lg px-3 py-4 text-lg font-normal text-white/90 transition-colors duration-300 hover:text-[#dbe900] ${focusRing} ${
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
                href="https://forms.gle/vrpvDxoufARBNnPLA"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`mt-6 block w-full rounded-lg border-2 border-white bg-transparent px-6 py-3 text-center text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-[#245a9a] ${focusRing}`}
              >
                Register for Event
              </a>
            </nav>
          </div>
          </div>,
          document.body
        )}
    </header>
  );
}
