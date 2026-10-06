import { useState } from "react";
import "./Counter.css"

function Counter(){
    const [state, setState] = useState(0);

    const increaseCount = ()=> {
        setState(state + 1)
    };

    const decreaseCount = ()=> {
        setState(state - 1)
    };

    return (
        <div style={{ padding: "50px" }}>
            <h1>Count: {state}</h1>
            <button className="increaseBtn" onClick={ increaseCount }>Increase Count</button>
            <button className="decreaseBtn" onClick={ decreaseCount }>Decrease Count</button>
        </div>
    );
}

export default Counter;