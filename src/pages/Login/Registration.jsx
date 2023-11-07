import React from "react";
import { useEffect, useState } from "react";
import styles from "./Registration.module.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const [pwConfirm, setPwConfirm] = useState("");
  const [ispwConfirm, setIsPwConfirm] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    const regex = /^[가-힣]{2,4}$/;
    if (regex.test(e.target.value)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

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

  const handlePWConfirm = (e) => {
    setPwConfirm(e.target.value);
    if (pw === pwConfirm) {
      setIsPwConfirm(false);
    } else {
      setIsPwConfirm(true);
    }
  };

  useEffect(() => {
    if (nameValid && emailValid && pwValid && ispwConfirm) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [nameValid, emailValid, pwValid, ispwConfirm]);

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.titleWrap}>
          회원가입을 위해
          <br />
          정보를 입력해주세요.
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.inputTitle}>이름</div>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="text"
              placeholder="이름 2~4자 이내 입력해주세요 :)"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className={styles.errorMessageWrap_name}>
            {!nameValid && name.length > 0 && (
              <div>이름 2~4자 이내 입력해주세요! </div>
            )}
          </div>

          <div className={styles.inputTitle}>이메일 주소</div>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className={styles.errorMessageWrap}>
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요! </div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className={styles.inputTitle}>
            비밀번호
          </div>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상 :)"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className={styles.errorMessageWrap}>
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요! </div>
            )}
          </div>
          <div style={{ marginTop: "26px" }} className={styles.inputTitle}>
            비밀번호 확인
          </div>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호 일치하게 작성해주세요 :)"
              value={pwConfirm}
              onChange={handlePWConfirm}
            />
          </div>
          <div className={styles.errorMessageWrap}>
            {!ispwConfirm && pwConfirm.length > 0 && (
              <div>비밀번호 일치하게 작성해주세요! </div>
            )}
          </div>
        </div>

        <div>
          <button className={styles.bottomButton} disabled={notAllow}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
