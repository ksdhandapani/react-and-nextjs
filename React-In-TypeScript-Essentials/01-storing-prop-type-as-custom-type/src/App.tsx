import CourseGoal from "./components/CourseGoal.tsx";

function App() {
  return (
<main>
  <CourseGoal title="Learn React + TypeScript">
    {/*
      The children prop can contain any valid React child, such as elements, strings, or fragments.
      Here, we are passing a paragraph element as the children prop.
    */}
    <p>Learn it from the group up</p> 
  </CourseGoal>
</main>
  )
}

export default App;