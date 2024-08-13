const todoListKey = 'todo-list'
export const getTodoListData = () =>{
    const primaryTodo = localStorage.getItem(todoListKey);
    if(!primaryTodo)return[];
    return JSON.parse(primaryTodo)
}

export const setTodoListData = (list) =>{
    const primaryTodo = localStorage.setItem(todoListKey,JSON.stringify(list));
    if(!primaryTodo)return[];
    return JSON.parse(primaryTodo)
}