import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Snap from './Snap';

const mountain=[
  require('./imges/mountain/m1.jpg'),
  require('./imges/mountain/m1.jpg'),
  require('./imges/mountain/m1.jpg')
];
const beach=[
  require('./imges/beach/b1.jpg'),
  require('./imges/beach/b2.jpg'),
  require('./imges/beach/b3.jpg'),
];
function App() {
  const [currentimg, setcurrentimg] = useState([]);
  const [title, settitle] = useState("");

  const handlermountain = () => {
    setcurrentimg(mountain);
    settitle("mountain img");
  }
  const handlrbeach = () => {
    setcurrentimg(beach);
    settitle("beach");
  }
  return (
    <>
    
      <button onClick={handlermountain}>mountain</button>
      <button onClick={handlrbeach}>beach</button>
  

    {!title ?(
      <div>
        <Snap title={"mountain"} imges={mountain}/>
        <Snap title={"beach-"} imges={beach}/>
      </div>
    ):(
      <Snap title={title} c={currentimg}></Snap>
    )}    
    </>
      );
}

export default App;
