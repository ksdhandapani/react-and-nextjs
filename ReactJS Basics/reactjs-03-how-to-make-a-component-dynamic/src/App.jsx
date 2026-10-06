import Card from "./components/card/Card";
import "./App.css"

function App() {
    return (<div className="app">
        <Card name="Dhandapani Sudhakar" imageUrl="https://static.vecteezy.com/system/resources/thumbnails/057/936/076/small/confident-businessman-smiling-with-arms-crossed-conveying-professionalism-and-success-photo.jpg" />
        <Card name="Velmurugan Gugan" imageUrl="https://img.magnific.com/free-photo/ambitious-businessman-standing-street_1262-3451.jpg?semt=ais_hybrid&w=740&q=80" />
        <Card name="Yogesh Ravichandran" imageUrl="https://images.pexels.com/photos/37842959/pexels-photo-37842959.jpeg?cs=srgb&dl=pexels-julien-realtor-2147745923-37842959.jpg&fm=jpg" />
        <Card name="Veerakumar Manivasagam" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZKFL0D5uGiEGEPW6dtUnbMaR9d0JO_H9RhzxFo0fkG9WDoI8hvL2uImC&s=10" />
    </div>);
}

export default App;