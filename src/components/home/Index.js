import "./Index.css";
import { Button } from "@material-ui/core";
import homeImg1 from "../../assets/home-img-1.png";

export default function Home() {
	return (
		<div className="home">
			<div className="home__left">
				<div className="home__left__title"> Happy Birthday </div>
				<p className="home__left__p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit mollis massa. Nullam ex mauris, mattis nec nibh et, rhoncus dapibus erat.
				</p>
				<Button className="home__left__btn" variant="contained" color="primary"> click me </Button>
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