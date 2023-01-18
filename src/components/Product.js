// // import React  from "react";
// // import Navbar from "./navbar";
// // import Booking from "./Booking";
// // import "/navbar.css"
// // const Product =() =>{
// //     return(
// //         <React.Fragment>
// //             <Navbar />
// //             <Booking />
// //         </React.Fragment>
// //     );
    
// // };
// // export default Product;




import React, { useState, useEffect } from "react";
import Amazon from "./Amazon";
import Navbar from "./navbar";
import Cart from "./cart";

const Product = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default Product;