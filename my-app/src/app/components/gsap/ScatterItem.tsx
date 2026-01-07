import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ScatterItemProps {
  src: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  xMove: number;
  yMove: number;
  scrollYProgress: MotionValue<number>;
  className?: string; // Allow custom size/aspect classes
}

export const ScatterItem: React.FC<ScatterItemProps> = ({
  src,
  top,
  bottom,
  left,
  right,
  xMove,
  yMove,
  scrollYProgress,
  className = "w-28 h-36 md:w-48 md:h-64 lg:w-60 lg:h-72", // Default size if not provided
}) => {
  // Phase 1 (0 -> 0.35): The Explosion / Fly Past
  // Matches the "Focus" phase where the main title zooms out.

  // 1. Movement: Move outwards aggressively
  const x = useTransform(scrollYProgress, [0, 0.35], [0, xMove]);
  const y = useTransform(scrollYProgress, [0, 0.35], [0, yMove]);

  // 2. Scale: Massive scale up to simulate flying past camera
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 5]);

  // 3. Opacity: Fade out as they get too close/large (start fading at 0.25)
  const opacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  // 4. Rotation
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, xMove > 0 ? 10 : -10]);

  // 5. Blur for speed
  const blur = useTransform(scrollYProgress, [0.2, 0.35], ["blur(0px)", "blur(4px)"]);

  return (
    <motion.div
      style={{
        top,
        bottom,
        left,
        right,
        x,
        y,
        scale,
        opacity,
        rotate,
        filter: blur
      }}
      className={`absolute will-change-transform z-50 pointer-events-none ${className}`} // merged classes
    >
      <div className="w-full h-full shadow-2xl overflow-hidden rounded-sm">
        <img
          src={src}
          alt="Decoration"
          className="w-full h-full object-cover brightness-100"
        />
      </div>
    </motion.div>
  );
};