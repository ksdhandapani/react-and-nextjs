import { useState } from 'react';

import CourseGoalList from './components/CourseGoalList.tsx';
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg"

// Define the type for a course goal
export type CourseGoal = {
    title: string;
    description: string;
    id: number
}

function App() {

    // State for storing the list of course goals, initialized as an empty array, with type CourseGoal[]
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    // Function to handle adding a new course goal
    function handleAddGoal() {

        // If your useState depends on the old state, we use the special function () => {} for updating the state
        // Here we create a new course goal and add it to the list of goals
        setGoals(prevGoals => {
            const newGoal: CourseGoal = {
                id: Math.random(),
                title: 'Learn React + TypeScript',
                description: 'Learn it in depth'
            };
            // Return the new list of goals with the newly added goal, '...prevGoals' ensures we keep the existing goals in the array
            return [...prevGoals, newGoal]
        });
    }

    // Function to handle deleting a course goal by its id
    // It filters out the goal with the matching id from the list of goals and updates the state accordingly
    function handleDeleteGoal(id: number){
      setGoals( prevGoals => 
        prevGoals.filter( (goal) => goal.id !== id)
      );
    }


  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App;