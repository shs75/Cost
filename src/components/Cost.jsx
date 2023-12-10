import React from 'react'

// const Cost = ({ data }) => {
//   const [myPrice, setMyPrice] = useState(data.price);
//   const clickHandler = () => {
//     setMyPrice(myPrice + 1);
//   };
//   return (
//     <div>
//       <h1>{data.price}</h1>
//       <h2>{myPrice}</h2>
//       <button onClick={clickHandler}>change price</button>
//     </div>
//   );
// };
const Cost = ({cost }) => {
    return(
      <div className='cost'>
        <span className='span'>{cost.type}</span>
        <span className='span2'>{cost.price}</span>
      </div>
    )
}
export default Cost
