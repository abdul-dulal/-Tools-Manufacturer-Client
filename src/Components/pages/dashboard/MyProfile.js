import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import myimage from "../../../assets/images/myimage.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/ai";
import GetIntuch from "../../GetIntuch";
import Myproject from "./Myproject";

const MyProfile = () => {
  const [profile, setProfile] = useState([]);
  const { education, linkedin, dist, phone } = profile;
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://secret-brook-35937.herokuapp.com/profile`)
      .then((res) => res.json())
      .then((data) => setProfile(data[0].profile));
  }, [user]);
  return (
    <div class="card w-max-lg bg-base-200 shadow-lg">
      <div class="avatar">
        <div class="w-32 rounded-full mx-auto block mt-7">
          <img src={myimage} alt="" />
        </div>
      </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{user.displayName}</h2>
        <p>
          <span>Education :</span> {education}
        </p>
        <p>
          <span>Location : </span> {dist}
        </p>
        <p>
          <span>Phone</span> : {phone}
        </p>
        <p>
          <span>Linkedin</span> {linkedin}
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
