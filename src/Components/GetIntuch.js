import React from "react";
import { MdCall } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
const GetIntuch = ({ profile }) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-[#DE0347] mb-8">
        Get In Touch
      </h1>
      <div className="grid lg:grid-cols-3 gap-5 mt-14 px-12">
        <div className="block mx-auto">
          <span className="text-5xl text-[#DE0347] ">
            <MdCall />
          </span>
          <h1 className="text-xl font-bold">Call Me</h1>
          <a href="www.google.com" target="_blank" className="font-bold">
            01778613474
          </a>
        </div>
        <div className="block mx-auto">
          <span className="text-5xl text-[#DE0347]">
            <GoLocation />
          </span>
          <h1 className="text-xl font-bold">Location</h1>
          <a
            href="https://www.google.com/maps/place/%E0%A6%97%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A6%BE/@25.3307208,89.5222125,14z/data=!4m13!1m7!3m6!1s0x39fd22d69e4357ab:0x6ecd8a9269ec86ca!2z4KaX4Ka-4KaH4Kas4Ka-4Kao4KeN4Kan4Ka-!3b1!8m2!3d25.328978!4d89.5415074!3m4!1s0x39fd22d69e4357ab:0x6ecd8a9269ec86ca!8m2!3d25.328978!4d89.5415074"
            target="_blank"
            className="font-bold"
          >
            Gaibandha
          </a>
        </div>
        <div className="block mx-auto">
          <span className="text-5xl text-[#DE0347]">
            <AiOutlineMail />
          </span>
          <h1 className="text-xl font-bold">Email</h1>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            className="font-bold"
          >
            dulal.dpi.387364@gamil.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetIntuch;
