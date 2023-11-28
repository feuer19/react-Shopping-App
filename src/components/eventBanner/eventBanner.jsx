import styles from "./eventBanner.module.css";
import { useEffect, useState } from "react";

export const EventBanner = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(1);
  const [notAllowUp, setNotAllowUp] = useState(true);
  const [notAllowDown, setNotAllowDown] = useState(false);

  const [style, setStyle] = useState({
    transform: `translateY(-${currentImgIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const handleSide = (type) => {
    if (type === "up") {
      setCurrentImgIndex(currentImgIndex - 1);
      setStyle({
        transform: `translateY(-${(currentImgIndex - 1) * 101}%)`,
        transition: `all 0.4s ease-in-out`,
      });
    } else if (type === "down") {
      setCurrentImgIndex(currentImgIndex + 1);
      setStyle({
        transform: `translateY(-${(currentImgIndex + 1) * 101}%)`,
        transition: `all 0.4s ease-in-out`,
      });
    }
  };

  useEffect(() => {
    if (currentImgIndex === 1) {
      setNotAllowUp(true);
      setNotAllowDown(false);
      return;
    } else if (currentImgIndex === 2 && 3) {
      setNotAllowUp(false);
      return;
    } else if (currentImgIndex === 3) {
      setNotAllowDown(true);
      return;
    }
  }, [currentImgIndex]);

  return (
    <article className={styles.banner}>
      <div className={styles.album}>
        <div className={styles.images} style={style}>
          <img src="images/banner/banner1.png" />
          <img src="images/banner/banner2.jpg" />
          <img src="images/banner/banner3.jpg" />
        </div>
      </div>
      <div>
        <button
          className={styles.upBtn}
          onClick={() => handleSide("up")}
          disabled={notAllowUp}
        >
          <img src="images/icons/upward-arrow.png" alt="up" />
        </button>
      </div>
      <div>
        <button
          className={styles.downBtn}
          onClick={() => handleSide("down")}
          disabled={notAllowDown}
        >
          <img src="images/icons/downward-arrow.png" alt="down" />
        </button>
      </div>
    </article>
  );
};
