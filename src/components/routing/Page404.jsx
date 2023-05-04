import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    )
}
export default Page404;
