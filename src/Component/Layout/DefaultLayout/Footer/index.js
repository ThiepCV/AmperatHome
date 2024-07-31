import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-and-signup">
          <img src="images/logo trắng.png" alt="AMPERACT logo" className="logo" />
          <p>サインアップすると、新しい充電ステーションに関する最新情報、特別オファーの充電ニュースなどを受け取ることができます。</p>
          <div className="input-wrapper">
            <input className="effect-6" type="text" placeholder="email" />
            <label>email</label>
            <span className="focus-border"><i></i></span>
          </div>
        </div>

        <div className="footer-section app-download">
          <p>ブリンクアプリで充電ステーションを見つける</p>
          <div className="download-buttons">
            <img className='smartphoneDowload' alt="" src="../images/GetItOnGooglePlay_Badge_Web_color_Japanese.png" />
            <img className='iphoneDowload' alt="" src="../images/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg" />
          </div>
        </div>

        <div className="footer-section social-media">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-link"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-link"><FaInstagram /></a>
            <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
            <a href="https://youtube.com" className="social-link"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>copyright © 2024 AMPERACT 全著作権所有</p>
        <p>プライバシーポリシー | 利用規約 | アクセシビリティ</p>
      </div>
    </footer>
  );
};

export default Footer;
