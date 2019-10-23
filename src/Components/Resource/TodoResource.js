export default {
    getAll: () => fetch("http://localhost:9090/api/todos", 
    {mode: 'cors'}),

    createTodo: (todo) => fetch("http://localhost:9090/api/todos", {
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(todo)
    }),

    updateTodo: (todo) => fetch("http://localhost:9090/api/todos/"+todo.id, {
          mode: 'cors',
          method: 'PATCH',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify({
              "status": todo.status
          })
    }),

    filterTodo: (filterType) => fetch("http://localhost:9090/api/todos/search/statusOfTodos?status="+filterType, 
    {mode: 'cors'})
}