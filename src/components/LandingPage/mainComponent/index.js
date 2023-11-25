import React from "react";
import Button from "../../Common/Button";
import "./style.css";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {RWebShare} from 'react-web-share'
const MainComponent = () => {
  return (
    <div className="mainComponent">
      <div className="left">
        <motion.h1 className="trackCrypto" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, type:"smooth"}}>Track Crypto</motion.h1>
        <motion.h1 initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:2, delay:.5, type:"smooth"}} className="realTime">Real Time.</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:.7}} transition={{duration:2, delay:.9, type:"smooth"}}>
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div className="buttons" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:1.3, type:"smooth"}}>
          <Link to="/dashboard">
          <Button text={"Dashboard"} onClick={()=>console.log("Prajwal")} />
          </Link>
          {/* <Link to="/">
          <Button text={"Share"} outline={true}  onClick={()=>console.log("Prajwal")} />
          </Link> */}
          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text={"Share"} outline={true}  onClick={()=>console.log("Prajwal")} />
          </RWebShare>

        </motion.div>
      </div>
      <div className="right">
        <motion.img
          className="iphoneImg"
          src={iphone}
          alt="iphoneImage"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <p className="gradientImg" />
      </div>
    </div>
  );
};

export default MainComponent;
