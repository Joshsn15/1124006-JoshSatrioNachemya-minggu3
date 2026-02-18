import { useState } from 'react';



export function ToDo() {
    const [toDoList, setToDoList] = useState<string[]>([]);
    const [newToDo, setNewToDo] = useState('');
    const addToDo = () => {
        setToDoList([...toDoList, newToDo]);
        setNewToDo('');
    }

    const deleteToDo = (index: number) => {
        const newToDoList = toDoList.filter((_, i) => i !== index); // Filter out the item at the specified index
        setToDoList(newToDoList);
    }
    return <div>
        <h4>To Do List</h4>
        <ul>
            {toDoList.map((item, index) => (
                <table>

                    <tr key={index}>
                        <td>
                            {item}
                        </td>
                        <td>
                            <button onClick={() => deleteToDo(index)}>Delete</button>

                        </td>
                    </tr>
                </table>
            ))}
        </ul>
      
        <div>
            <input type="text" name="ToDo" value={newToDo} onChange={(e) => setNewToDo(e.target.value)}></input>
            <button onClick={addToDo}>Add</button>

        </div>
    </div>
}
