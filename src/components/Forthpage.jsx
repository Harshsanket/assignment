import React from "react";
import { Sparkles } from "lucide-react";
import globe from "../assets/globe.png";
const Forthpage = () => {
  return (
    <>
      <div className="h-screen bg-slate-950 flex justify-center ">
        <div className="mx-auto">
          <div className=" mx-auto ">
            <div className="m-auto text-center">
              <div className="flex justify-center items-center">
                <Sparkles className="text-white h-4" />
                <h2 className="text-base/7 font-semibold text-yellow-300">
                  Global network
                </h2>
              </div>
              <div className="mt-2 w-2xl m-auto">
              <p className=" text-5xl font-semibold text-white">
                A truely global network for lightning-fast inference
              </p>
              </div>
              <div className="max-w-2xl justify-center m-auto">
                <p className="mt-6 text-lg/8 text-gray-400">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet
                  quis. Suspendisse eget egestas a elementum pulvinar et feugiat
                  blandit at. In mi viverra elit nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white  mx-auto">
            <div className="flex justify-center items-center h-full">
              <img
                src={globe}
                alt="Globe"
                className="max-h-[85vh] max-w-full object-contain text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forthpage;
