import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.3,
          ease: easing
      }
    }
};

export const Home = () => {
    return (
    <motion.div className="w-screen h-screen flex flex-col bg-gray-100" exit={{ opacity: 0 }} initial="initial" animate="animate">

        <header className="flex w-full p-8 items-center justify-center border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-700">Tailwind Rebuilds</h1>
        </header>

        <section className="flex items-center justify-center flex-grow">
            <motion.div variants={stagger} className="card-grid w-4/12 grid grid-cols-2 gap-6">
                <Link to="/">
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{
                            scale: 1.025,
                            boxShadow: "0 1rem 1.25rem 0 rgba(0,0,0,0.05)"
                        }}
                        whileTap={{ 
                            scale: .975,
                            boxShadow: "none"
                        }}
                        className="flex flex-col items-center justify-center p-8 rounded-lg bg-white space-y-6">
                        <div className="icon w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-3xl text-gray-600" />
                        </div>  
                        <span className="text-2xl text-gray-600">Back Home</span>
                    </motion.div>
                </Link>
                <Link to="/twitch">
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{
                            scale: 1.025,
                            boxShadow: "0 1rem 1.25rem 0 rgba(0,0,0,0.05)"
                        }}
                        whileTap={{ 
                            scale: .975,
                            boxShadow: "none"
                        }}
                        className="flex flex-col items-center justify-center p-8 rounded-lg bg-white space-y-6">
                        <div className="icon w-20 h-20 flex items-center justify-center rounded-full bg-purple-100">
                            <svg width="144" height="168" viewBox="0 0 144 168" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5 0L0.5 30V138H36.5V168L66.5 138H90L144 84V0H30.5Z" fill="#8552F6"/>
                                <path d="M36 102V12H132V78L108 102H84L59.5 126.5V102H36Z" fill="white"/>
                                <rect x="72" y="36" width="12" height="36" fill="#8552F6"/>
                                <rect x="102" y="36" width="12" height="36" fill="#8552F6"/>
                            </svg>
                        </div>  
                        <span className="text-2xl text-purple-500">Twitch Rebuild</span>
                    </motion.div>
                </Link>
                </motion.div> 
        </section>

    </motion.div>
    )
}