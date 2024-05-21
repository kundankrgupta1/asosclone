import { useState } from "react"
import style from "./style.module.css"
const AddProduct = () => {

	const [formData, setFormData] = useState({
		
	})
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div className={style.addProduct}>
			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input type="text" placeholder="title" />
				<label>Price:</label>
				<input type="text" placeholder="price" />
				<label>Color</label>
				<input type="text" placeholder="color of product" />
				<label>Image Link (seperated by comma):</label>
				<input type="text" placeholder="add multiple product images" />
				<label>Descriptions (seperated by comma): </label>
				<input type="text" placeholder="add descriptions of product" />
				<label>Category</label>
				<input type="text" placeholder="write product category" />

				{/* sumbit button */}
				<input type="submit" value="Add Product" />
			</form>
		</div>
	)
}

export default AddProduct