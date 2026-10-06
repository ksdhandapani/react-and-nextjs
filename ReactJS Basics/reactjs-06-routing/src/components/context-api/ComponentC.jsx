import ComponentD from "./ComponentD"

function ComponentC(){
    return (
        <div className="componentCContext">
            <h1>Component C</h1>
            <ComponentD />
        </div>
    );
}

export default ComponentC;