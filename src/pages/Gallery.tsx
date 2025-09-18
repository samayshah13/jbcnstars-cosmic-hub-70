import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Play, Calendar, Camera, Video, Trophy, Medal, Shuffle, Dice1, X, Users, MessageCircle, Send, Heart, ThumbsUp, Zap, Star, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import RickRollEasterEgg from "@/components/RickRollEasterEgg";
import MiniGalleryCompact from "@/components/MiniGalleryCompact";
import LiveStreamWidget from "@/components/LiveStreamWidget";
const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState("2023");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{
    embed: string;
    padding: string;
  } | null>(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([{
    id: 1,
    user: "Arjun Patel",
    message: "Amazing competition! The problems are so challenging.",
    time: "2 min ago"
  }, {
    id: 2,
    user: "Priya Sharma",
    message: "Love watching the team rounds. Great collaboration!",
    time: "5 min ago"
  }, {
    id: 3,
    user: "Rahul Kumar",
    message: "This is inspiring! Can't wait to participate next year.",
    time: "8 min ago"
  }]);
  const [emoticons, setEmoticons] = useState<{
    [key: string]: number;
  }>({
    heart: 0,
    thumbsUp: 0,
    zap: 0,
    star: 0
  });

  // Shuffle state for each gallery
  const [shuffledGalleries, setShuffledGalleries] = useState<{
    [key: string]: string[];
  }>({});

  // JBCN Stars 2023 Gallery Images
  const gallery2023 = ["https://i.postimg.cc/zBCYt7f3/Copy-of-IMG-5576.jpg", "https://i.postimg.cc/KzrCrY9M/Copy-of-IMG-5577.jpg", "https://i.postimg.cc/j2R0GfWc/Copy-of-IMG-5578.jpg", "https://i.postimg.cc/cHyNB20V/Copy-of-IMG-5580.jpg", "https://i.postimg.cc/SRS3Zp5t/Copy-of-IMG-5582.jpg", "https://i.postimg.cc/Y08KkSYH/Copy-of-IMG-5585.jpg", "https://i.postimg.cc/1Rvj92bs/Copy-of-IMG-5587.jpg", "https://i.postimg.cc/bNdFdLjb/Copy-of-IMG-5591.jpg", "https://i.postimg.cc/66hNCMSm/Copy-of-IMG-5595.jpg", "https://i.postimg.cc/brmMWBfY/Copy-of-IMG-5597.jpg", "https://i.postimg.cc/28J9Wvzt/Copy-of-IMG-5599.jpg", "https://i.postimg.cc/VLHpFpFD/Copy-of-IMG-5601.jpg", "https://i.postimg.cc/ncRbPCnK/Copy-of-IMG-5605.jpg", "https://i.postimg.cc/4x7M2PLZ/Copy-of-IMG-5608.jpg", "https://i.postimg.cc/Kvvhfnhv/Copy-of-IMG-5612.jpg", "https://i.postimg.cc/2SgpCMbV/Copy-of-IMG-5613.jpg", "https://i.postimg.cc/HkqNqMRM/Copy-of-IMG-5618.jpg", "https://i.postimg.cc/K81SSxY6/Copy-of-IMG-5622.jpg", "https://i.postimg.cc/pdjwrCzk/Copy-of-IMG-5623.jpg", "https://i.postimg.cc/FK06NRXB/Copy-of-IMG-5625.jpg", "https://i.postimg.cc/JnqdH2n3/Copy-of-IMG-5629.jpg", "https://i.postimg.cc/RhZp7L6k/Copy-of-IMG-5634.jpg", "https://i.postimg.cc/Zns7Vv6C/Copy-of-IMG-5638.jpg", "https://i.postimg.cc/ydvv83Qv/Copy-of-IMG-5645.jpg", "https://i.postimg.cc/14x6m9Qv/Copy-of-IMG-5646.jpg", "https://i.postimg.cc/rmFN3FVW/Copy-of-IMG-5649.jpg", "https://i.postimg.cc/Px3QjsJ7/Copy-of-IMG-5650.jpg", "https://i.postimg.cc/kG2FM1tg/Copy-of-IMG-5651.jpg", "https://i.postimg.cc/BZjVnM3F/Copy-of-IMG-5653.jpg", "https://i.postimg.cc/fT0j6PNH/Copy-of-IMG-5656.jpg", "https://i.postimg.cc/gc1BX8cT/Copy-of-IMG-5662.jpg", "https://i.postimg.cc/65Rbdqy5/Copy-of-IMG-5663.jpg", "https://i.postimg.cc/6pfHmPrk/Copy-of-IMG-5667.jpg", "https://i.postimg.cc/pVSJcHgh/Copy-of-IMG-5669.jpg", "https://i.postimg.cc/8cgMDpDt/Copy-of-IMG-5670.jpg", "https://i.postimg.cc/htWbg04K/Copy-of-IMG-5674.jpg", "https://i.postimg.cc/zGyBtmYB/Copy-of-IMG-5687.jpg", "https://i.postimg.cc/pL3d30PB/Copy-of-IMG-5688.jpg", "https://i.postimg.cc/SKXMM2xg/Copy-of-IMG-5692.jpg", "https://i.postimg.cc/28cy7kJM/Copy-of-IMG-5694.jpg", "https://i.postimg.cc/wj4NMcgt/Copy-of-IMG-5697.jpg", "https://i.postimg.cc/76kZZfGG/Copy-of-IMG-5703.jpg", "https://i.postimg.cc/8CqrBpFN/Copy-of-IMG-5704.jpg", "https://i.postimg.cc/JnZHpfJJ/Copy-of-IMG-5707.jpg", "https://i.postimg.cc/W4MsCTW2/Copy-of-IMG-5713.jpg", "https://i.postimg.cc/gkTc6MLP/Copy-of-IMG-5721.jpg", "https://i.postimg.cc/pL5WQDK5/Copy-of-IMG-5722.jpg", "https://i.postimg.cc/hvwFh5yy/Copy-of-IMG-5724.jpg", "https://i.postimg.cc/k5C0V8sm/Copy-of-IMG-5725.jpg", "https://i.postimg.cc/Sx65pRht/Copy-of-IMG-5729.jpg", "https://i.postimg.cc/1X82xKmp/Copy-of-IMG-5730.jpg", "https://i.postimg.cc/L5G7mZ5G/Copy-of-IMG-5731.jpg", "https://i.postimg.cc/dtTp4nSF/Copy-of-IMG-5732.jpg", "https://i.postimg.cc/YStP2722/Copy-of-IMG-5735.jpg", "https://i.postimg.cc/6TsHkJ1X/Copy-of-IMG-5740.jpg", "https://i.postimg.cc/0NZBb4rY/Copy-of-IMG-5742.jpg", "https://i.postimg.cc/wxt9YXbf/Copy-of-IMG-5745.jpg", "https://i.postimg.cc/MpwwBhZN/Copy-of-IMG-5746.jpg", "https://i.postimg.cc/8PMDj1GL/Copy-of-IMG-5747.jpg", "https://i.postimg.cc/268gGDg9/Copy-of-IMG-5749.jpg", "https://i.postimg.cc/VkF8WDd6/Copy-of-IMG-5751.jpg", "https://i.postimg.cc/yNYzQcZT/Copy-of-IMG-5752.jpg", "https://i.postimg.cc/rpn2vsG2/Copy-of-IMG-5755.jpg", "https://i.postimg.cc/FRw5H6nP/Copy-of-IMG-5761.jpg", "https://i.postimg.cc/fLVQZs5t/Copy-of-IMG-5766.jpg", "https://i.postimg.cc/nzPS1Q4M/Copy-of-IMG-5768.jpg", "https://i.postimg.cc/PxxFZM8B/Copy-of-IMG-5770.jpg", "https://i.postimg.cc/j2ng3dcc/Copy-of-IMG-5772.jpg", "https://i.postimg.cc/sfZCNVvb/Copy-of-IMG-5775.jpg"];

  // JBCN Stars 2024 Gallery Images
  const gallery2024 = ["https://i.postimg.cc/kM8XtNFV/Copy-of-IMG20241018102512.jpg", "https://i.postimg.cc/nz9V2ByP/Copy-of-IMG20241018103503-01.jpg", "https://i.postimg.cc/2y4kRm8d/Copy-of-IMG20241018153850-01.jpg", "https://i.postimg.cc/HsgW0JB6/Copy-of-IMG20241018153919-01.jpg", "https://i.postimg.cc/dtjs5qfw/Copy-of-IMG20241018153953-01.jpg", "https://i.postimg.cc/Jz71gfwJ/Copy-of-IMG20241018154016-01.jpg", "https://i.postimg.cc/SxZypgqP/Copy-of-IMG20241018154045-01.jpg", "https://i.postimg.cc/JhvMstsc/Copy-of-IMG20241018154114-01.jpg", "https://i.postimg.cc/MGvzZ1pp/Copy-of-IMG20241018154146-01.jpg", "https://i.postimg.cc/KzTFBFLX/Copy-of-IMG20241018154331-02.jpg", "https://i.postimg.cc/BZx4vS4H/Copy-of-IMG20241018155906.jpg", "https://i.postimg.cc/FRy8hK3K/Copy-of-IMG-20241018-083756-1.jpg", "https://i.postimg.cc/c1c2jrd9/Copy-of-IMG-20241018-083823.jpg", "https://i.postimg.cc/3RzNQnjh/Copy-of-IMG-20241018-083834.jpg", "https://i.postimg.cc/wBf30677/Copy-of-IMG-20241018-101809.jpg", "https://i.postimg.cc/V6Jvh3C4/Copy-of-IMG-20241018-101809-1.jpg", "https://i.postimg.cc/0jmQkDZw/Copy-of-IMG-20241018-101823.jpg", "https://i.postimg.cc/QMyxc0y7/Copy-of-IMG-20241018-101833.jpg", "https://i.postimg.cc/gj9zTrdk/Copy-of-IMG-20241018-101838.jpg", "https://i.postimg.cc/NF7cC4pp/Copy-of-IMG-6848.avif", "https://i.postimg.cc/bJc4XnGM/Copy-of-IMG-6849.avif", "https://i.postimg.cc/Rhv8hzLL/Copy-of-IMG-6851.avif", "https://i.postimg.cc/QxxwrhtX/Copy-of-IMG-6852.avif", "https://i.postimg.cc/qqQFCZmV/Copy-of-IMG-6853.avif"];

  // Mixed Years Gallery Images
  const galleryMixed = ["https://i.postimg.cc/PxCbMVrn/Copy-of-20231028-121634.jpg", "https://i.postimg.cc/N0fkKf3M/Copy-of-20231028-121709.jpg", "https://i.postimg.cc/RZ1HQ57H/Copy-of-Copy-of-20231028-145514.jpg", "https://i.postimg.cc/LXgfPqNH/Copy-of-Copy-of-IMG-20231028-WA0078.jpg", "https://i.postimg.cc/Gt0Dxc5v/Copy-of-Copy-of-IMG-20231028-WA0089.jpg", "https://i.postimg.cc/0jmpT6wt/Copy-of-Copy-of-IMG-20231028-WA0091.jpg", "https://i.postimg.cc/RF27p1N6/Copy-of-Copy-of-IMG-20231028-WA0092.jpg", "https://i.postimg.cc/bNc0QR74/Copy-of-Copy-of-IMG-20231028-WA0093.jpg", "https://i.postimg.cc/nc44TDZr/Copy-of-Copy-of-IMG-20231028-WA0094.jpg", "https://i.postimg.cc/6pBdPp50/Copy-of-Copy-of-IMG-20231028-WA0095.jpg", "https://i.postimg.cc/vZXWww4d/Copy-of-Copy-of-IMG-20231028-WA0096.jpg", "https://i.postimg.cc/tJhxrLKw/Copy-of-Copy-of-IMG-20231028-WA0097.jpg", "https://i.postimg.cc/59vLNCXg/Copy-of-Copy-of-IMG-20231028-WA0098.jpg", "https://i.postimg.cc/bNhbGwbh/Copy-of-Copy-of-IMG-20231028-WA0099.jpg", "https://i.postimg.cc/y86ZPpvp/Copy-of-Copy-of-IMG-20231028-WA0100.jpg", "https://i.postimg.cc/cJr8qgqQ/Copy-of-Copy-of-IMG-20231028-WA0101.jpg", "https://i.postimg.cc/yYyR0CXS/Copy-of-Copy-of-IMG-20231028-WA0102.jpg", "https://i.postimg.cc/1RTwyKRf/Copy-of-Copy-of-IMG-20231028-WA0122.jpg", "https://i.postimg.cc/mrbFmXj6/Copy-of-Copy-of-IMG-3322.avif", "https://i.postimg.cc/W4302YZq/Copy-of-Copy-of-IMG-3323.avif", "https://i.postimg.cc/WpJ6FyHM/Copy-of-Copy-of-IMG-3324.avif", "https://i.postimg.cc/1tdn59QL/Copy-of-Copy-of-IMG-3326.avif", "https://i.postimg.cc/2SHBXdtk/Copy-of-Copy-of-IMG-3329.avif", "https://i.postimg.cc/yNbcWhhQ/Copy-of-Copy-of-IMG-3330.avif", "https://i.postimg.cc/qRq6TN9s/Copy-of-Copy-of-IMG-3331.avif", "https://i.postimg.cc/W4XqCGfp/Copy-of-Copy-of-Whats-App-Image-2023-11-03-at-12-13-20-PM.jpg", "https://i.postimg.cc/1z2VymPb/Copy-of-Copy-of-Whats-App-Image-2023-11-03-at-12-13-20-PM-3.jpg", "https://i.postimg.cc/9XvbL278/Copy-of-IMG-20231028-WA0079.jpg", "https://i.postimg.cc/ncBk5WKH/Copy-of-IMG-20231028-WA0080.jpg", "https://i.postimg.cc/jSTXrhvy/Copy-of-IMG-20231028-WA0081.jpg", "https://i.postimg.cc/3NDykPrW/Copy-of-IMG-20231028-WA0128.jpg", "https://i.postimg.cc/w381L032/Copy-of-IMG-20231028-WA0129.jpg", "https://i.postimg.cc/HLZ4X1mt/Copy-of-IMG-20231028-102033.jpg", "https://i.postimg.cc/Gmjj3sSV/Copy-of-IMG-3335.avif", "https://i.postimg.cc/1RgM0XfV/Copy-of-Whats-App-Image-2023-10-28-at-5-37-24-PM.jpg"];

  // Video Gallery Embed Codes
  const videoGallery = [{
    embed: "https://streamable.com/e/tij7p0?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/zf4eex?",
    padding: "56.604%"
  }, {
    embed: "https://streamable.com/e/oznx3y?",
    padding: "176.847%"
  }, {
    embed: "https://streamable.com/e/n03f86?",
    padding: "176.667%"
  }, {
    embed: "https://streamable.com/e/wlef2j?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/hitt15?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/pwvjoh?",
    padding: "176.667%"
  }, {
    embed: "https://streamable.com/e/2tk1pv?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/ku44by?",
    padding: "133.333%"
  }, {
    embed: "https://streamable.com/e/s1qu4k?",
    padding: "56.250%"
  }, {
    embed: "https://streamable.com/e/fpvxz4?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/uabbu4?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/igbl5n?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/q4ting?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/gftpmc?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/ync8iv?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/9ol3k4?",
    padding: "133.333%"
  }, {
    embed: "https://streamable.com/e/yxzf05?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/udnkdv?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/5vy3lk?",
    padding: "178.218%"
  }, {
    embed: "https://streamable.com/e/rpvnwo?",
    padding: "178.218%"
  }];
  const sections = [{
    id: "2023",
    label: "JBCN Stars 2023",
    icon: Trophy,
    count: gallery2023.length
  }, {
    id: "2024",
    label: "JBCN Stars 2024",
    icon: Medal,
    count: gallery2024.length
  }, {
    id: "mixed",
    label: "Mixed Years",
    icon: Camera,
    count: galleryMixed.length
  }, {
    id: "videos",
    label: "Video Gallery",
    icon: Video,
    count: videoGallery.length
  }];
  const getCurrentGallery = () => {
    const currentKey = selectedSection;
    if (shuffledGalleries[currentKey]) {
      return shuffledGalleries[currentKey];
    }
    switch (selectedSection) {
      case "2023":
        return gallery2023;
      case "2024":
        return gallery2024;
      case "mixed":
        return galleryMixed;
      default:
        return gallery2023;
    }
  };
  const shuffleGallery = () => {
    const currentGallery = getCurrentGallery();
    const shuffled = [...currentGallery].sort(() => Math.random() - 0.5);
    setShuffledGalleries(prev => ({
      ...prev,
      [selectedSection]: shuffled
    }));
  };
  const showRandomCard = () => {
    const currentGallery = getCurrentGallery();
    const randomIndex = Math.floor(Math.random() * currentGallery.length);
    const randomImage = currentGallery[randomIndex];
    setSelectedPhoto(randomImage);
  };
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: "You",
        message: comment,
        time: "Just now"
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };
  const addEmoticon = (type: string) => {
    setEmoticons(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };
  const renderImageGallery = (images: string[]) => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="card-premium p-0 overflow-hidden group cursor-pointer hover-scale" style={{
          animationDelay: `${index * 0.05}s`
        }}>
              <div className="relative aspect-square overflow-hidden">
                <img src={image} alt={`JBCN Stars Event ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
            <div className="relative">
              <img src={image} alt={`JBCN Stars Event ${index + 1}`} className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full" onClick={() => setSelectedPhoto(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>)}
    </div>;
  const renderVideoGallery = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoGallery.map((video, index) => <div key={index} className="card-premium p-4 flex items-center justify-center" style={{
      animationDelay: `${index * 0.1}s`
    }}>
          <div style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: video.padding
      }} className="bg-black rounded-lg overflow-hidden">
            <iframe allow="fullscreen" allowFullScreen height="100%" src={video.embed} width="100%" style={{
          border: "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          overflow: "hidden",
          borderRadius: "8px"
        }} title={`JBCN Stars Video ${index + 1}`} />
          </div>
        </div>)}
    </div>;
  return <Layout>
      <div className="py-20 grid-bg">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Event <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Relive the most memorable moments from JBCNSTARS competitions across the years
            </p>
            
            {/* Gallery Navigation Dropdown */}
            <div className="flex justify-center mt-8 mb-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Quick Access
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48 bg-background backdrop-blur-xl border border-border/50 shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link to="/results" className="w-full cursor-pointer text-foreground hover:text-primary hover:bg-accent/50">
                      Competition Results
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Gallery Widgets Grid */}
          

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sections.map(section => {
            const Icon = section.icon;
            return <Button key={section.id} variant={selectedSection === section.id ? "default" : "outline"} onClick={() => setSelectedSection(section.id)} className="rounded-full flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {section.label}
                  <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs ml-2">
                    {section.count}
                  </span>
                </Button>;
          })}
          </div>

          {/* Gallery Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={shuffleGallery} variant="outline" className="rounded-full flex items-center gap-2">
              <Shuffle className="w-4 h-4" />
              Shuffle Gallery
            </Button>
            <Button onClick={showRandomCard} variant="outline" className="rounded-full flex items-center gap-2">
              <Dice1 className="w-4 h-4" />
              Random Card
            </Button>
            
            {/* Rick Roll Easter Egg */}
            <RickRollEasterEgg liveStreamUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="rounded-full" />
          </div>

          {/* Gallery Content */}
          <div className="mb-20">
            {selectedSection === "videos" ? <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  JBCN Stars Video Gallery (2023 & 2024)
                </h2>
                {renderVideoGallery()}
              </div> : <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  {sections.find(s => s.id === selectedSection)?.label} Gallery
                </h2>
                {renderImageGallery(getCurrentGallery())}
              </div>}
          </div>

          {/* Stats Section */}
          <div className="text-center">
            <div className="card-premium p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8">JBCNSTARS by Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[{
                number: "150+",
                label: "Total Photos"
              }, {
                number: "21",
                label: "Videos"
              }, {
                number: "2",
                label: "Years Running"
              }, {
                number: "320+",
                label: "Participants"
              }].map((stat, index) => <div key={index}>
                    <div className="text-3xl font-black text-primary mb-2">{stat.number}</div>
                    <div className="text-foreground-muted">{stat.label}</div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Gallery;