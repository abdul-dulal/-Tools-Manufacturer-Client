import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo (1).png";
const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-[#1B1B1C] text-neutral-content">
        <div>
          <span class="footer-title">
            <img src={logo} className="w-24 " alt="" />
          </span>
          <p>
            Lukas is the best parts shop for your car <br /> accessories. What
            kind of parts do you need <br /> you can get here solutLink to={""}
            nobis
          </p>
        </div>
        <div>
          <span class="footer-title ">QuickLink</span>
          <Link to={""} class="link link-hover">
            About us
          </Link>
          <Link to={""} class="link link-hover">
            Contact
          </Link>
          <Link to={""} class="link link-hover">
            Jobs
          </Link>
          <Link to={""} class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Information</span>
          <Link to={""} class="link link-hover">
            Our company
          </Link>
          <Link to={""} class="link link-hover">
            Contact us
          </Link>
          <Link to={""} class="link link-hover">
            Our services
          </Link>
          <Link to={""} class="link link-hover">
            Why We?
          </Link>
          <Link to={""} class="link link-hover">
            Careers
          </Link>
        </div>
        <div>
          <span class="footer-title">Support </span>
          <Link to={""} class="link link-hover">
            Blog
          </Link>
          <Link to={""} class="link link-hover">
            Contact
          </Link>
          <Link to={""} class="link link-hover">
            Return Policy
          </Link>
          <Link to={""} class="link link-hover">
            Online Support
          </Link>
          <Link to={""} class="link link-hover">
            Money Back
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to={""} class="link link-hover">
            Terms of use
          </Link>
          <Link to={""} class="link link-hover">
            Privacy policy
          </Link>
          <Link to={""} class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
