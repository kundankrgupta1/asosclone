import { Link } from "react-router-dom"
import "./accountLoginSignup.style.css"
import { useState } from "react";
const Signup = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			const res = await fetch("https://backendasos.onrender.com/users/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name,
					email,
					password
				})
			})
			const data = await res.json()
			setMessage(data.message)
			setIsLoading(false)
		} catch (error) {
			console.log(error);
			setIsLoading(false)
		}
	}

	return (
		<div className="account-singup-form">
			<p>sign up here...</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input type="text" placeholder="Firstname Lastname" required value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label>Email:</label>
					<input type="text" placeholder="email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" placeholder="********" required value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<p>{message}</p>
				<button type="submit">{isLoading ? "please wait..." : "join asos"}</button>
			</form>
			<Link to="/">go back to home</Link>
		</div>
	)
}

export default Signup