
function LoginSystem() {
    const [currentUser, setCurrentUser] = useState(null);

    function login(entered) {
        savedCredentials(entered.credentials);
        setCurrentUser(entered.user);
    }
    
    return(
        <AuthContext.Provider value={{currentUser,login}}>
            <User:id/>
        </AuthContext.Provider>
    )
    // the return here uses the login function as a context value
    // whenever the website renders, it works
}

function checkCredentials() {
    const [name, username] = useState(null);
    if enteredName == username(
        // logged in
    )
    else(
        // not logged in
    )
}

const Login = () => {
    return (
        <>
            <h1>Login</h1>
        </>
    )
  }
  export default Home;