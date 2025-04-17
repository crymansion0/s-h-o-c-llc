"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconArrowUp } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed right-6 bottom-6 z-50"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full h-12 w-12 shadow-lg bg-accent hover:bg-accent/90"
            aria-label="Scroll to top"
          >
            <IconArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
