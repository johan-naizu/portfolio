"use client";
import Lottie from "react-lottie-player";
import lottieJson from "/public/loading.json";

const Loading = () => {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center bg-bg z-50 fixed">
      <Lottie
        className="w-1/2 h-1/2 md:w-2/6 md:h-2/6"
        loop
        animationData={lottieJson}
        play
      />
    </div>
  );
};

export default Loading;
