import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  Film,
  ImageIcon,
  Play,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto  flex h-16 items-center justify-around">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Download className="h-5 w-5" />
            <span>InstaGet</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Download Instagram Content{" "}
              <span className="text-primary">Easily</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Save photos, videos, reels, and stories from Instagram with just a
              few clicks. No registration required, fast and free.
            </p>

            <div className="mt-10 w-full max-w-md">
              <Tabs defaultValue="posts" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger
                    value="posts"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span className="hidden sm:inline">Posts</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="reels"
                    className="flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    <span className="hidden sm:inline">Reels</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="stories"
                    className="flex items-center gap-2"
                  >
                    <Clock className="h-4 w-4" />
                    <span className="hidden sm:inline">Stories</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="photos"
                    className="flex items-center gap-2"
                  >
                    <ImageIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">Photos</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="posts">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex w-full items-center space-x-2">
                          <Input
                            type="text"
                            placeholder="Paste Instagram post URL here"
                            className="h-12"
                          />
                          <Button type="submit" className="h-12 px-6">
                            Download
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Example: https://www.instagram.com/p/ABC123/
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reels">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex w-full items-center space-x-2">
                          <Input
                            type="text"
                            placeholder="Paste Instagram reel URL here"
                            className="h-12"
                          />
                          <Button type="submit" className="h-12 px-6">
                            Download
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Example: https://www.instagram.com/reels/ABC123/
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <Film className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Download high-quality reels in MP4 format
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="stories">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex w-full items-center space-x-2">
                          <Input
                            type="text"
                            placeholder="Paste Instagram username for stories"
                            className="h-12"
                          />
                          <Button type="submit" className="h-12 px-6">
                            Download
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Example: @username (enter username without @)
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Stories are only available for 24 hours
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="photos">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex w-full items-center space-x-2">
                          <Input
                            type="text"
                            placeholder="Paste Instagram photo URL here"
                            className="h-12"
                          />
                          <Button type="submit" className="h-12 px-6">
                            Download
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Example: https://www.instagram.com/p/ABC123/
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <ImageIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Download in original high resolution
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Why Choose Our Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Easy to Use</h3>
                <p className="text-muted-foreground">
                  Just paste the Instagram URL and click download. No technical
                  skills required.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Fast Downloads</h3>
                <p className="text-muted-foreground">
                  Our servers process your request instantly for quick
                  downloads.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">100% Safe</h3>
                <p className="text-muted-foreground">
                  We don&apos;t store your data or content. Your privacy is our
                  priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  1
                </div>
                <h3 className="text-xl font-medium mb-2">Copy URL</h3>
                <p className="text-muted-foreground">
                  Copy the URL of the Instagram post, reel, or story you want to
                  download
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  2
                </div>
                <h3 className="text-xl font-medium mb-2">Paste URL</h3>
                <p className="text-muted-foreground">
                  Paste the URL into our downloader input field
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  3
                </div>
                <h3 className="text-xl font-medium mb-2">Download</h3>
                <p className="text-muted-foreground">
                  Click the download button and save the content to your device
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Is this service free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our basic service is completely free to use. We also
                  offer premium plans with additional features for power users.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What content can I download?
                </AccordionTrigger>
                <AccordionContent>
                  You can download photos, videos, reels, IGTV videos, and
                  stories from public Instagram accounts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is it legal to download Instagram content?
                </AccordionTrigger>
                <AccordionContent>
                  Our service is designed for personal use only. Please respect
                  copyright laws and Instagram&apos;s terms of service. Do not
                  download content for commercial purposes without proper
                  permission.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do I need to create an account?
                </AccordionTrigger>
                <AccordionContent>
                  No, you don&apos;t need to create an account to use our basic
                  service. However, registered users get additional benefits
                  like download history and batch processing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I download from private accounts?
                </AccordionTrigger>
                <AccordionContent>
                  No, our service only works with content from public Instagram
                  accounts to respect user privacy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Ready to Download Instagram Content?
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground mb-8">
              Join thousands of users who trust our service for fast and
              reliable Instagram downloads.
            </p>
            <Button size="lg" className="h-12 px-8">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold">
            <Download className="h-5 w-5" />
            <span>InstaGet</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InstaGet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
