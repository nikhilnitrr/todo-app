export const Todo = ({todos}) => {
    return <div>
        {
            todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.isCompleted ? "Done" : "Mark as done"}</button>
                </div>
            })
        }
    </div>
}