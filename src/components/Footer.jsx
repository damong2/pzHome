import React from "react";
import { footerText } from "../datas/data";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer_inner">
        <div className="footer_text">
          <span>Mountains of the World Project</span>
          <span>© DG</span>
        </div>
        <div className="footer_info">
          <div className="left">
            <div className="title">
              <a href="#">sign up</a>
            </div>
            <p className="desc">지구 곳곳의 산과 자연의 이야기를 기록합니다</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((foot, idx) => (
                <li key={idx}>
                  <a href={foot.link}>{foot.title}</a>
                  <em>{foot.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer_right">
          © 2025…. <br />이 사이트는 REACT를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
