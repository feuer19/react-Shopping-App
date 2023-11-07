import styles from "./cart.module.css";
import { useState } from "react";
import { CartHeader } from "./cartHeader";
import { CartList } from "./cartLsit";
import { TotalCart } from "./totalCart";

export const Cart = ({
  cart,
  convertPrice,
  setCart,
  checkLists,
  setCheckLists,
}) => {
  const [total, setTotal] = useState(0);
  const found = checkLists.map((checkList) =>
    cart.filter((el) => el.id === checkList)
  );

  const handleAllCheck = (checked) => {
    if (checked) {
      const checkItems = [];
      cart.filter((cart) => checkItems.push(cart.id));
      setCheckLists(checkItems);
    } else {
      setCheckLists([]);
    }
  };

  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckLists([...checkLists, id]);
    } else {
      setCheckLists(checkLists.filter((check) => check !== id));
    }
  };

  const isAllChecked =
    cart.length === checkLists.length && checkLists.length !== 0;
  //checkLists.length !== 0을 넣은 이유
  //체크가된 아이템이 없고, 장바구니의 상품이 아무것도 없어도
  //header부분에 있는 체크박스가 활성화 되어있기 때문에

  const handleQuantity = (type, id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    //이런식으로 [{},{}] 카트(배열)안에는 객체가 들어가 있기 때문에
    //[0]을 붙여 정확한 위치 파악 해야함
    const idx = cart.indexOf(found);
    const cartItem = {
      id: found.id,
      image: found.image,
      name: found.name,
      quantity: quantity,
      price: found.price,
      provider: found.provider,
      // 장바구니 페이지에 선택한 상품들의 정보를 넣어야 하므로
      //  cartItem 생성
    };

    if (type === "plus") {
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    } else {
      if (quantity === 0) return;
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
    console.log("found는", found, "index는?", idx);
  };

  const handleRemove = (id) => {
    setCart(cart.filter((el) => el.id !== id));
    setCheckLists(checkLists.filter((check) => check !== id));
  };

  return (
    <>
      <div className={styles.cartBody}>
        <header className={styles.header}>
          <h1>장바구니</h1>
        </header>
        <CartHeader
          handleAllCheck={handleAllCheck}
          isAllChecked={isAllChecked}
        />
        {cart.length === 0 ? (
          <div className={styles.not}>
            <h2>장바구니에 담긴 상품이 없습니다.</h2>
            <p>원하는 상품을 장바구니에 담아보세요.</p>
          </div>
        ) : (
          cart.map((cart) => {
            return (
              <CartList
                key={`key-${cart.id}`}
                cart={cart}
                setCart={setCart}
                convertPrice={convertPrice}
                handleRemove={handleRemove}
                handleQuantity={handleQuantity}
                handleCheckList={handleCheckList}
                checkLists={checkLists}
              />
            );
          })
        )}
        {cart.length === 0 ? (
          ""
        ) : (
          <TotalCart
            total={total}
            setTotal={setTotal}
            found={found}
            cart={cart}
            convertPrice={convertPrice}
          />
        )}
      </div>
    </>
  );
};
