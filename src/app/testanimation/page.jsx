"use client";
import { motion } from "framer-motion";

const TestAnimation = () => {
    const variants = {
        variants1: {
            x: 400,
            y: 300,
            opacity: 0.5,
            transition: { 
                duration: 3 
            },
        },
        variants2: {
            x: 400,
            y: 300,
            opacity: 0.5,
        },
    }
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        variants={variants}
        animate={{ x: 400, y: 300, opacity: 0.5 }}
        transition={{ delay: 2, duration: 4 }}
        ></motion.div>
    </div>
  );
};

export default TestAnimation;
