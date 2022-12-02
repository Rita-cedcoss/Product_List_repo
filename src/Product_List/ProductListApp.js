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
