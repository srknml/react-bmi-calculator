import React, { useState, useRef, useEffect } from "react";
import BMIForm from "./components/Form/BMIForm";
import Hero from "./components/Hero/Hero";
import "./App.css";
import { Route, Switch } from "react-router";
import History from "./components/History/History";
import Result from "./components/Result/Result";
function App() {
    const [result, setResult] = useState();
    const [data, setData] = useState([]);
    const height = useRef();
    const weight = useRef();
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("data"));
        localData ? setData(localData) : setData([]);
    }, []);
    useEffect(() => {
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);
    const calculateRange = (score) => {
        if (score < 18.5) {
            return "Underweight";
        } else if (score < 25) {
            return "Healthy Weight";
        } else if (score < 30) {
            return "Overweight";
        } else {
            return "Obesity";
        }
    };
    const removeData = (id) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };
    const calculateBMI = (event) => {
        event.preventDefault();
        const BMIScore = (
            (weight.current.value / Math.pow(height.current.value, 2)) *
            10000
        ).toFixed(2);
        const range = calculateRange(BMIScore);
        setResult({ id: Date.now().toString(), BMIScore, range });
    };

    return (
        <div className="App">
            <Hero />
            <Switch>
                <Route exact path="/">
                    <BMIForm
                        height={height}
                        weight={weight}
                        handleClick={calculateBMI}
                    />
                </Route>

                <Route path="/result">
                    <Result dataUpdate={setData} result={result} />
                </Route>
                <Route path="/history">
                    <History removeData={removeData} data={data} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
