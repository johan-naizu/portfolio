import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-xl overflow-hidden"
    >
      <div
        className="h-52 md:h-72 relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          whileHover={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="backdrop-filter backdrop-blur transform translate-x-0 translate-y-0 h-full w-full overlay bg-white bg-opacity-70 hidden group-hover:flex flex-col transition duration-300"
        >
          <div className="mt-9 bg-transparent py-6 px-4 items-center mb-5">
            <h5 className="text-xl flex font-semibold mb-2 justify-center items-center">
              <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-primary to-secondary text-center">
                {title}
              </span>
            </h5>
            <p className=" flex justify-center items-center text-bg text-center">
              {description}
            </p>
          </div>

          <div className="flex flex-row items-center justify-center">
            {gitUrl ? (
              <Link
                href={gitUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-bg hover:scale-105 group/link transition duration-300"
              >
                <CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-bg transition duration-300" />
              </Link>
            ) : null}
            {previewUrl ? (
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-bg hover:scale-105 group/link tranition duration-300"
              >
                <EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-bg transition duration-300" />
              </Link>
            ) : null}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
