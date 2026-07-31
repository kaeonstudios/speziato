"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_FRAMES = 240;
const FOLDER_PATH = "/image/spice"; // Corrected physical asset path

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Keep track of the current frame index using a ref to prevent scroll listener churning
  const currentFrameRef = useRef(0);
  // Guard ref to ensure preloader is only initialized once (specifically in React Strict Mode dev environments)
  const preloaderStarted = useRef(false);

  // Preload Images strictly once with progressive priority loading
  useEffect(() => {
    if (preloaderStarted.current) return;
    preloaderStarted.current = true;

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const padNumber = (num: number) => {
      return num.toString().padStart(3, "0");
    };

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedImages[index] = img;
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          resolve(img);
        };
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          resolve(img);
        };
        img.src = `${FOLDER_PATH}/ezgif-frame-${padNumber(index + 1)}.webp`;
      });
    };

    const runPreloader = async () => {
      // Tier 1: Initial intro frames (1..20) + skeleton keyframes (every 4th frame)
      const priorityIndices: number[] = [];
      const remainingIndices: number[] = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (i < 20 || i % 4 === 0) {
          priorityIndices.push(i);
        } else {
          remainingIndices.push(i);
        }
      }

      // Load Priority Tier first
      await Promise.all(priorityIndices.map((idx) => loadSingleImage(idx)));

      // Unlock UI immediately as soon as priority keyframes are ready
      setImages([...loadedImages]);
      setIsLoaded(true);

      // Tier 2: Stream remaining intermediate frames in background batches
      const BATCH_SIZE = 10;
      for (let b = 0; b < remainingIndices.length; b += BATCH_SIZE) {
        const chunk = remainingIndices.slice(b, b + BATCH_SIZE);
        await Promise.all(chunk.map((idx) => loadSingleImage(idx)));
        setImages([...loadedImages]);
      }
    };

    runPreloader();
  }, []);

  // Handle Resize, Scroll, and Rendering
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = (frameIdx: number) => {
      // Find the closest loaded frame to use as fallback if frameIdx is missing/failed
      let img = images[frameIdx];
      if (!img) {
        for (let k = frameIdx - 1; k >= 0; k--) {
          if (images[k]) {
            img = images[k];
            break;
          }
        }
      }
      // If we still don't have a frame, look forward
      if (!img) {
        for (let k = frameIdx + 1; k < TOTAL_FRAMES; k++) {
          if (images[k]) {
            img = images[k];
            break;
          }
        }
      }
      
      if (!img) return;

      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Adjust for High DPI
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);

      // Enable High-Quality Canvas Resampling
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Object Fit COVER Logic
      const imgWidth = img.width;
      const imgHeight = img.height;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = width / height;

      let renderWidth = width;
      let renderHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        // Viewport is wider than image: scale to width and crop height
        renderHeight = width / imgRatio;
        offsetY = (height - renderHeight) / 2;
      } else {
        // Viewport is taller than image: scale to height and crop width
        renderWidth = height * imgRatio;
        offsetX = (width - renderWidth) / 2;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    // Render initial frame
    renderFrame(currentFrameRef.current);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      const scrollY = -rect.top;

      if (scrollHeight <= 0) return;

      const scrollFraction = Math.min(1, Math.max(0, scrollY / scrollHeight));
      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(scrollFraction * TOTAL_FRAMES))
      );

      // Update and render ONLY when frame index actually changes,
      // avoiding useless redraws and state churns.
      if (currentFrameRef.current !== frameIdx) {
        currentFrameRef.current = frameIdx;
        setCurrentFrame(frameIdx);
        renderFrame(frameIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded, images]);

  // Determine active title
  const getActiveOverlayText = () => {
    if (currentFrame >= 5 && currentFrame <= 48) {
      return "Section 1";
    }
    if (currentFrame >= 55 && currentFrame <= 96) {
      return "Section 2";
    }
    if (currentFrame >= 105 && currentFrame <= 144) {
      return "Section 3";
    }
    if (currentFrame >= 155 && currentFrame <= 192) {
      return "Section 4";
    }
    if (currentFrame >= 200 && currentFrame <= 235) {
      return "Section 5";
    }
    return null;
  };

  const overlaySection = getActiveOverlayText();

  return (
    <div
      ref={containerRef}
      id="story"
      className="relative w-full h-[1000vh] md:h-[1800vh] bg-obsidian"
    >
      {/* Preloader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian text-cream"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-cormorant text-4xl md:text-6xl font-bold tracking-[0.2em] text-gold-accent mb-6"
            >
              SPEZIATO
            </motion.h1>
            <div className="w-64 h-[1px] bg-gold-accent/20 relative overflow-hidden mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-accent to-gold-warm absolute left-0 top-0"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-cream/40 font-semibold">
              PRELOADING FILM WORK... {loadingProgress}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Fullscreen Canvas Background */}
      <div className="sticky top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian pointer-events-none" />

        {/* Floating Headers */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 z-20 select-none">
          <AnimatePresence mode="wait">
            {overlaySection === "Section 1" && (
              <motion.h2
                key="sec-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center font-cormorant text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-cream max-w-xs sm:max-w-3xl md:max-w-6xl leading-[1.08]"
              >
                Kerala's Finest <span className="font-cormorant italic text-gold-gradient font-normal">Spices.</span>
              </motion.h2>
            )}

            {overlaySection === "Section 2" && (
              <motion.h2
                key="sec-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center font-cormorant text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-cream max-w-xs sm:max-w-3xl md:max-w-6xl leading-[1.08]"
              >
                Harvested At <br />
                <span className="font-cormorant italic text-gold-gradient font-normal">Peak Freshness.</span>
              </motion.h2>
            )}

            {overlaySection === "Section 3" && (
              <motion.h2
                key="sec-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center font-cormorant text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-cream max-w-xs sm:max-w-3xl md:max-w-6xl leading-[1.08]"
              >
                Crafted By Nature.<br />
                <span className="text-gold-gradient">Perfected By Speziato.</span>
              </motion.h2>
            )}

            {overlaySection === "Section 4" && (
              <motion.h2
                key="sec-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center font-cormorant text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-cream max-w-xs sm:max-w-3xl md:max-w-6xl leading-[1.08]"
              >
                Premium Flavour.<br />
                <span className="text-gold-gradient">Packed To Perfection.</span>
              </motion.h2>
            )}

            {overlaySection === "Section 5" && (
              <motion.h2
                key="sec-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center font-cormorant text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-cream max-w-xs sm:max-w-3xl md:max-w-6xl leading-[1.08]"
              >
                From Plantation <br />
                <span className="font-cormorant italic text-gold-gradient font-normal">To Package.</span>
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        {currentFrame < 25 && isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-auto z-20"
          >
            <span className="text-[9px] uppercase tracking-widest text-cream/40 font-semibold">
              SCROLL TO ENTER PLANTATION
            </span>
            <div className="w-[1.5px] h-10 bg-gold-accent/25 relative overflow-hidden rounded-full">
              <motion.div
                animate={{ y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-gold-accent to-transparent"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
