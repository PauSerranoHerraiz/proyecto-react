import { NavLink } from "react-router-dom"

function SideBar() {
    return (
        <aside className="sidebar">
            <ul>
                <li> <NavLink to="/"><button>Home</button></NavLink></li>
                <li> <NavLink to="/create"><button>Add new product</button></NavLink></li>
                <li> <NavLink to="/about"><button>About</button></NavLink></li>
            </ul>
        </aside>
    )
}

export default SideBar