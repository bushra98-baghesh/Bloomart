import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Feature.css";
import { motion } from "framer-motion";
import Img1 from "../../assets/7.webp";
import Img2 from "../../assets/8.webp";
import Img3 from "../../assets/6.webp";
import Img4 from "../../assets/4.webp";
import Img5 from "../../assets/9.webp";
import Img6 from "../../assets/11.webp";
import Img7 from "../../assets/10.webp";
import Img8 from "../../assets/5.webp";
function Feature() {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalRef = useRef(null);
  const ref = useRef(null);
  useLayoutEffect(() => {
    let element = ref.current;
    let t1 = gsap.timeline();
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",

          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    return () => {};
  }, []);
  return (
    <section ref={ref}>
      <div className="row">
        <div className="col-5 left-f ">
          <h1 data-scroll data-scroll-speed="-1" className=" title-f ps-5 ms-5">
            Featured
          </h1>
          <p className=" p-5 text-start">
            We're fashion studio based in california. We create unique designs
            that will blow your mind. We also design unique jewellary pieces.
            Fashion is an ART that can not be grasped by everyone.
            <br />
            <br />
            We are very dedicated to making our products. We offer unique and
            creative products to a wide range of people. We have a variety of
            styles, but for most people, all of the options are in the box. We
            specialize in making things that make you happy.
            <br />
            <br />
            We strive to build on our vision. As a fashion label, we do our best
            to create amazing experiences for all people. We are always looking
            to make something that is easy for everyone.
          </p>
        </div>
        <div className="right-f col ps-5 ms-5 ">
          <div ref={horizontalRef} className="scroll-c">
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ fier: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img1}
              alt=""
            />
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img2}
              alt=""
            />
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img3}
              alt=""
            />
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img4}
              alt=""
            />
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img5}
              alt=""
            />
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img6}
              alt=""
            />
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img7}
              alt=""
            />
            <motion.img
              initial={{ filter: "grayscale(100%" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              src={Img8}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
