import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WEBHOOK_URL =
  "https://demoverison1.app.n8n.cloud/webhook/59688087-8e7a-4476-a549-16070fb38c99";

const ChatPanel = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = message.trim();
    if (!query) return;
    setLoading(true);
    setOutput("");
    setImageUrl(undefined);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query, input: query }),
      });

      // Try to parse JSON; if not JSON, treat as text
      let data: any = null;
      const text = await res.text();
      try {
        data = JSON.parse(text);
      } catch {
        data = { output: text };
      }

      const onlyOutput = data?.output ?? "";
      const img =
        data?.image || data?.image_url || data?.imageUrl || data?.output_image;
      setOutput(String(onlyOutput));
      if (typeof img === "string") setImageUrl(img);
    } catch (err) {
      console.error(err);
      toast({
        title: "Request failed",
        description: "Could not reach the workflow. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative h-full min-h-[70vh] flex flex-col justify-between bg-foreground text-primary-foreground ambient-spotlights p-8"
      aria-label="Chat interface"
    >
      <div className="mx-auto max-w-2xl w-full text-center pt-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Ask anything</h1>
        <p className="mt-2 text-sm md:text-base text-muted-foreground/80">
          Fast, helpful answers with built-in reasoning.
        </p>
      </div>

      <div className="mx-auto max-w-2xl w-full flex-1 flex items-center justify-center">
        <Card className="w-full bg-background/5 border-border/20">
          <CardContent className="p-6 space-y-4">
            {loading ? (
              <div className="text-sm text-muted-foreground">Thinking…</div>
            ) : output ? (
              <div className="text-left space-y-3">
                <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                  {output}
                </p>
                {imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imageUrl}
                    alt="Response related"
                    loading="lazy"
                    className="rounded-lg border border-border/40"
                  />
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground/80">
                Your response will appear here.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl w-full relative"
        aria-label="Ask anything form"
      >
        <div className="glass-surface rounded-full pl-6 pr-20 py-3 md:py-4 shadow-[var(--shadow-elegant)]">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything"
            className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-primary-foreground placeholder:text-muted-foreground"
            aria-label="Your message"
          />
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
            aria-label="Send message"
            disabled={loading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground/70">
        Powered by your private workflow
      </p>
    </section>
  );
};

export default ChatPanel;
