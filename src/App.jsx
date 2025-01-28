import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import MHeader from "./components/MHeader";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import ForthPage from "./components/ForthPage";
import Pricing from "./components/Pricing";
import { Sparkle } from "lucide-react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
const App = () => {
  const [showInitialLogo, setShowInitialLogo] = useState(true);
  const { scrollY } = useScroll();

  return (
    <>
      {showInitialLogo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 backdrop-blur-lg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          onAnimationComplete={() => setShowInitialLogo(false)}
        >
          <div className="flex items-center">
            <Sparkle className="h-8 text-white" />
            <span className="text-4xl text-white font-semibold">Gcore</span>
          </div>
        </motion.div>
      )}

      <Header />
      <AnimatedMHeader scrollY={scrollY} />

      <Home />

      <SecondPage />

      <ThirdPage />

      <ForthPage />

      <Pricing />

      <FAQ/>

      <Footer/>
    </>
  );
};

const AnimatedMHeader = ({ scrollY }) => {
  const headerWidth = useTransform(scrollY, [0, 200], ["100%", "90%"]);
  const headerPadding = useTransform(scrollY, [0, 200], ["2rem", "1rem"]);

  return (
    <motion.div
      style={{
        width: headerWidth,
        padding: headerPadding,
      }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-10"
    >
      <MHeader />
    </motion.div>
  );
};

export default App;
