import { createContext } from "react"

// Create a context object using the createContext function from React. 
// This context will be used to share data between components without having to pass props down manually at every level.
const myContext = createContext();

// Export the context object so that it can be imported and used in other components.
export default myContext;