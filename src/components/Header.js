import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="p-4 md:w-8/12 m-auto flex items-center justify-between">
            <h1 className="font-bold text-3xl text-yellow-500">Movie List</h1>
            <Link to="/" className="text-lg underline">
                Home
            </Link>
        </div>
    )
}

export default Header
