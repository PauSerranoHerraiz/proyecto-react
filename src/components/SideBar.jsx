import { NavLink } from "react-router-dom"

function SideBar() {
    return (
        <aside className="sidebar">
        <ul>
            <li> <NavLink to="/">Home</NavLink></li>

            <li> <NavLink to="/about">About</NavLink></li>
        </ul>
        </aside>
    )
}

export default SideBar