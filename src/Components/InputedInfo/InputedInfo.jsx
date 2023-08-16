import { useDispatch, useSelector } from "react-redux";
import tickImage from "../../assets/images/double-tick.png";
import noteImage from "../../assets/images/notes.png";
import plusImage from "../../assets/images/plus.png";
import { allCompleted, clearCompleted, toDoAdd } from "../../Redux/Todo/Actions/Actions";

export default function InputedInfo() {
    const dispatch = useDispatch();
    const ToDoData = useSelector(state => state.todolist)
    const length = ToDoData.length;
    const handleSubmit = (event) => {
        event.preventDefault();
        const Text = event.target.text.value;
        if (!Text) {
            return;
        }
        dispatch(toDoAdd({ id: length + 1, text: Text }));
    }
    const handleAllComplete = () => {
        dispatch(allCompleted())
    }
    const handleClearCompleted=()=>{
        dispatch(clearCompleted())
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    name="text"
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}

                ><img src={plusImage} className="w-6 h-6" alt="Add todo" /></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={() => handleAllComplete()} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={()=>handleClearCompleted()} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
