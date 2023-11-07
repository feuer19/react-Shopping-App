import React from "react";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";

const User = {
  email: "test@example.com",
  pw: "test2323@@@",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <div className={styles.login_header}>
          <header>LOGIN</header>
          <p>이메일과 비밀번호를 입력해주세요.</p>
        </div>
        <div className={styles.input_box}>
          <input
            type="text"
            className={styles.input_field}
            id="email"
            required
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="email">이메일</label>
        </div>
        <div className={styles.errorMessageWrap_id}>
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>
        <div className={styles.input_box}>
          <input
            type="password"
            className={styles.input_field}
            id="password"
            required
            value={pw}
            onChange={handlePw}
          />
          <label htmlFor="password">비밀번호</label>
        </div>
        <div className={styles.errorMessageWrap_pw}>
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>
        <div className={styles.forgot}>
          <section className={styles.remember}>
            <input type="checkbox" id="check" />
            <label htmlFor="check" style={{ padding: "0px 9px 0px" }}>
              기억하기
            </label>
          </section>
          <section>
            <a href="#" className={styles.forgot_link}>
              비밀번호 찾기
            </a>
          </section>
        </div>
        <div className={styles.input_box}>
          <input
            type="submit"
            className={styles.input_submit}
            value="로그인"
            onClick={onClickConfirmButton}
            disabled={notAllow}
          />
        </div>
        <div className={styles.middle_text}>
          <hr />
          <p className={styles.or_text}>Or</p>
        </div>
        <div className={styles.social_sign_in}>
          <button className={styles.input_google}>
            <img src="images/google.png" alt="google" />
            <p>Login with Google</p>
          </button>
          <button className={styles.input_twitter}>
            <img src="images/twitter.png" alt="twitter" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
