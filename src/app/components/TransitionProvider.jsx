"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const PathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={PathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40 "
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
          <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit "
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {PathName.substring(1)}
          </motion.div>
         <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40 "
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 2 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;



{/*         
          >*/}
