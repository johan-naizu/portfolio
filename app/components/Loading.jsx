"use client";
import Lottie from "react-lottie-player";
import lottieJson from "/public/loading.json";
import { motion, AnimatePresence } from "framer-motion";

const Loading = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-dvh w-dvw flex justify-center items-center bg-bg z-50 fixed"
        >
          <Lottie
            className="w-1/2 h-1/2 md:w-2/6 md:h-2/6"
            loop
            animationData={lottieJson}
            play
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
