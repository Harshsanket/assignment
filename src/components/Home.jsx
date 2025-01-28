import { Sparkles } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-[85vh] bg-slate-950 flex justify-center items-center">
  <div className="mx-auto my-auto">
    <div className="m-auto text-center">
      <div className="flex justify-center items-center">
        <Sparkles className="text-white h-4" />
        <h2 className="text-base/7 font-semibold text-yellow-300">
          Beta release
        </h2>
      </div>
      <p className="mt-2 text-6xl font-semibold text-white">
        Inference at Edge
      </p>
      <div className="max-w-2xl justify-center m-auto">
        <p className="mt-6 text-lg/8 text-gray-400">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
    </div>
    <div className="justify-center flex gap-6 mt-4">
      <button className="rounded-3xl px-4  py-1 bg-orange-500 text-white font-semibold hover:cursor-pointer">
        Get started
      </button>
      <button className="border rounded-3xl px-4 py-1 border-gray-400 text-white font-semibold hover:cursor-pointer">
        Book a demo
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
