import React from "react";
import axios from "axios";
import { useState } from "react";

// The Products component is responsible for fetching and displaying a list of products from an external API. 
// It uses the useState hook to manage the state of the products array, and axios to make HTTP requests to the API. 
// When the "Get Products" button is clicked, it triggers the getProducts function, which fetches the product data and updates the state accordingly. 
// The component then renders the list of products in a structured format, including their title, description, images, price, and rating.
const productsApiUrl = "https://dummyjson.com/products";

function Products() {

  // The useState hook is used to create a state variable called products, which is initialized as an empty array.
  const [products, setProducts] = useState([]);

  // The getProducts function is responsible for fetching the product data from the API.
  // It uses axios to make a GET request to the specified API URL. 
  // If the request is successful, it updates the products state with the retrieved data. 
  // If there is an error during the request, it displays an alert and logs the error to the console.
  const getProducts = () => {
    axios.get(productsApiUrl).then((response) => {
      console.log(response.data);
      setProducts(response.data.products);
    }).catch((error) => {
      alert("Something went wrong!");
      console.log(error);
    });
  };

  return (<div>
    <h1>Products</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button onClick={getProducts}>Get Products</button>
    {
      // The products.length > 0 condition checks if there are any products in the state.
      // If there are products, it renders a div with the className "products" that contains a list of product cards.
      products.length > 0 && <div className="products">
        {
          // The map function is used to iterate over the products array and render a product card for each product.
          products.map(({ title, description, images, price, rating }) => {
            return <div className="productCard">
              <img src={images} width={"100%"} height={200} alt="" />
              <h3>{title}</h3>
              <p>$ {price}</p>
              <p>{description}</p>
              <p>Rating: {rating}</p>
              <button>Prouct Details</button>
            </div>
          })
        }
      </div>
    }
  </div>);
}

export default Products;