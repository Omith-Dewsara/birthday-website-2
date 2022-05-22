import "./Index.css";

export default function Model({ children, active, className, containerClasses }) {
	return (
		<div className={`model ${active ? "active" : ""} ${className}`}>
			<div className={`model-container ${containerClasses}`}>
				{ children }
			</div>
		</div>
	)
}