import style from "./loading.module.css"
const Loading = () => {
	return (
		<div className={style.mainLoading}>
			<div className={style.loader}></div>
			<p>please wait...</p>
		</div>
	)
}

export default Loading
