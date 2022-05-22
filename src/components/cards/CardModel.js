import { useState } from "react";
import "./CardModel.css";
import { Model } from "../exports";
import { TextField, Button } from "@material-ui/core";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function CardModel({ active, className, containerClasses, close }) {
	const [input, setInput] = useState("");

	const closeModel = () => {
		close();
	}

	const sendMessage = () => {
		addDoc(collection(db, "message"), {
			message: input,
			timestamp: serverTimestamp()
		})
	}

	return (
		<Model active={active} className={className} containerClasses={containerClasses} close={close}>
			<div className="cardsModel__container__top">
				<img 
					src="https://data.whicdn.com/images/353070396/original.jpg"
					alt=""
					className="cardsModel__container__top__img"
				/>
			</div>
			<div className="cardsModel__container__bottom">
				<div className="cardsModel__container__bottom__title"> How are you on this special day? </div>
				<p className="cardsModel__container__bottom__p">
					Hope you're having the best day in your life so far. Today is your speical day. Maybe you can share how you feel in this speical day with me. I'd love to hear from you.
				</p>
				<div className="cardsModel__container__bottom__textField">
					<TextField 
						variant="outlined"
						label="type something (optional)"
						inputProps={{ style: { color: "#000" } }}
						fullWidth
						multiline
						rows={5}
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
				</div>
				<div className="cardsModel__container__bottom__buttons">
					<Button onClick={closeModel} className="cardsModel__container__bottom__buttons__btn btn-1" variant="contained" color="secondary"> Close </Button>
					<Button className="cardsModel__container__bottom__buttons__btn btn-2" variant="contained" color="primary"> send </Button>
				</div>
			</div>
		</Model>
	)
}