"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";
import { ArrowDown, Guitar, Zap, Music } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-hidden">
      {/* Progress Bar (Kessoku Cable) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-bocchi-pink z-50 origin-left shadow-[0_0_10px_#FA58B6]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative bg-gloom-black">
        {/* Geometric Shapes Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-kita-red rounded-lg"
            animate={{ rotate: 360, x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-48 h-48 border-2 border-ryo-blue rounded-full"
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-1 bg-nijika-yellow -translate-x-1/2"
            animate={{ opacity: [0, 1, 0], width: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "anticipate", delay: 2 }}
          />
        </div>

        <div className="z-10 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GlitchText
              text="KESSOKU BAND"
              className="text-6xl md:text-9xl font-rubik font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(250,88,182,0.5)]"
              as="h1"
            />
            <p className="text-xl md:text-2xl text-gray-400 font-bold tracking-widest mt-2">结束乐队</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex gap-4 justify-center items-center"
          >
            <span className="text-bocchi-pink font-mono text-lg font-bold">[ 后藤独 ]</span>
            <span className="text-kita-red font-mono text-lg font-bold">[ 喜多郁代 ]</span>
            <span className="text-ryo-blue font-mono text-lg font-bold">[ 山田凉 ]</span>
            <span className="text-nijika-yellow font-mono text-lg font-bold">[ 伊地知虹夏 ]</span>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ArrowDown className="text-white w-8 h-8 opacity-50" />
        </motion.div>
      </section>

      {/* Intro / Blog Section (Anime Style) */}
      <section className="min-h-screen w-full py-20 bg-white relative overflow-hidden flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Character Image */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rotate-[-3deg] border-4 border-white shadow-xl">
                {/* Placeholder for user image */}
                <img
                  src="/boqi.png"
                  alt="Hitori Gotoh"
                  className="w-full h-full object-cover bg-gray-200"
                />
                <div className="absolute -bottom-6 -right-6 bg-bocchi-pink text-white px-6 py-2 font-black text-xl rotate-[5deg]">
                  GUITAR HERO!
                </div>
              </div>
            </motion.div>

            {/* Blog Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <div className="bg-yellow-50 p-8 rounded-2xl border-2 border-dashed border-nijika-yellow relative">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-rubik flex items-center gap-2">
                  <span className="text-3xl">🎸</span>
                  关于我
                </h2>
                <div className="space-y-4 text-gray-600 font-mono leading-relaxed">
                  <p>
                    那个……我是后藤独。大家叫我波奇……
                  </p>
                  <p>
                    大部分时间都躲在壁橱……啊不，是房间里弹吉他！
                    我的梦想是组建乐队，顺便……交点朋友？
                  </p>
                  <p>
                    如果你关注我的频道……我会看的……大概……
                  </p>
                </div>
                <div className="mt-6 flex gap-3 flex-wrap">
                  <span className="bg-ryo-blue text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">#社恐</span>
                  <span className="bg-kita-red text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">#吉他</span>
                  <span className="bg-bocchi-pink text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">#结束乐队</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-black text-white text-center border-t border-gray-800">
        <p className="font-mono text-sm opacity-50">
          由重度社恐和 Next.js 制作
        </p>
      </footer>
    </main>
  );
}
