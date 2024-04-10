import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Java from "../../Assests/Java.png";
import CPP from "../../Assests/CPP.png";
import Python from "../../Assests/Python.png";
import MySQL from "../../Assests/MySQL.png";
import ReactL from "../../Assests/React.png";
import HTML from "../../Assests/HTML.png";
import CSS from "../../Assests/Css.png";
import Git from "../../Assests/Git.png";
import SEO from "../../Assests/SEO.png";
import PowerBI from "../../Assests/PowerBI.png";
import Tableau from "../../Assests/Tableau.png";
import Selenium from "../../Assests/Selenium.png";
import Jira from "../../Assests/Jira.png";
import JMeter from "../../Assests/JMeter.png";
import VisualStudio from "../../Assests/VisualStudio.png";
import MySQLWorkbench from "../../Assests/MySQLWorkbench.png";
import CSharp from "../../Assests/Csharp.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Navbar";

const About = () => {
  return (
    <>
      <Header />
        <div className="text-white w-full p-16 justify-center pb-8">
          <h1 className="text-center font-bold uppercase text-5xl	text-white font-sans">Here You Know <label className="text-[gold]">More About Me</label></h1>
          <h2 className="pt-10 text-center pb-3">Education</h2>
          <div className="px-10 bg-[#368cc133] py-10 w-full rounded-2xl">
            <label className="text-white border-b-2 border-[gold] pb-1.5 text-3xl font-serif">
              MCA - Masters In Computer Application
            </label>
            <label className="float-right"><b>2022-Current</b></label>
            <br></br>
            <label className="font-normal pb-0.5 pt-2 font-sans">
              Sardar Patel Institue Of Technology | Andheri, Mumbai
            </label>
            <br />
            <label className="font-normal pb-3">
              Secured An Aggrigate Of{" "}
              <label className="text-[gold]">
                <b>8.46 CGPA</b>
              </label>
            </label>
            <hr className="pb-3"></hr>
            <label className="text-white border-b-2 border-[gold] pb-1.5 text-3xl font-serif">
              Bachelor's Of Science In Computer Science
            </label>
            <label className="float-right"><b>2019-202</b></label>
            <br></br>
            <label className="font-normal pb-0.5 pt-2 font-sans">
              D. G. Ruparel College | Mahim, Mumbai
            </label>
            <br />
            <label className="font-normal pb-3">
              Secured An Aggrigate Of{" "}
              <label className="text-[gold]">
                <b>8.49 CGPA</b>
              </label>
            </label>
            <hr className="pb-3"></hr>
            <label className="text-white border-b-2 border-[gold] pb-1.5 text-3xl font-serif">
            12<sup>th</sup> - Higher Scondary Board
            </label>
            <label className="float-right"><b>2017-2019</b></label>
            <br></br>
            <label className="font-normal pb-0.5 pt-2 font-sans">
            S. V. Joshi Jr. College | Dombivli, Thane
            </label>
            <br />
            <label className="font-normal pb-3">
              Secured An Aggrigate Of{" "}
              <label className="text-[gold]">
                <b>71.53 %</b>
              </label>
            </label>
          </div>
          <h2 className="pt-32 pb-8 text-center">Profesional Skillset</h2>
          <div className="grid grid-cols-5 gap-x-5 gap-y-8">
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={Java} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  java
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={CPP} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  C++
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={Python} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  Python
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={CSharp} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  C#
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={MySQL} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  MySQL
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={ReactL} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  React
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={HTML} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  HTML
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={CSS} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  CSS
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={Git} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  Git
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={SEO} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  SEO
                </label>
              </div>
            </div>
          </div>
          <h2 className="pt-32 text-center pb-8">Tools I Used</h2>
          <div className="grid grid-cols-5 gap-x-5 gap-y-8">
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={PowerBI} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  PowerBI
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={Tableau} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  Tableau
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={Selenium} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  Selenium
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={Jira} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  jira
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={JMeter} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  JMeter
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={VisualStudio} alt="java" className="size-32" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  VisualStudio
                </label>
              </div>
            </div>
            <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-3 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 hover:cursor-pointer">
              <img src={MySQLWorkbench} alt="java" className="size-28" />
              <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
                <label className="text-3xl font-semibold capitalize overlay-text absolute top-2/4	left-2/4	duration-500 text-white">
                  Workbench
                </label>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default About;
