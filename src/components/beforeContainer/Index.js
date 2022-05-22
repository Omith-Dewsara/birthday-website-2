import { useState, useEffect } from "react";
import "./Index.css";
import bdayNum1 from "../../assets/bady-num-1.png";
import bdayNum2 from "../../assets/bday-num-2.png";
import bdayNum3 from "../../assets/bday-num-3.png";

export default function BeforeContainer() {
	const [secondImg, setSecondImg] = useState(bdayNum2);
	const [secondImgFlip, setSecondImgFlip] = useState(false);
	const [secondImgTurn, setSecondImgTurn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setSecondImgFlip(true)
		}, 3000);
		setTimeout(() => {
			setSecondImgTurn(true)
			setSecondImg(bdayNum3);
		}, 3600);
	}, [])

	return (
		<div className="beforeContainer">
			<div className="beforeContainer__blackCover" />
			<div className="beforeContainer__left">
				<img 
					src="https://cdn3d.iconscout.com/3d/premium/thumb/balloons-5199552-4347714.png"
					alt=""
					className="beforeContainer__left__img before-container-balloon-img"
				/>
			</div>
			<div className="beforeContainer__container">
				<div className="beforeContainer__container__images">
					<div className="beforeContainer__container__images__imgContainer img-1">
						<img 
							src={bdayNum1}
							alt=""
							className="beforeContainer__container__images__imgContainer__img"
						/>
					</div>
					<div className={`beforeContainer__container__images__imgContainer img-2 ${secondImgFlip ? "flip" : ""}`}>
						<img 
							src={secondImg}
							alt=""
							className={`beforeContainer__container__images__imgContainer__img ${secondImgTurn ? "turn" : ""}`}
						/>
					</div>
				</div>
				<div className="beforeContainer__container__underlineContainer"> 
					<div className="beforeContainer__container__underlineContainer__underline" />
				</div>
				<div className="beforeContainer__container__wallImg">
					<img 
						src="https://cdn3d.iconscout.com/3d/premium/thumb/balloons-5199551-4347713.png"
						alt=""
						className="beforeContainer__container__img before-container-balloon-img"
					/>
				</div>
			</div>
			<div className="beforeContainer__right">
				<img 
					src="https://cdn3d.iconscout.com/3d/premium/thumb/balloons-5199553-4347715.png"
					alt=""
					className="beforeContainer__right__img before-container-balloon-img img-2"
				/>
			</div>
		</div>
	)
}