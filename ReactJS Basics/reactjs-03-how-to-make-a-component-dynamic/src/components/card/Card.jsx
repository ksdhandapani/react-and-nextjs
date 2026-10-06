import "./Card.css"

function Card(props) {
    // props is an object that contains all the properties passed to the component.
    // In this case, we are using props.name to access the name property passed from the parent component (App.jsx).
    // This allows us to make the Card component dynamic, as it can display different names based on the props it receives.
    return (<div className="card">
        <img src={props.imageUrl} width={"100%"} height={230} alt="" />
        <h2>{props.name}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button>Profile Details</button>
    </div>);
}

export default Card;