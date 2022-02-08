import "./main.scss";
import Demo from "../images/demo_channel.png";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import { Header } from "../components";

function Main() {
  return (
    <div className="main">
      <img src={Demo} alt="Demo channel" />
      <div className="main__inner">
        <h1 className="main__title">Podcastpage Demo Podcast</h1>
        <p className="main__by">
          <span>Hosted By</span> <br />
          Poncho Sanchez
        </p>
        <p className="main__text">
          The Podcastpage Demo Podcast was created to showcase the capabilities
          and features of podcastpage.io, the most intuitive and customizable
          website builder for podcasters.
        </p>
        <button className="main__button">Subscribe to Podcast</button>
        <p className="main__follow">
          Follow Us:
          <span>
            <ul>
              <li>
                <FaTwitter />
              </li>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsYoutube />
              </li>
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsLinkedin />
              </li>
            </ul>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Main;
