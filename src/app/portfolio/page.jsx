"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Price Tag",
    desc: "WebApp PriceTag is a sleek and responsive Next.js web application crafted with Tailwind CSS. Seamlessly blending design and functionality, it delivers a modern and user-friendly platform for exploring and comparing prices, emphasizing a dynamic and engaging browsing experience.",
    img: "https://images.pexels.com/photos/998501/pexels-photo-998501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://main.d98v3qys1qmzj.amplifyapp.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Portfolio",
    desc: "As a frontend developer, my portfolio showcases a creative fusion of design and functionality. With expertise in HTML, CSS, and JavaScript React.js, Next.js, Tailwind.css, I craft visually appealing and responsive user interfaces, demonstrating a passion for delivering seamless and engaging web experiences.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://main.d2jmn5ce99eygb.amplifyapp.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Mini Ecommerce Website",
    desc: "The mini e-commerce website boasts a user-friendly interface, seamless navigation, and a diverse product range. With secure transactions, responsive design, and efficient checkout, it provides a convenient and enjoyable shopping experience for users, making it a compact yet effective platform for online retail.",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://thriving-paletas-90442e.netlify.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Short Review in Bihar",
    desc: "Bihar's nature is diverse, featuring fertile plains along the Ganges, lush greenery, and historic landscapes. The state is characterized by its vibrant rural life, agricultural fields, and the Ganges River, contributing to a unique blend of natural beauty and cultural heritage.",
    img: "https://images.pexels.com/photos/13961408/pexels-photo-13961408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://subtle-sable-060006.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;