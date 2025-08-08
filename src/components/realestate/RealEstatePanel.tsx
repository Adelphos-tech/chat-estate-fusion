import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const RealEstatePanel = () => {
  return (
    <section className="relative h-full min-h-[70vh] p-8 text-primary-foreground">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/76993f42-5917-431a-ac88-09bd32a08b1b.png" alt="AIQ real estate company logo" className="h-12 w-12 md:h-14 md:w-14" loading="lazy" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Real Estate</h2>
              <p className="text-muted-foreground mt-1">Discover our projects and get in touch.</p>
            </div>
          </div>
        </header>

        <Tabs defaultValue="real-estate" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="real-estate">Real Estate</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="real-estate" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden bg-background/5 border-border/20 text-primary-foreground">
                <img src={property1} alt="Modern glass-front home exterior, golden hour" loading="lazy" />
                <CardHeader>
                  <CardTitle>Contemporary Haven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">4 bed • 3 bath • 2,800 sqft</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden bg-background/5 border-border/20 text-primary-foreground">
                <img src={property2} alt="Luxury penthouse living room with city skyline view" loading="lazy" />
                <CardHeader>
                  <CardTitle>Skyline Penthouse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Downtown • Private terrace</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden md:col-span-2 bg-background/5 border-border/20 text-primary-foreground">
                <img src={property3} alt="Charming suburban home with manicured lawn" loading="lazy" />
                <CardHeader>
                  <CardTitle>Suburban Retreat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">3 bed • 2 bath • Quiet cul‑de‑sac</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <Card className="bg-background/5 border-border/20 text-primary-foreground">
              <CardHeader>
                <CardTitle>About Our Studio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  We craft thoughtful real estate experiences—from concept to closing. Our
                  team blends market insight with architectural taste to showcase properties
                  at their best.
                </p>
                <p className="text-muted-foreground">
                  From premium photography to bespoke landing pages and campaigns, we help
                  listings stand out and sell faster.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <Card className="bg-background/5 border-border/20 text-primary-foreground">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Your name" aria-label="Your name" />
                    <Input type="email" name="email" placeholder="Email" aria-label="Email" />
                  </div>
                  <Textarea name="message" placeholder="Tell us about your project" aria-label="Message" />
                  <Button type="submit" className="w-fit">Send</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RealEstatePanel;
