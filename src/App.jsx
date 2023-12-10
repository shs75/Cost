import "./App.css";
import Cost from "./components/Cost";
import MyForm from "./components/MyForm";
import {useState} from 'react';
function App() {
  // const allCosts = [
  //   { id: 1, type: "laptop", price: 1200 },
  //   { id: 2, type: "laptop", price: 1200 },
  //   { id: 3, type: "laptop", price: 1200 },
  //   { id: 4, type: "laptop", price: 1200 },
  // ];
  const [allCosts, setCosts] = useState([]);
  const addCosts = (cost) => {
    setCosts([...allCosts, cost]);
  }
  return (
    <div className='main'>
      <MyForm onSubmitHandler={addCosts}/>
      {
      allCosts.map((item , index) => {
        return <Cost key={index} cost={item}/>;
      })
      }
    </div>
  );
}

export default App;
