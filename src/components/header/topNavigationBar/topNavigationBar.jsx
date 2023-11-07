import { Cart } from "../../cart/cart";
import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../products/product";

export const TopNavigationBar = ({ cart, products, setproducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const onChangeSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    console.log(searchTerm);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/HomePageIcon.png" alt="logo" />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          <input
            type="text"
            placeholder="상품을 검색해보세요!"
            onChange={onChangeSearch}
          />
          <img src="/images/icon-search.svg" alt="search" />
        </div>
      </div>

      <div className={styles.menu}>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/icon-shopping-cart.svg" alt="cart" />
            <span>장바구니</span>
            {cart.length >= 1 ? (
              <div className={styles.new_shopping_cart}>
                <p>{cart.length}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link to="/Login">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
        <Link to="/Registration">
          <div className={styles.mypage2}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>회원가입</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

// // 입력값을 가져오기
// const [userInput, setuserInput] = useState("");

// const getValue = (e) => {
//   e.preventDefault();
//   setuserInput(e.target.value.toLowerCase());
//   setfillterItems(products.filter((product) => product.name.includes("Qck")));
//   console.log(fillterItems);
// };

// // 필터된 데이터들을 담아줄 state
// const [fillterItems, setfillterItems] = useState([]);

// {...fillterItems.map((item) => (
//   <Product key={item.id} />  // 잔여연산자 사용
// ))}
