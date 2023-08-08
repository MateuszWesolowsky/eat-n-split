import { useState } from "react";
import { Button } from "./Button";

export const FormAddFriend = ({ onAddFriend }) => {
	const [name, setName] = useState("");
	const [photo, setImage] = useState("https://i.pravatar.cc/48");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !photo) return;

		const id = crypto.randomUUID();
		const newFriend = {
			name,
			image: `${photo}?=${id}`,
			id,
			balance: 0,
		};
		onAddFriend(newFriend);
		setImage("https://i.pravatar.cc/48");
		setName("");
	};
	return (
		<form className='form-add-friend' onSubmit={handleSubmit}>
			<label>🧍‍♂️Friend name</label>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}></input>

			<label>🖼Image URL</label>
			<input
				type='text'
				value={photo}
				onChange={(e) => setImage(e.target.value)}
			/>
			<Button>Add</Button>
		</form>
	);
};
