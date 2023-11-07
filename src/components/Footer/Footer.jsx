import React from 'react'
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram,faTwitter,faFacebook,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const MoveToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.row}> 
        <div className={styles.footer_col}>
          <h4>CS CENTER</h4>
          <ul>
            <li><a href="#">카카오톡/네이버톡톡</a></li>
            <li><a href="#">MON-FRI : 10:00 ~ 17:00</a></li>
            <li><a href="#">LUNCH: 13:00 ~ 14:00</a></li>
            <li><a href="#">SAT, SUN, HOLIDAY OFF</a></li>
            <li><a href="#">대표번호 1234-5678</a></li>
          </ul>
        </div>
        <div className={styles.footer_col}>
          <h4>DELIVERY</h4>
          <ul>
            <li><a href="#">반품주소:</a></li>
            <li><a href="#">경기도 xx시 xx로 123 물류센터
              <br/>
              대한통운 택배 이용</a></li>
          </ul>
        </div>
        <div className={styles.footer_col}>
          <h4>BANK ACCOUNT</h4>
          <ul>
            <li><a href="#">예금주 : ㈜xx</a></li>
            <li><a href="#">우리 1234-123-123456</a></li>
            <li><a href="#">농협 123-1234-1234-12</a></li>
            <li><a href="#">기업 123-123456-12-123</a></li>
            <li><a href="#">국민 123456-12-123456</a></li>
          </ul>
        </div>


        <div className={styles.footer_col}>
            <h4>Follow Us</h4>
            <div className={styles.social_links}>
              <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a><FontAwesomeIcon icon={faFacebook} /></a>
              <a><FontAwesomeIcon icon={faTwitter} /></a>
              <a><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
      </div>
    </div>
    <div className={`${styles.fix} ${styles.scrolltop}`} onClick={MoveToTop}>
        <a>
        <FontAwesomeIcon icon={faArrowUp} />
        <span>top</span>
        </a>
    </div>
  </footer>
  
  )
}
