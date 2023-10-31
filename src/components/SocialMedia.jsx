import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    {
      <div>
        <a href="https://twitter.com/alamgirhossann1" target="_blank">
          <BsTwitter />
        </a>
      </div>
    }
    <div>
      <a href="https://web.facebook.com/alamgir.hossan.545/" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/md-alamgir-hossan-bb640a1a3/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
