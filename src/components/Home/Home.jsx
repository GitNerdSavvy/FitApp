import React from "react";
import "./home.css";
import Header from "../Header/Header";
import Hero_img from "../../assets/hero_image.png";
import Hero_img_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
const Home = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        <div className="h-title">
          <motion.div
            initial={{ left: "230px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Website in the Ports</span>
        </div>
        <div className="h-heading">
          <div>
            <span className="text-stroke">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} duration={2.5} preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={820} duration={2.5} preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              
              <NumberCounter end={60} start={10} duration={2.5} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* buttons */}
        <div className="h-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ transition }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={Hero_img} alt="DSA" className="h-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ transition }}
          src={Hero_img_back}
          alt="DSA"
          className="h-b-image"
        />
      </div>
      <motion.div
        initial={{ right: "37rem" }}
        whileInView={{ right: "28rem" }}
        transition={{ transition }}
        className="calories"
      >
        <img src={Calories} alt="" />
        <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
