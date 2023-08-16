import { useDispatch, useSelector } from "react-redux";
import { allTodoShow, colorTodoShow, completedTodoShow, incompletedTodoShow } from "../../Redux/Filter/Actions/Actions";
import { useState } from "react";

export default function Footer() {
	const dispatch = useDispatch();
	const [color, setColor] = useState()
	const ToDoData = useSelector(state => state.todolist);
	// const handleShowAll = () => {
	// 	dispatch(allTodoShow())
	// }
	// const handleCompletedShow = () => {
	// 	dispatch(completedTodoShow())
	// }
	// const handleIncompletedShow = () => {
	// 	dispatch(incompletedTodoShow())
	// }
	const handleColorShow = (color) => {
		setColor("")
		dispatch(colorTodoShow(color))
		setColor(color)
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
				<li onClick={() => handleShowAll()} className="cursor-pointer font-bold">All</li>
				<li>|</li>
				<li onClick={() => handleIncompletedShow()} className="cursor-pointer">Incomplete</li>
				<li>|</li>
				<li onClick={() => handleCompletedShow()} className="cursor-pointer">Complete</li>
				<li></li>
				<li></li>

				<li onClick={() => handleColorShow("green")} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer 
				${color === "green" && "bg-green-500"}`}></li>

				<li onClick={() => handleColorShow("red")} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer 
				${color === "red" && "bg-red-500"}`}></li>

				<li onClick={() => handleColorShow("yellow")} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer 
				${color === "yellow" && "bg-yellow-500"}`}></li>
			</ul>
		</div>
	);
}
