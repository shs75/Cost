import React, { useState } from "react";

const MyForm = ({onSubmitHandler}) => {
  const [myFormData, setMyFormData] = useState({ type: "", price: 0 });

  let typeChangeHandler = (e) => {
    setMyFormData({ ...myFormData, type: e.target.value });
  };
  let priceChangeHandler = (e) => {
    setMyFormData({ ...myFormData, price: e.target.value });
  };
  let submit = (e) => {
    e.preventDefault();
    onSubmitHandler(myFormData);
  };

  return (
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Name"
          onChange={typeChangeHandler}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={priceChangeHandler}
        />
        <button className="btn">Add</button>
      </form>
  );
};
export default MyForm;
