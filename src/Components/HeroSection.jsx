import React from "react";
import "../App.css";
import m from '../assets/HeroSection/m.svg';
import Profile from '../assets/HeroSection/Profile.png';
import linkedin from '../assets/HeroSection/in.svg';
import whatsapp from '../assets/HeroSection/wa.svg';
import insta from '../assets/HeroSection/insta.svg';
import facebook from '../assets/HeroSection/fb.svg';


const HeroSection = () => {
  return (
    <>
      <section id="banner">
        <div className="bannerRapper">
          <div className="container">
            <div className="banner">
              <div className="banner_row">
                <div className="banner_col">
                  <div className="bannerData">
                    <br />
                    <h1 className="awais my-0">
                      <img className=" myM" src={m} alt="" />
                      awais
                    </h1>
                    <h1 className="faryad my-0">FARYAD</h1>
                    <br />
                    <p className="nameShort my-0">
                      A passionate FrontEnd Developer in React Js based In
                      Lahore, PAK.
                    </p>
                    <p className="nameShort my-0">
                      Aspiring React Developer, 6 months of hands-on experience
                      with HTML and CSS and 3 months of experience with
                      JavaScript and React.js.
                    </p>
                    <div className="social">
                      <a className="btnHire" href="#">
                        Hire Me
                      </a>
                      <img src="./hr.svg" alt="" />
                      <span>Follow Me</span>
                      <ul className=" --list-style list">
                        <li className="list_item">
                          <a
                            className="list_item-icn"
                            target="blank"
                            href="https://www.linkedin.com/in/awaisfaryad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          >
                            <img
                              className="object-fit"
                              src={linkedin}
                              alt="LinkedIn"
                            />
                          </a>
                        </li>
                        <li className="list_item">
                          <a
                            className="list_item-icn"
                            target="blank"
                            href="https://www.instagram.com/awaiswolf?igsh=YmNla2JxbDB1Ymli"
                          >
                            <img
                              className="object-fit"
                              src={insta}
                              alt="Instagram"
                            />
                          </a>
                        </li>
                        <li className="list_item">
                          <a
                            className="list_item-icn"
                            target="blank"
                            href="https://www.facebook.com/awaisfaryad25/"
                          >
                            <img
                              className="object-fit"
                              src={facebook}
                              alt="Facebook"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="banner_col1">
                  <div className="bannerProfile">
                    <div className="profile">
                      <img
                        className="object-fit"
                        src={Profile}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backBanner"></div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
