import { useDispatch, useSelector } from "react-redux";
import cancelImage from "../../assets/images/cancel.png";
import { selectColor, selectToggled, toDoDelete } from "../../Redux/Todo/Actions/Actions";
import { TOGGLED } from "../../Redux/Todo/ActionTypes/ActionTypes";

function Todo() {
    const ToDoData = useSelector((state) => state.todolist);
    const dispatch = useDispatch();
    const handleToDoDelete = (todoid) => {
        dispatch(toDoDelete(todoid))
    }
    const handleToggled = (todoid) => {
        dispatch(selectToggled(todoid))
    }
    const handleColor = (todoid, color) => {
        dispatch(selectColor(todoid, color))
    }
    return (
        <>
            {
                ToDoData?.map(data => {
                    const { id, text, completed, color } = data;
                    return (
                        <>
                            <div key={id} className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
                                <div className="rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
                                    <input
                                        type="checkbox"
                                        className="opacity-0 absolute rounded-full"
                                    />
                                    <svg
                                        className={`fill-current w-3 h-3 text-green-500 cursor-pointer ${completed ? "block" : "hidden"}`}
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </div>

                                <div onClick={() => handleToggled(id)} className={`select-none flex-1 cursor-pointer ${completed && "line-through"}`}>
                                    {text}
                                </div>

                                <div onClick={() => handleColor(id, "green")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${color === "green" && "bg-green-500"}`}></div>

                                <div onClick={() => handleColor(id, "yellow")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === "yellow" && "bg-yellow-500"}`}></div>

                                <div onClick={() => handleColor(id, "red")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === "red" && "bg-red-500"}`}></div>

                                <img
                                    onClick={() => handleToDoDelete(id)}
                                    src={cancelImage}
                                    className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                                    alt="Cancel"
                                />
                            </div>
                        </>
                    )
                })
            }
        </>
    );
}
export default Todo;