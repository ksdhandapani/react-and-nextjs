import "./Card.css"

function Card(props) {
    return (<div className="card">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/354/252/small/businessman-isolated-illustration-ai-generative-free-photo.jpg" width={"100%"} height={230} alt="" />
    <h2>Rajiv Shukla</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <button>Profile Details</button>
    </div>);
}

export default Card;