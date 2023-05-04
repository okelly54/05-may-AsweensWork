import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/Todos">Todos</Link>
                    </li>
                    <li>
                        <Link to="/Users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;