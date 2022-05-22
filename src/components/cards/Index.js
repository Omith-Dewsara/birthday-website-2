import { useEffect, useState } from "react";
import "./Index.css";
import { Card } from "../exports";
import happyBirthdaySong from "../../assets/birthday-music.mp3";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { CardActionArea } from "@material-ui/core";
import CardModel from "./CardModel";

export default function Cards() {
	const [musicPaused, setMusicPaused] = useState(false);
	const [musicStarted, setMusicStarted] = useState(false);

	const [modelActive, setModelActive] = useState(false);

	useEffect(() => {
		const cards = document.querySelectorAll(".card");

		const options = {
			root: null,
			threshold: 0,
			rootMargin: "0px 0px -300px 0px"
		}

		const observer = new IntersectionObserver(function(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in");
					observer.unobserve(entry.target);
				}
			})
		}, options);

		cards.forEach((card) => {
			observer.observe(card);
		});
	}, []);

	const playMusic = () => {
		const happyBirthdaySong = document.querySelector(".cards__happyBirthdaySong");
		if (happyBirthdaySong.duration > 0 && !happyBirthdaySong.paused) {

		} else {
			happyBirthdaySong.play();
			setMusicStarted(true);
		}
	}

	const stopPlayingMusic = () => {
		const happyBirthdaySong = document.querySelector(".cards__happyBirthdaySong");
		if (happyBirthdaySong.duration > 0 && !happyBirthdaySong.paused) {
 			happyBirthdaySong.pause();
 			setMusicPaused(true);
		}	else {
 			happyBirthdaySong.play();
 			setMusicPaused(false);
		}
	}

	const openModel = () => {
		setTimeout(() => {
			setModelActive(true);
		}, 200)
	}

	const closeModel = () => {
		setModelActive(false);
	}

	return (
		<div className="cards">
			<CardModel 
				active={modelActive}
				close={closeModel}
				className="cards__model"
				containerClasses="cardsModel__container"
			/>
			<audio className="cards__happyBirthdaySong" style={{display: "none"}}>
				<source src="horse.ogg" type="audio/ogg" />
				<source src={happyBirthdaySong} type="audio/mpeg" />
			</audio>
			<div className={`cards__audioIconContainer ${musicStarted ? "fade-in" : ""}`} onClick={stopPlayingMusic}>
				<CardActionArea className="cards__audioIconContainer__cardActionArea">
					{
						!musicPaused ? <GiSpeaker /> : <GiSpeakerOff />
					}
				</CardActionArea>
			</div>
			<div className="cards__container">
				<Card 
					cardNum="card-1"
					flipImg="https://cdn3d.iconscout.com/3d/premium/thumb/music-app-4974863-4145717.png"
					flipTxt="Music"
					action={playMusic}
				/>
				<Card 
					cardNum="card-2"
					flipImg="https://cdn3d.iconscout.com/3d/premium/thumb/party-popper-5233377-4379653.png"
					flipTxt="?????"
					action={openModel}
				/>
				<Card 
					cardNum="card-3"
					flipImg="https://cdn3d.iconscout.com/3d/premium/thumb/arrow-down-2891367-2409776@0.png"
					flipTxt="Keep scrolling"
					action={() => {}}
				/>
			</div>				
		</div>
	)
}