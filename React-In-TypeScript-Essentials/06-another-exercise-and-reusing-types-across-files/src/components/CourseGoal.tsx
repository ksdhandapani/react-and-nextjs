import { type PropsWithChildren, type ReactNode } from 'react';

// interface CourseGoalProps {
//     title: string, 
//     children: ReactNode
// }

// Here is an alternative way to define the props type using PropsWithChildren.
// This approach automatically includes the children prop in the type definition, we no longer need to explicitly define it.
type CourseGoalProps = PropsWithChildren<{ title: string }>;

function CourseGoal({ title, children }: CourseGoalProps) {
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