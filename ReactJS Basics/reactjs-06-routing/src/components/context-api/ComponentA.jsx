import { useState } from "react";

import ComponentB from "./ComponentB"

import myContext from "./context";

function ComponentA() {
    const [state, setState] = useState("Mallikarjun");
    return (
        <div className="componentAContext">
            <h1>Component A</h1>
            <button onClick={()=>{
                setState("Kharge")
            }}>Mofify</button>
            {/* The myContext.Provider component is used to provide the context value (state) to its child components.
            Any component that is a descendant of this provider can access the context value using the useContext hook. */}
            <myContext.Provider value={state}>
                {/* ComponentB is a child component of ComponentA and will have access to the context value (state) provided by the myContext.Provider. */}
                <ComponentB />
            </myContext.Provider>
        </div>
    );
}

export default ComponentA;