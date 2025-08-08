import ChatPanel from "@/components/chat/ChatPanel";
import RealEstatePanel from "@/components/realestate/RealEstatePanel";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chat Estate Fusion",
    url: canonical || "https://example.com",
    potentialAction: {
      "@type": "SearchAction",
      target: `${canonical}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 ambient-spotlights text-primary-foreground">
      <Helmet>
        <title>Chat Estate Fusion — Ask anything | Works, About, Contact</title>
        <meta
          name="description"
          content="Ask anything with a sleek chat on the left and explore our real estate Works, About, and Contact on the right."
        />
        {canonical && <link rel="canonical" href={canonical} />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ChatPanel />
      <RealEstatePanel />
    </main>
  );
};

export default Index;
