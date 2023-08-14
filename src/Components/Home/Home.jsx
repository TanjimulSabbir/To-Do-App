import Footer from "../Footer/Footer"
import InputedInfo from "../InputedInfo/InputedInfo"
import TodoList from "../ShowDataOnDisplay/TodoList"
import Header from "../TopHeader/Header"



function Home() {
    return (
        <div>
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                <Header />

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    <InputedInfo />

                    <hr className="mt-4" />

                    <TodoList />

                    <hr className="mt-4" />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home