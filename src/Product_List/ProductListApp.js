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
//   List the products in drop-down from the products data provided in attached text file.
// Steps:
// Access JSON data provided and list all the unique product_category in first drop-down.
// On selecting a product category created in step 1 show category_1 of selected category in another drop-down.
// Selecting category_1 show category_2 in another drop-down if exists else show "no data".
// Further selecting category_2 show category_3 in a span if exists else show "no data".
// Save the data to local storage using state and display in a table.
// Use proper coding style, avoid unnecessary re-rendering and code re-usability where ever applicable.   
// Sample is attached for reference:  

//combine reducer
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
