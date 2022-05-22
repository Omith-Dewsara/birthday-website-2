import { useEffect } from "react";
import "./Index.css";

export default function Model({ children, active, className, containerClasses, close }) {
	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (e.target.classList) {
				if (e.target.classList.contains(className)) {
					close();
				}
			}
		})
	}, [])

	return (
		<div className={`model ${active ? "active" : ""} ${className}`}>
			<div className={`model-container ${active ? "active" : ""} ${containerClasses}`}>
				{ children }
			</div>
		</div>
	)
}