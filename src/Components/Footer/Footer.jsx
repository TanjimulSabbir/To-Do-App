import { useDispatch, useSelector } from "react-redux";
import { colorTodoShow, statusChanged } from "../../Redux/Filter/Actions/Actions";

export default function Footer() {
	const dispatch = useDispatch();
	const ToDoData = useSelector(state => state.todolist);
	const filterData = useSelector(state => state?.filterData);
	const { status, colors } = filterData;

	const handleStatusChanged = (status) => {
		dispatch(statusChanged(status))
	}
	const handleColorShow = (color) => {
		dispatch(colorTodoShow(color))
	}

	const completed = ToDoData.filter(todo => !todo.completed).length;

	const handleTaskLeft = (ToDoLength) => {
		switch (ToDoLength) {
			case 0:
				return "No Task"
			case 1:
				return "1 Task"

			default:
				return `${ToDoLength} Tasks`
		}
	}
	return (
		<div className="mt-4 flex justify-between text-xs text-gray-500">
			<p>{handleTaskLeft(completed)} left</p>
			<ul className="flex space-x-1 items-center text-xs">
				<li onClick={() => handleStatusChanged("All")} className="cursor-pointer font-bold">All</li>
				<li>|</li>
				<li onClick={() => handleStatusChanged("incompleted")} className="cursor-pointer">Incomplete</li>
				<li>|</li>
				<li onClick={() => handleStatusChanged("completed")} className="cursor-pointer">Complete</li>
				<li></li>
				<li></li>

				<li onClick={() => handleColorShow("green")} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer 
				`}></li>

				<li onClick={() => handleColorShow("red")} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer 
				`}></li>

				<li onClick={() => handleColorShow("yellow")} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer 
				`}></li>
			</ul>
		</div>
	);
}
