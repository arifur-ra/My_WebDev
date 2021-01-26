import TodoItem from '../domain/TodoItem'
import database from './MockDatabase'
 class TodoService{
    /**
 * @param{TodoItem} todo
 */

    create=(todo)=>{

        // work in it validation
        
        database.create(todo)
    }
    
}
const todoService=new TodoService()
export default todoService