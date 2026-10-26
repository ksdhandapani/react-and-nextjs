import { useState } from 'react';

import CourseGoalList from './components/CourseGoalList.tsx';
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg"

export type CourseGoal = {
    title: string;
    description: string;
    id: number
}

function App() {

    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal() {

        // If your useState depends on the old state, we use use the special function () => {} for updating the state
        setGoals(prevGoals => {
            const newGoal: CourseGoal = {
                id: Math.random(),
                title: 'Learn React + TypeScript',
                description: 'Learn it in depth'
            };
            return [...prevGoals, newGoal]
        });
    }


  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  )
}

export default App;