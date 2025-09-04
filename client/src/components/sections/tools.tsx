import { useState } from "react";
import { DownloaderCard } from "../tools/downloader-card";
import { GeneratorCard } from "../tools/generator-card";
import { ToolCard } from "../tools/tool-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { analyzeContent, generateContent } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

export function Tools() {
  const { toast } = useToast();

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All Tools You Need in One Place
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive collection of social media tools designed to boost your online presence
          </p>
        </div>

        {/* Social Media Downloaders */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-download text-red-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Social Media Downloaders</h3>
            <Badge className="ml-4 bg-red-100 text-red-600 hover:bg-red-100">8 Tools</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DownloaderCard
              platform="YouTube"
              icon="fab fa-youtube"
              title="YouTube Downloader"
              description="Download YouTube videos and audio in HD quality"
              color="text-red-600"
              bgColor="bg-red-100"
            />
            <DownloaderCard
              platform="Instagram"
              icon="fab fa-instagram"
              title="Instagram Downloader"
              description="Save Instagram posts, stories, and reels"
              color="text-pink-600"
              bgColor="bg-pink-100"
            />
            <DownloaderCard
              platform="TikTok"
              icon="fab fa-tiktok"
              title="TikTok Downloader"
              description="Download TikTok videos without watermark"
              color="text-gray-800"
              bgColor="bg-gray-100"
            />
            <DownloaderCard
              platform="Twitter"
              icon="fab fa-twitter"
              title="Twitter Downloader"
              description="Save Twitter videos and GIFs easily"
              color="text-blue-600"
              bgColor="bg-blue-100"
            />
            <DownloaderCard
              platform="Facebook"
              icon="fab fa-facebook"
              title="Facebook Downloader"
              description="Download Facebook videos and images"
              color="text-blue-700"
              bgColor="bg-blue-100"
            />
            <DownloaderCard
              platform="Pinterest"
              icon="fab fa-pinterest"
              title="Pinterest Downloader"
              description="Save Pinterest images and videos"
              color="text-red-600"
              bgColor="bg-red-100"
            />
            <DownloaderCard
              platform="LinkedIn"
              icon="fab fa-linkedin"
              title="LinkedIn Downloader"
              description="Download LinkedIn posts and videos"
              color="text-blue-700"
              bgColor="bg-blue-100"
            />
            <DownloaderCard
              platform="Reddit"
              icon="fab fa-reddit"
              title="Reddit Downloader"
              description="Save Reddit posts and media content"
              color="text-orange-600"
              bgColor="bg-orange-100"
            />
          </div>
        </div>

        {/* Content Generators */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-magic text-purple-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Content Generators</h3>
            <Badge className="ml-4 bg-purple-100 text-purple-600 hover:bg-purple-100">7 Tools</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GeneratorCard
              tool="title-generator"
              icon="fas fa-heading"
              title="Title Generator"
              description="Create viral video titles that get clicks"
              color="text-green-600"
              bgColor="bg-green-100"
              inputPlaceholder="Enter topic..."
            />
            <GeneratorCard
              tool="description-generator"
              icon="fas fa-align-left"
              title="Description Generator"
              description="AI-powered video descriptions"
              color="text-blue-600"
              bgColor="bg-blue-100"
              inputPlaceholder="Enter topic..."
            />
            <GeneratorCard
              tool="hashtag-generator"
              icon="fas fa-hashtag"
              title="Hashtag Generator"
              description="Generate trending hashtags for reach"
              color="text-indigo-600"
              bgColor="bg-indigo-100"
              inputPlaceholder="Enter topic..."
            />
            <GeneratorCard
              tool="tag-generator"
              icon="fas fa-tags"
              title="Tag Generator"
              description="Generate SEO-optimized tags"
              color="text-yellow-600"
              bgColor="bg-yellow-100"
              inputPlaceholder="Enter topic..."
            />
            <GeneratorCard
              tool="logo-generator"
              icon="fas fa-palette"
              title="Logo Generator"
              description="Create professional logos instantly"
              color="text-orange-600"
              bgColor="bg-orange-100"
              inputPlaceholder="Enter name..."
              inputField="name"
            />
            <GeneratorCard
              tool="banner-generator"
              icon="fas fa-image"
              title="Banner Generator"
              description="Design eye-catching channel banners"
              color="text-pink-600"
              bgColor="bg-pink-100"
              inputPlaceholder="Enter name..."
              inputField="name"
            />
            <GeneratorCard
              tool="thumbnail-generator"
              icon="fas fa-play"
              title="Thumbnail Generator"
              description="Create click-worthy thumbnails"
              color="text-teal-600"
              bgColor="bg-teal-100"
              inputPlaceholder="Enter title..."
              inputField="title"
            />
          </div>
        </div>

        {/* SEO & Analytics Tools */}
        <SEOAnalyticsSection />

        {/* Viral Content Tools */}
        <ViralContentSection />
      </div>
    </section>
  );
}

function SEOAnalyticsSection() {
  const [keyword, setKeyword] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const { toast } = useToast();

  const keywordMutation = useMutation({
    mutationFn: (keyword: string) => analyzeContent("keyword-research", { keyword }),
    onSuccess: () => toast({ title: "Research Complete!", description: "Keyword data is ready" }),
    onError: (error) => toast({ title: "Research Failed", description: error.message, variant: "destructive" })
  });

  const channelMutation = useMutation({
    mutationFn: (url: string) => analyzeContent("channel-analysis", { channelUrl: url }),
    onSuccess: () => toast({ title: "Analysis Complete!", description: "Channel data is ready" }),
    onError: (error) => toast({ title: "Analysis Failed", description: error.message, variant: "destructive" })
  });

  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
          <i className="fas fa-chart-line text-emerald-600"></i>
        </div>
        <h3 className="text-2xl font-bold text-foreground">SEO & Analytics</h3>
        <Badge className="ml-4 bg-emerald-100 text-emerald-600 hover:bg-emerald-100">5 Tools</Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Keyword Research */}
        <ToolCard
          icon="fas fa-search"
          title="Keyword Research"
          description="Find trending keywords for your content"
          color="text-green-600"
          bgColor="bg-green-100"
          onUse={() => {}}
        >
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Enter keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              data-testid="input-keyword-research"
            />
            <Button 
              onClick={() => keyword && keywordMutation.mutate(keyword)}
              disabled={keywordMutation.isPending}
              className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              data-testid="button-research-keyword"
            >
              {keywordMutation.isPending ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <i className="fas fa-search mr-2"></i>
              )}
              Research
            </Button>
          </div>
          {keywordMutation.data && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm" data-testid="result-keyword-research">
              <div className="grid grid-cols-2 gap-2">
                <div>Volume: <span className="font-medium">{keywordMutation.data.data.volume}</span></div>
                <div>Competition: <span className="font-medium">{keywordMutation.data.data.competition}</span></div>
                <div>Difficulty: <span className="font-medium">{keywordMutation.data.data.difficulty}/100</span></div>
                <div>CPC: <span className="font-medium">{keywordMutation.data.data.cpc}</span></div>
              </div>
            </div>
          )}
        </ToolCard>

        {/* Channel Analysis */}
        <ToolCard
          icon="fas fa-chart-bar"
          title="Channel Analysis"
          description="Analyze any YouTube channel performance"
          color="text-blue-600"
          bgColor="bg-blue-100"
          onUse={() => {}}
        >
          <div className="space-y-3">
            <Input
              type="url"
              placeholder="Enter channel URL..."
              value={channelUrl}
              onChange={(e) => setChannelUrl(e.target.value)}
              data-testid="input-channel-analysis"
            />
            <Button 
              onClick={() => channelUrl && channelMutation.mutate(channelUrl)}
              disabled={channelMutation.isPending}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              data-testid="button-analyze-channel"
            >
              {channelMutation.isPending ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <i className="fas fa-chart-bar mr-2"></i>
              )}
              Analyze
            </Button>
          </div>
          {channelMutation.data && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm" data-testid="result-channel-analysis">
              <div className="grid grid-cols-2 gap-2">
                <div>Subs: <span className="font-medium">{channelMutation.data.data.subscribers}</span></div>
                <div>Videos: <span className="font-medium">{channelMutation.data.data.videos}</span></div>
                <div>Growth: <span className="font-medium">{channelMutation.data.data.growth}</span></div>
                <div>Score: <span className="font-medium">{channelMutation.data.data.seoScore}/100</span></div>
              </div>
            </div>
          )}
        </ToolCard>

        {/* Other SEO Tools */}
        <ToolCard
          icon="fas fa-video"
          title="Video Analysis"
          description="Get detailed video performance insights"
          color="text-purple-600"
          bgColor="bg-purple-100"
          onUse={() => toast({ title: "Video Analysis", description: "Enter a video URL to analyze performance" })}
        />
        <ToolCard
          icon="fas fa-info-circle"
          title="Channel Info"
          description="Get comprehensive channel statistics"
          color="text-indigo-600"
          bgColor="bg-indigo-100"
          onUse={() => toast({ title: "Channel Info", description: "Enter a channel URL to get statistics" })}
        />
        <ToolCard
          icon="fas fa-copy"
          title="Copy Title & Description"
          description="Extract title and description from videos"
          color="text-orange-600"
          bgColor="bg-orange-100"
          onUse={() => toast({ title: "Copy Tool", description: "Enter a video URL to extract content" })}
        />
      </div>
    </div>
  );
}

function ViralContentSection() {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
          <i className="fas fa-fire text-yellow-600"></i>
        </div>
        <h3 className="text-2xl font-bold text-foreground">Viral Content Tools</h3>
        <Badge className="ml-4 bg-yellow-100 text-yellow-600 hover:bg-yellow-100">5 Tools</Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <GeneratorCard
          tool="meme-generator"
          icon="fas fa-laugh"
          title="Meme Generator"
          description="Create viral memes instantly"
          color="text-yellow-600"
          bgColor="bg-yellow-100"
          inputPlaceholder="Enter topic..."
        />
        <GeneratorCard
          tool="quotes-generator"
          icon="fas fa-quote-left"
          title="Quotes Generator"
          description="Generate inspiring quote graphics"
          color="text-pink-600"
          bgColor="bg-pink-100"
          inputPlaceholder="Enter topic..."
        />
        <GeneratorCard
          tool="caption-generator"
          icon="fas fa-pen"
          title="Caption Generator"
          description="Create engaging social media captions"
          color="text-purple-600"
          bgColor="bg-purple-100"
          inputPlaceholder="Enter topic..."
        />
        <GeneratorCard
          tool="shorts-ideas"
          icon="fas fa-lightbulb"
          title="Shorts Idea Generator"
          description="Get viral YouTube Shorts ideas"
          color="text-green-600"
          bgColor="bg-green-100"
          inputPlaceholder="Enter topic..."
        />
        <GeneratorCard
          tool="music-finder"
          icon="fas fa-music"
          title="Music Finder"
          description="Find royalty-free music for videos"
          color="text-blue-600"
          bgColor="bg-blue-100"
          inputPlaceholder="Enter mood..."
          inputField="mood"
        />
      </div>
    </div>
  );
}
