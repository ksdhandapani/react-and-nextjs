import ComponentLink from "./components/context-api/ComponentA";
import Counter from "./components/state/Counter";
import "./App.css"
import Home from "./components/routing/Home";
import Profile from "./components/routing/Profile";
import Product from "./components/routing/Product";
import { Route, Routes, Link } from "react-router-dom";

function App() {
    return (
        <div className="app">
            {/* The Link component is used to create navigation links in the application.
            It allows users to navigate between different routes without reloading the page, providing a seamless user experience. */}
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/products">Products</Link>
            <br />
            <br />
            <hr />
            <br />
            <br />
            {/* The Routes component is used to define the routing structure of the application.
            It contains multiple Route components, each specifying a path and the corresponding component to render when that path is matched. */}
            <Routes>
                {/* The Route component defines a specific route in the application.
                It takes a path prop that specifies the URL path and an element prop that specifies the component to render when the path is matched. */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/products"} element={<Product />} />
            </Routes>
        </div>);
}

export default App;