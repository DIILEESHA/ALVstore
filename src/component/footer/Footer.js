import React from "react";
import "./footer.css";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_grid">
        <div className="footer_sub_grid">
          <h2>categories</h2>
          <ul>
            <li>women</li>
            <li>men</li>
            <li>t-shirts</li>
            <li>home</li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <h2>help</h2>
          <ul>
            <li>about</li>
            <li>FAQs</li>
            <li>contact</li>
            <li>track order</li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <h2>get in touch</h2>
          <ul>
            <li>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus nam facere veritatis, animi tempore dignissimos!
              </p>
              <li>
                <div className="icon_lister">
                  <BiLogoFacebook className="doom" />
                  <BiLogoTwitter className="doom" />
                  <BiLogoInstagram className="doom" />
                </div>
              </li>
            </li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <h2>newsletter</h2>
          <ul>
            <li>
              <input type="text" placeholder="email@newsletter.com" />
              <button>subscribe</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="payment_methods">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png"
          alt=""
        />

      </div>
        <h2 className="copyright">Copyright ©2023 All rights reserved | Made by DILEESHA</h2>
    </div>
  );
};

export default Footer;
