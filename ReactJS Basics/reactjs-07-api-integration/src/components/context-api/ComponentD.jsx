import { useContext } from "react"
import myContext from "./context";

function ComponentD(){
    /* The useContext hook is used to access the context value provided by the myContext.Provider in ComponentA.
    It allows ComponentD to consume the context value (state) without having to pass it down through props. */
    const data = useContext(myContext)
    return (
        <div className="componentDContext">
            {/* Display the context value (data) in ComponentD. This value is provided by the myContext.Provider in ComponentA. */}
            <h1>Component D: {data}</h1>
        </div>
    );
}

export default ComponentD;