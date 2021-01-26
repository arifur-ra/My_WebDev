import TodoItem from "../domain/TodoItem"

class MockDatabase{

    static CURRENT_ID_KEY=Object.freeze('current_id')
    static TODO_ITEM_LIST_KEY=Object.freeze('todo_item_list')
    getNextID=()=>{
     let currentID = localStorage.getItem(MockDatabase.CURRENT_ID_KEY)
     return currentID ? (parseInt(currentID)+1):1
    }


    create=(todo)=>{
    const nextID=database.getNextID();
    todo.id=nextID

    /**
     * @type {TodoItem[]}
     */
    const todoList=JSON.parse(
        localStorage.getItem(MockDatabase.TODO_ITEM_LIST_KEY)
    )|| [];
    todoList.push(todo);
    localStorage.setItem(MockDatabase.TODO_ITEM_LIST_KEY,JSON.stringify(todoList))
    localStorage.setItem(MockDatabase.CURRENT_ID_KEY,nextID)
    return todo;
    }
    
}

const database =new MockDatabase();
export default database;