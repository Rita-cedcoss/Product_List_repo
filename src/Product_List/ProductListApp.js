import React, { useEffect, useState } from "react";
const ProductListApp = (props) => {
  const [checkArr,setCheckArr]=useState([]);
  console.log(checkArr);
  const uniqueIds=[];
  const checkarrData = () => 
{
const unique = props.productArr.filter(element => {
  const isDuplicate = uniqueIds.includes(element.primary_category);
  if (!isDuplicate) {
    uniqueIds.push(element.primary_category);
    setCheckArr([...uniqueIds]);
    return true;
  }
  return false;
});
console.log(unique);
};
  useEffect(() => {
    checkarrData();
  }, []);
  // make three reducers (one for cake and one for ice-cream and one for chocolates  ) and combine these reducers in one reducer and make store of it.
  // take order from user and subtract the order from the available quantity. 
  // eg. user wants to buy 4 chocolates and 2 cakes then if the product is in stock then subtract the quantity .
  // Note: use proper validation for input and Buying.
  // Add more than 5 reducers in combineReducers
  // One each for:
  // addition 
  // subtraction
  // division
  // multiplication
  // clear answer
  return (
    <div id="outerProduct">
      <h1>Products</h1>
      <select>
        {checkArr.map((item, i) => {
          return <option index={i}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ProductListApp;
