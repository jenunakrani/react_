import React, { useState } from "react";
import './App.css';

const App = () => {
        const [bmi, setBmi] = useState();
        const [info, setInfo] = useState();
        const [height, setHeight] = useState();
        const [weight, setWeight] = useState();

        const handleBmi = () => {
                let val = (
                        [Number(weight) / Number(height) / Number(height)] * 10000
                ).toFixed(1);

                setBmi(val);
                if (val < 18.5) {
                        setInfo("Under Weight..!");
                } else if (val > 18.5 && val <= 24.9) {
                        setInfo("Healthy...!");
                } else if (val > 24.9 && val < 30) {
                        setInfo("Overweight...!");
                } else {
                        setInfo("please enter height-weight..!");
                }
        };
        return (
                <center>
                        <div className="bmi">
                                <h1>BMI Calculator</h1>
                                Height : <input type="text" class="height" onChange={(e) => setHeight(e.target.value)} placeholder="height " /><br></br>

                                Weight : <input type="text" className="weight" onChange={(e) => setWeight(e.target.value)} placeholder="Weight " />

                                <br></br> <button onClick={handleBmi}>BMI</button>
                                <h2>{bmi}</h2>
                                <h2>{info}</h2>

                                <h4 className="note">please enter height <i>cm</i> and weight <i>kg</i></h4>
                        </div>
                </center>
        );
};

export default App;
