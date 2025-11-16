"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Animation variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export const slideInVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  },
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

// Reusable animation components
interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn: React.FC<AnimationProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        ...fadeInVariants,
        visible: {
          ...fadeInVariants.visible,
          transition: {
            duration: 0.6,
            ease: "easeOut" as const,
            delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn: React.FC<AnimationProps & { direction?: 'left' | 'right' | 'up' | 'down' }> = ({ 
  children, 
  className = "", 
  direction = 'up',
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        ...slideInVariants[direction],
        visible: {
          ...slideInVariants[direction].visible,
          transition: {
            duration: 0.6,
            ease: "easeOut" as const,
            delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<AnimationProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        ...scaleInVariants,
        visible: {
          ...scaleInVariants.visible,
          transition: {
            duration: 0.6,
            ease: "easeOut" as const,
            delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<AnimationProps> = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<AnimationProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={staggerItemVariants}
    >
      {children}
    </motion.div>
  );
};

// Parallax component
export const Parallax: React.FC<AnimationProps & { speed?: number }> = ({ 
  children, 
  className = "", 
  speed = 0.5 
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};