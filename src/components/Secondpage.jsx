import React from 'react';
import { ArrowRight, Sparkles, Mic, ImageIcon, Binary, Cpu } from 'lucide-react';

const SecondPage = () => {
  return (
    <div className="h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className='max-w-4xl m-auto'>
          <h1 className="text-5xl font-semibold text-center mb-12">
            Use AI faster and more efficiently right on your device!
          </h1>
        </div>

        <div className="flex flex-row items-center gap-8 mb-16">
          {/* Left Column - Dark Card */}
          <div className="flex-none bg-gradient-to-br from-orange-900/20 to-gray-900 rounded-2xl p-6 relative overflow-hidden h-96 w-96">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/2 w-px h-12 bg-orange-500/50 rotate-45"></div>
              <div className="absolute top-1/3 left-1/3 w-px h-16 bg-orange-500/30 -rotate-45"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h2 className="text-xl font-semibold mb-2">
                Try Gcore Inference At The Edge:
              </h2>
              <p className="text-lg text-gray-300">
                Speed Up AI, Reduce Latency.
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col flex-1 space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Gcore Inference at the Edge reduces the latency of your ML model output and improves the performance of AI-enabled applications.
              </h2>
              <p className="text-gray-400">
                It's particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.
              </p>
            </div>

            {/* Features Grid */}
            <div className="flex flex-wrap gap-4 pt-8">
              <div className="flex-1 basis-[30%] min-w-[180px]">
                <FeatureCard icon={<Sparkles />} text="Text generation" />
              </div>
              <div className="flex-1 basis-[30%] min-w-[180px]">
                <FeatureCard icon={<ImageIcon />} text="Image generation" />
              </div>
              <div className="flex-1 basis-[30%] min-w-[180px]">
                <FeatureCard icon={<Mic />} text="Speech recognition" />
              </div>
              <div className="flex-1 basis-[30%] min-w-[180px]">
                <FeatureCard icon={<Binary />} text="Text generation" />
              </div>
              <div className="flex-1 basis-[30%] min-w-[180px]">
                <FeatureCard icon={<Cpu />} text="Image classification" />
              </div>
              <div className="flex-1 basis-[30%] min-w-[180px]">
                <FeatureCard icon={<ArrowRight />} text="Speech recognition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
    <span className="text-orange-500">
      {icon}
    </span>
    <span className="text-sm">{text}</span>
  </div>
);

export default SecondPage;