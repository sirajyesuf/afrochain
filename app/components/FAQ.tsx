import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FAQ() {
  const faqData = [
    {
      id: "item-1",
      question: "What is Web3 and how is it different from Web2?",
      answer:
        "Web3 represents the next evolution of the internet, built on blockchain technology. Unlike Web2 where data is controlled by centralized platforms, Web3 gives users ownership of their data, digital assets, and online identity through decentralized networks and smart contracts.",
    },
    {
      id: "item-2",
      question: "How do I get started with cryptocurrency?",
      answer:
        "To get started with cryptocurrency, you'll need to: 1) Choose a reputable cryptocurrency exchange, 2) Complete identity verification, 3) Set up a secure wallet, 4) Start with small amounts to learn, and 5) Research projects thoroughly before investing. Always remember to never invest more than you can afford to lose.",
    },
    {
      id: "item-3",
      question: "What is a blockchain and how does it work?",
      answer:
        "A blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) that are linked and secured using cryptography. Each block contains transaction data, a timestamp, and a cryptographic hash of the previous block, making it virtually impossible to alter historical records.",
    },
    {
      id: "item-4",
      question: "What are smart contracts?",
      answer:
        "Smart contracts are self-executing contracts with terms directly written into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries. They run on blockchain networks like Ethereum and enable decentralized applications (dApps).",
    },
    {
      id: "item-5",
      question: "What is DeFi (Decentralized Finance)?",
      answer:
        "DeFi refers to financial services built on blockchain networks that operate without traditional intermediaries like banks. It includes lending, borrowing, trading, and earning interest on crypto assets through protocols governed by smart contracts and community governance.",
    },
    {
      id: "item-6",
      question: "Are NFTs still relevant and what are their use cases?",
      answer:
        "NFTs (Non-Fungible Tokens) have evolved beyond digital art to include utility-focused applications like gaming assets, membership tokens, digital identity, intellectual property rights, and real-world asset tokenization. Their relevance depends on the utility they provide rather than speculation.",
    },
    {
      id: "item-7",
      question: "How do I keep my crypto assets secure?",
      answer:
        "Crypto security best practices include: using hardware wallets for large amounts, enabling two-factor authentication, never sharing private keys, using reputable exchanges, keeping software updated, being cautious of phishing attempts, and considering multi-signature wallets for additional security.",
    },
    {
      id: "item-8",
      question: "What is the difference between Layer 1 and Layer 2 blockchains?",
      answer:
        "Layer 1 blockchains (like Bitcoin, Ethereum) are the base protocols that process and validate transactions. Layer 2 solutions (like Polygon, Arbitrum) are built on top of Layer 1 to improve scalability, reduce costs, and increase transaction speed while maintaining the security of the underlying blockchain.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Web3 & Blockchain
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Web3, blockchain technology, and the decentralized future
          </p>
        </div>

        <Card className="border-none shadow-none">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-semibold text-center">Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border rounded-lg px-4 hover:bg-accent/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card rounded-full px-6 py-3 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Still have questions? Contact our support team
          </div>
        </div>
      </div>
    </div>
  );
} 