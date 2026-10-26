import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CourseGoalType } from "./../App.tsx"

// Define the props for the CourseGoalList component
// This component receives a list of course goals and a function to handle deleting a goal.
type CourseListProps = {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseListProps) {

    return (<div>
        <ul>
            {goals.map((goal) => (
                <CourseGoal  id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                    <p>{goal.description}</p>
                </CourseGoal>
            ))}
        </ul>
    </div>)
};

export default CourseGoalList;