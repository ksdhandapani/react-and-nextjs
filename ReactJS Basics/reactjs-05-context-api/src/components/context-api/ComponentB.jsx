import ComponentC from "./ComponentC"
function ComponentB(){
    return (
        <div className="componentBContext">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;