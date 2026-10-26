import { useRef, type SubmitEvent } from 'react';

/**
 * Describes the values a parent component must pass to NewGoal.
 * `onAddGoal` is a callback: it accepts the entered goal and summary strings
 * and returns nothing (`void`). The `:` after its name introduces its type,
 * and `=>` separates the callback's argument types from its return type.
 */
type NewGoalProps = {
 onAddGoal: (goal: string, summary: string) => void; 
}

/**
 * Renders a form for entering a goal and its short summary.
 *
 * The props object is unpacked with `{ onAddGoal }` (object destructuring).
 * `goal` and `summary` are refs created by `useRef<HTMLInputElement>(null)`;
 * they point to the goal and summary input elements. `<HTMLInputElement>` is
 * a TypeScript generic type argument, and `null` is the initial value because
 * the inputs do not exist until React renders them.
 *
 * On submission, `handleSubmit` prevents the browser's default form
 * navigation, reads each input's `.value` into the `enteredGoal` and
 * `enteredSummary` constants, resets the form, and passes those strings to
 * the parent's `onAddGoal` callback. `event` is typed as a submit event for
 * an HTML form. The `!` after `.current` is TypeScript's non-null assertion:
 * it tells TypeScript that the input reference is set when the submit handler
 * runs.
 *
 * In the JSX, `ref` connects each input to its reference, `htmlFor` connects
 * a label to its input's `id`, and `onSubmit` connects the form event to the
 * handler. `event.preventDefault()` stops the browser's normal submit action;
 * `event.currentTarget.reset()` clears the form; and `onAddGoal(...)` calls
 * the callback supplied by the parent. These are method/function calls, and
 * the dot (`.`) accesses an object's property or method. In the callback
 * type, `:` introduces a type, `=>` separates argument types from the return
 * type, and `void` means there is no return value.
 */
function NewGoal({onAddGoal}: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }

    return (<form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal} />
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summary} />
        </p>
        <p>
            <button>AddGoal</button>
        </p>
    </form>
    );
}

export default NewGoal;