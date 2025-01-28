import React from 'react';
import { Shield, Database, Brain, Scale, Cpu } from 'lucide-react';

const Thirdpage = () => {
  return (
    <div className="h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[80vh]">
          {/* Data Privacy Card */}
          <div className="bg-slate-900/50 rounded-3xl p-6 relative overflow-hidden group ">
            <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl "></div>
            <Shield className="text-orange-500 mb-4 h-8 w-8" />
            <h2 className="text-xl font-semibold mb-3">Data privacy and security</h2>
            <p className="text-gray-400 text-sm">
              Use pre-trained foundational models from the Gcore ML Model Hub or your own trained models.
            </p>
          </div>

          {/* Storage Card */}
          <div className="bg-slate-900/50 rounded-3xl p-6 relative overflow-hidden group ">
            <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl "></div>
            <Database className="text-orange-500 mb-4 h-8 w-8" />
            <h2 className="text-xl font-semibold mb-3">Unlimited object storage</h2>
            <p className="text-gray-400 text-sm">
              Use scalable S3-compatible cloud storage that grows with your needs.
            </p>
          </div>

          {/* ML Models Card */}
          <div className="bg-slate-900/50 rounded-3xl p-6 relative overflow-hidden group ">
            <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl "></div>
            <Brain className="text-orange-500 mb-4 h-8 w-8" />
            <h2 className="text-xl font-semibold mb-3">Pre-trained and custom ML models</h2>
            <p className="text-gray-400 text-sm">
              Use pre-trained foundational models from the Gcore ML Model Hub or your own trained models.
            </p>
          </div>

          {/* Autoscaling Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-slate-900/50 rounded-3xl p-6 relative overflow-hidden group ">
            <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl "></div>
            <Scale className="text-orange-500 mb-4 h-8 w-8" />
            <h2 className="text-xl font-semibold mb-3">Model autoscaling</h2>
            <p className="text-gray-400 text-sm">
              Set up autoscaling to handle load spikes. Use and pay for only the resources your model requires.
            </p>
          </div>

          {/* NVIDIA GPUs Card */}
          <div className="bg-slate-900/50 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl "></div>
            <Cpu className="text-orange-500 mb-4 h-8 w-8" />
            <h2 className="text-xl font-semibold mb-3">NVIDIA L40S GPUs</h2>
            <p className="text-gray-400 text-sm">
              Boost model performance with the latest NVIDIA accelerator, perfect for GenAI and LLM inference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;