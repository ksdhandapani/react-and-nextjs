import { useState } from 'react';

import NewGoal from './components/NewGoal.tsx';
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg"

/**
 * The shape of one goal stored by the app.
 *
 * `title` and `description` contain the text entered in NewGoal. `id` is a
 * number used to identify this particular goal when it is deleted.
 */
export type CourseGoal = {
    title: string;
    description: string;
    id: number
}

/**
 * The root component for the course-goals page.
 *
 * App owns the goals state and passes data and callbacks to child components:
 * NewGoal calls `handleAddGoal` through its `onAddGoal` prop, while
 * CourseGoalList receives the current goals and the delete callback. When
 * those handlers update state, React renders App and its children again with
 * the latest goals.
 *
 * `useState<CourseGoal[]>([])` declares that the state is an array of
 * CourseGoal objects, initially empty. The square brackets in
 * `[goals, setGoals]` destructure the state value and its setter from the
 * array returned by `useState`.
 */
function App() {

    const [goals, setGoals] = useState<CourseGoal[]>([]);

    /**
     * Adds a goal submitted by NewGoal to the goals state.
     *
     * `setGoals` receives an updater function because the new state depends
     * on the previous state. React provides that previous array as
     * `prevGoals`; returning a new array avoids modifying state in place.
     */
    function handleAddGoal(goal: string, summary: string) {
        setGoals(prevGoals => {
            const newGoal: CourseGoal = {
                id: Math.random(),
                title: goal,
                description: summary
            };

            // `...prevGoals` spreads the existing items into a new array before appending the new goal.
            return [...prevGoals, newGoal]
        });
    }

    /**
     * Removes the goal whose id matches the id received from CourseGoalList.
     *
     * `filter` creates a new array containing only goals for which the
     * callback returns true. `!==` means "is not strictly equal to", so the
     * goal with the requested id is left out.
     */
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
      {/* Pass the handler as a prop; NewGoal calls it after the form is submitted. */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App;