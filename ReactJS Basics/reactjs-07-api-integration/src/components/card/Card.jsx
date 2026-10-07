import { useState } from "react";
import "./Card.css"

function Card(props) {
    const [imageUrl, setImageUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjH3jOp6Qn4KAL-iJz8nq0J6kpw6cpdtEMUs_cFHfrg&s=10");
    const [name, setName] = useState("Rajiv Gandhi");
    return (<div className="card">
        <img src={imageUrl} width={"100%"} height={230} alt="" />
        <h2>{name}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button onClick={() => {
            setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjH3jOp6Qn4KAL-iJz8nq0J6kpw6cpdtEMUs_cFHfrg&s=10")
            setName("Rajiv Gandhi");
        }}>Rajiv</button>
        <button onClick={() => {
            setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5FkoEXV9skOF6UFHwMX2bYkq8EQUB0XztA6QlWtHTg&s=10")
            setName("Sonia Gandhi");
        }}>Sonia</button>
    </div>);
}

export default Card;