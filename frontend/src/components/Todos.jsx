export const Todo = ({todos, refresh, setRefresh}) => {
    return <div>
        {
            todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={async () => {
                        await fetch("http://localhost:3000/completed", {
                            method : "POST",
                            body : JSON.stringify({
                                id : todo._id
                            }),
                            headers : {
                                "content-Type" : "application/json"
                            }
                        })
                        setRefresh(!refresh)
                    }} disabled={todo.isCompleted}>{todo.isCompleted ? "Completed" : "Mark as complete"}</button>
                </div>
            })
        }
    </div>
}