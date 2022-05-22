import { useState } from "react"
import "./Index.css";
import { Button } from "@material-ui/core";
import homeImg1 from "../../assets/home-img-1.png";
import { Model } from "../exports";

export default function Home() {
	const [modelActive, setModelActive] = useState(false);

	const closeModel = () => {
		setModelActive(false);
	}

	const openModel = () => {
		setModelActive(true);
		console.log("hello")
	}

	return (
		<div className="home">
			<Model close={closeModel} active={modelActive} className="home__model" containerClasses="home__model__container">
				<div className="home__model__top">
					<img 
						src="https://media.discordapp.net/attachments/841265889683832863/977366079913463848/unknown.png?width=604&height=580"
						alt=""
						className="home__model__top__img"
					/>
				</div>
				<div className="home__model__bottom">
					<div className="home__model__bottom__title"> The title </div>
					<p className="home__model__bottom__p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit mollis massa. Nullam ex mauris, mattis nec nibh et, rhoncus dapibus erat.
					</p>
					<Button 
						onClick={closeModel} 
						variant="contained" 
						color="primary" 
						className="home__model__bottom__btn"
					> 
						Close 
					</Button>
				</div>
			</Model>
			<div className="home__left">
				<div className="home__left__title"> Happy Birthday </div>
				<p className="home__left__p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit mollis massa. Nullam ex mauris, mattis nec nibh et, rhoncus dapibus erat.
				</p>
				<Button onClick={openModel} className="home__left__btn" variant="contained" color="primary"> click me </Button>
			</div>
			<div className="home__right">
				<div className="home__right__top">
					<div className="home__right__top__imgContainer collapsing-card">
						<div className="home__right__top__imgContainer__container collapsing-card-child">
							<img 
								src={homeImg1}
								alt=""
								className="home__right__top__imgContainer__container__img collapsing-card-child-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}