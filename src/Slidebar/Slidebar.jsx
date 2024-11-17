import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";
import "./Slidebar.css";

const Slidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </section>
    </>
  );
};

export default Slidebar;