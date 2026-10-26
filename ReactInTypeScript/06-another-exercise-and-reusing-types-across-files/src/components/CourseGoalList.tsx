import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CourseGoalType } from "./../App.tsx"

type CourseListProps = {
    goals: CourseGoalType[];
};

function CourseGoalList({ goals }: CourseListProps) {

    return (<div>
        <ul>
            {goals.map((goal) => (
                <CourseGoal title={goal.title}>
                    <p>{goal.description}</p>
                </CourseGoal>
            ))}
        </ul>
    </div>)
};

export default CourseGoalList;