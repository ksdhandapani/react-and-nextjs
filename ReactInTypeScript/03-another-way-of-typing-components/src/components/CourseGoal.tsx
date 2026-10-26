import { type FC, type PropsWithChildren, type ReactNode } from 'react';

// interface CourseGoalProps {
//     title: string, 
//     children: ReactNode
// }

// Here is an alternative way to define the props type using PropsWithChildren.
// This approach automatically includes the children prop in the type definition, we no longer need to explicitly define it.
type CourseGoalProps = PropsWithChildren<{ title: string }>;

// Here is the functional component definition using the FC type and the CourseGoalProps type.
// FC<CourseGoalProps> - defines a functional component with props of type CourseGoalProps, including the children prop automatically.
const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
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

// Here is an alternative way to define the functional component without using the FC type.
// function CourseGoal({title, children} : CourseGoalProps) {
//     return (
//         <article>
//         <div>
//             <h2>{title}</h2>
//             <p>{children}</p>            
//         </div>
//         <button>Delete</button>
//         </article>

//     )
// }

// Here is the export statement for the CourseGoal component.
// This allows the component to be imported and used in other files.
export default CourseGoal;