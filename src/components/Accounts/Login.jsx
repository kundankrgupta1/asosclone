import { Link, useNavigate } from "react-router-dom"
import style from "./account.module.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/ContextProviderApp";
import Loading from "../Indicator/Loading";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const { token, setIsAuth, setToken, setName } = useContext(AuthContext)
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
			localStorage.setItem("name", data.name)
			setIsAuth(true)
			setIsLoading(false)
			setTimeout(() => {
				if (data.token !== undefined) {
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
		<div className={style.accountSingupForm}>
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
				{token === undefined ? <p style={{ color: "red" }}>{message}</p> : <p style={{ color: "green" }}>{message}</p>}
				<button type="submit">{!error && isLoading ? <Loading /> : "sign in"}</button>
			</form>
			<Link to="/">go back to home</Link>
		</div>
	)
}

export default Login