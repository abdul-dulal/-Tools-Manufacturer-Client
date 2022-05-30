import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import myimage from "../../assets/images/myimage.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/ai";
import GetIntuch from "../GetIntuch";
import Myproject from "./dashboard/Myproject";

const MyPortfolio = () => {
  return (
    <div div className="">
      <div className="grid lg:grid-cols-2  py-10 ">
        <div>
          {" "}
          <img src={myimage} className="rounded-full" alt="" />
        </div>
        <div>
          <h1 className=" text-2xl font-bold text-[#DE0347]">About Me</h1>
          <p className="text-[18px]">
            A self-motivated and enthusiastic web developer. To gain confidence
            and fame using my potential in the field of web development and
            express my innovative creative skills for self and company growth. I
            always like to learn new things and have experience with new stuff.
          </p>
          <p className="mt-10">
            Here are a few technologies I've been working with recently{" "}
          </p>
          <h1 className="text-xl text-[#DE0347] font-bold">Frontend</h1>
          <div className="flex list-none font-bold ">
            <li className="p-2">JavaScript (ES6)</li>
            <li className="p-2">React.js</li>
            <li className="p-2"> React Bootstrap</li>
            <li className="p-2"> HTML5</li>
            <li className="p-2"> CSS3</li>
            <li className="p-2"> Tailwind</li>
          </div>
          <h1 className="text-xl text-[#DE0347] font-bold">Backend</h1>
          <div className="flex list-none font-bold ">
            <li className="p-2"> Node.js</li>
            <li className="p-2">Express.js</li>
            <li className="p-2"> MongoDB</li>
          </div>
          <h1 className="text-xl text-[#DE0347] font-bold">Tools</h1>
          <div className="flex list-none font-bold ">
            <li className="p-2"> VS Code</li>
            <li className="p-2">Git</li>
            <li className="p-2"> Chrome Dev Tool</li>
            <li className="p-2"> Firebase</li>
            <li className="p-2"> Netlify</li>
            <li className="p-2"> Heroku</li>
          </div>
          <div className="flex list-none my-3">
            <li className="p-3 text-3xl rounded-full border hover:bg-[#C80541] hover:text-white">
              <a href="https://github.com/abdul-dulal" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li className="p-3 text-3xl rounded-full border hover:bg-[#C80541] hover:text-white">
              <a
                href="https://www.linkedin.com/in/abdul-dulal-islam-abir-a7a2501b5/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="p-3 text-3xl rounded-full border hover:bg-[#C80541] hover:text-white">
              <a
                href="https://web.facebook.com/abduldulalislam"
                target="_blank"
              >
                <AiFillFacebook />
              </a>
            </li>
          </div>
        </div>
      </div>
      <GetIntuch />
      <Myproject />
    </div>
  );
};

export default MyPortfolio;
