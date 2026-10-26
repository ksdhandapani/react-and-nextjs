import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg"

function App() {
  return (
    <main>
      <Header image  = {{src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TypeScript">
        <p>Learn it from the group up</p>
      </CourseGoal>
    </main>
  )
}

export default App;