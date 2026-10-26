import { type ReactNode } from 'react';

// This component represents a course goal with a title and children content.
interface CourseGoalProps {
    title: string, 
    children: ReactNode // ReactNode represents any valid React child, such as elements, strings, or fragments.
}

function CourseGoal({title, children} : CourseGoalProps) {
    return (
        <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>            
        </div>
        <button>Delete</button>
        </article>

    )
}

export default CourseGoal;