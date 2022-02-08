import "./header.scss";
import APodcast from "../images/apple-podcasts.png";
import GPodcast from "../images/google-podcasts.png";
import Podchase from "../images/podchase.png";
import Spotify from "../images/spotify.png";
import RSS from "../images/rss.png";
import Youtube from "../images/youtube.png";
import close from "../images/close.svg";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  const [openPlatforms, setOpenPlatforms] = useState(false);
  function platformSlider() {
    setOpenPlatforms(!openPlatforms);
  }

  const [openSearch, setOpenSearch] = useState(false);
  function searchSlider() {
    setOpenSearch(!openSearch);
  }

  const [openMenu, setOpenMenu] = useState(false);
  function menuSlider() {
    setOpenMenu(!openMenu);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">Podcastpage</div>
          <div className="nav__menu" onClick={menuSlider}>
            <GiHamburgerMenu />
          </div>
          <div className={openMenu ? "nav nav-vis" : "nav "}>
            <ul className="nav__inner">
              <Link to="/" className="active">
                <li>Home</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <a onClick={platformSlider}>
                <li>Subscribe</li>
              </a>
              <a onClick={searchSlider}>
                <li className="search-icons">
                  <FaSearch
                    style={
                      openSearch ? { display: "none" } : { display: "block" }
                    }
                  />
                  <IoClose
                    style={
                      openSearch ? { display: "block" } : { display: "none" }
                    }
                  />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div
          tabindex="0"
          className="search-form"
          style={openSearch ? { display: "flex" } : { display: "none" }}
        >
          <input className="search-input" type="text" placeholder="Search..." />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path d="M 5 2 C 3.346 2 2 3.346 2 5 L 2 45 C 2 46.654 3.346 48 5 48 L 45 48 C 46.654 48 48 46.654 48 45 L 48 5 C 48 3.346 46.654 2 45 2 L 5 2 z M 22 11 C 28.065 11 33 15.935 33 22 C 33 24.673 32.0285 27.12225 30.4375 29.03125 L 39.21875 37.78125 L 37.78125 39.21875 L 29.03125 30.4375 C 27.12225 32.0285 24.673 33 22 33 C 15.935 33 11 28.065 11 22 C 11 15.935 15.935 11 22 11 z M 22 13 C 17.038 13 13 17.038 13 22 C 13 26.963 17.038 31 22 31 C 26.963 31 31 26.963 31 22 C 31 17.038 26.963 13 22 13 z"></path>
          </svg>
        </div>
        <div
          className={
            openPlatforms
              ? "subscribe__inner subscribe__inner-vis"
              : "subscribe__inner "
          }
        >
          <p>Subscribe Through Your Favorite Platform</p>
          <img
            className="close-button"
            src={close}
            alt="close"
            onClick={platformSlider}
          />
          <ul className="platforms">
            <li>
              <a href="/">
                <img src={APodcast} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={GPodcast} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Spotify} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={RSS} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Podchase} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
