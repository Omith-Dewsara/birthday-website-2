import { useState } from "react";
import "./Card.css";
import { CardActionArea } from "@material-ui/core";

export default function Card({ cardNum, flipImg, flipTxt, action }) {
	const [cardFlipped, setCardFlipped] = useState(false);

	const handleClick = () => {
		const card = document.querySelector(`.${cardNum}`)
		if (card.classList.contains("jump-flip-card")) {
			card.classList.remove("jump-flip-card");
			setTimeout(() => {
				setCardFlipped(false);
			}, 500);
		} else {
			card.classList.add("jump-flip-card");
			setTimeout(() => {
				setCardFlipped(true);
				action();
			}, 500);
		}
	}

	return (
		<div onClick={handleClick} className={`card ${cardNum}`}>
			<CardActionArea className="card-action-area">
				{
					cardFlipped ? (
						<div className="card__flippedContainer">
							<div className="card__flippedContainer__top">
								<div className={`card__flippedContainer__top__circle ${cardNum}-circle`}>
									<img 
										src={flipImg}
										alt=""
										className={`card__flippedContainer__top__circle__img ${cardNum}-circle-img`}
									/>
								</div>
							</div>
							<div className="card__flippedContainer__bottom">
								<div className="card__flippedContainer__bottom__txt"> { flipTxt } </div>
							</div>
						</div>
					) : (
						<>
							<div className="card__top">
								<div className="card__top__circle">
									<img 
										src="https://cdn3d.iconscout.com/3d/premium/thumb/cake-4693336-3895650.png"
										alt=""
										className="card__top__circle__img"
									/>
								</div>
							</div>
							<div className="card__bottom">
								<div className="card__bottom__txt"> Click me </div>
							</div>
						</>
					)
				}
			</CardActionArea>
		</div>
	)
}