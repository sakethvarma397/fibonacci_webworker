import React from 'react';
import "./App.css";
import reducer from "./reducer";
import Results from "./Results";
import {ordinal_suffix} from "./helper";

const fib = (n) => n < 2 ? n : fib(n-1) + fib(n-2);
const calculateFib = (num, dispatch, id)=> {
    const start = new Date().getTime();
    const fibNum = fib(num);
    const time = new Date().getTime() - start;
    dispatch({
        type: "UPDATE_FIBO",
        id,
        time,
        fibNum,
    })
}

const CalculateFibonacci = () => {
    const [info, dispatch] = React.useReducer(reducer, {
        err: "",
        num: "",
        computedFibs: [],
    });
    const [counter, setCounter] = React.useState(0);


    function handleInputSubmit() {
        if (info.num < 2) {
            dispatch({
                type: "SET_ERROR",
                err: "Please enter a number greater than 2",
            });
            return;
        }

        const id = info.computedFibs.length;
        dispatch({
            type: "SET_FIBO",
            id,
            loading: true,
            err: '',
            nth: ordinal_suffix(info.num)
        });
        calculateFib(info.num, dispatch, id);
    };

    return (
        <div>
            <div className="heading-container">
                <h1>Computing the nth Fibonnaci number</h1>
            </div>

            <div className="body-container">
                <p id="error" className="error">
                    {info.err}
                </p>
                <div className={"interactive-elements"}>
                    <div className="input-div">
                        <input
                            type="number"
                            value={info.num}
                            className="number-input"
                            placeholder="Enter a number"
                            onChange={(e) =>
                                dispatch({
                                    type: "SET_NUMBER",
                                    num: window.Number(e.target.value),
                                })
                            }
                        />
                        <button
                            className="btn-submit"
                            onClick={handleInputSubmit}
                        >
                            Calculate
                        </button>
                    </div>
                    <div className={"counter-div"}>
                        <button
                            className="btn-submit"
                            id="counter_btn"
                            onClick={() =>{setCounter(prev => prev+1)}}
                        >
                        Click: {counter}
                        </button>
                    </div>
                </div>
                <Results results={info.computedFibs} />
            </div>
        </div>
    );
};

export default CalculateFibonacci;
