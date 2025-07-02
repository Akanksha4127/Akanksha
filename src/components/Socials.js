import React from "react";
import { ImFacebook, ImInstagram, ImGithub, ImMail } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="#" target="_blank" className="p-2  text-white ">
            <ImFacebook size={20} />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="p-2  text-white ">
            <ImInstagram size={20} />
          </a>
        </li>
        <li>
          <a
            href="akankshasinha906@gmail.com"
            target="_blank"
            className="p-2  text-white "
          >
            <ImGithub size={20} />
          </a>
        </li>
        <li>
          <a
            href="akankshasinha906@gmail.com"
            target="_blank"
            className="p-2  text-white "
          >
            <ImMail size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
