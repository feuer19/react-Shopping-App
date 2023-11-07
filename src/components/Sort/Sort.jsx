import styles from "./SortStyle.module.css"

export const Sort = ({setProducts, products})=>{
    const sortProduct = (type) => {
        const newProduct = [...products];
        if (type === "recent") {
          newProduct.sort((a, b) => a.id - b.id);
          setProducts(newProduct);
        } else if (type === "row") {
          newProduct.sort((a, b) => a.price - b.price);
          setProducts(newProduct);
        } else if (type === "high") {
          newProduct.sort((a, b) => b.price - a.price);
          setProducts(newProduct);
        }
      };
    return(<div className={styles.filter}>
        <p onClick={() => sortProduct("recent")}>최신순</p>
        <p onClick={() => sortProduct("row")}>낮은 가격</p>
        <p onClick={() => sortProduct("high")}>높은 가격</p>
      </div>)
}