import { type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{ 
    id: number,
    title: string,
    onDelete: (id: number) => void;
 }>;

function CourseGoal({ title, id, children, onDelete }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            {/* Button to delete the course goal, calls the onDelete function with the goal's id, '()' ensures it's called only on click and not immediately */}
            <button onClick={ () => onDelete(id) }>Delete</button>
        </article>

    )
}

export default CourseGoal;