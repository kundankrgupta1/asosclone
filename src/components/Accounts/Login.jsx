import { Link, useNavigate } from "react-router-dom"
import "./accountLoginSignup.style.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/ContextProviderApp";
const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const { setIsAuth, setToken, setName } = useContext(AuthContext)
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)


	const navigate = useNavigate()
	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			const res = await fetch("https://backendasos.onrender.com/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email,
					password
				})
			})
			const data = await res.json()
			setMessage(data.message)
			setToken(data.token)
			setName(data.name)
			localStorage.setItem("token", data.token)
			setIsAuth(true)
			setIsLoading(false)
			setTimeout(() => {
				if (data.token !== undefined) {
					console.log("Token is defined. Redirecting to home page...");
					navigate("/")
				}
			}, 3000)

		} catch (error) {
			console.log(error);
			setError(true)
			setIsLoading(false)
		}
	}

	return (
		<div className="account-singup-form">
			<p>sign in here...</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input type="text" placeholder="email@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" placeholder="********" required value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<p>{message}</p>
				<button type="submit">{!error && isLoading ? "please wait..." : "sign in"}</button>
			</form>
			<Link to="/">go back to home</Link>
		</div>
	)
}

export default Login