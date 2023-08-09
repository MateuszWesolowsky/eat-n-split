import { useState } from "react";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FriendsList } from "./FriendsList";
import { FormSplitBill } from "./FormSplitBill";
import { data } from "../data";

export const SplitBillApp = () => {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(data);
	const [selectedFriend, setSelectedFriend] = useState(null);

	const onSetShowAddFriend = () => {
		setShowAddFriend((show) => !show);
		setSelectedFriend(null);
	};

	const handleAddFriend = (friend) => {
		setFriends((friends) => [...friends, friend]);
		setShowAddFriend(false);
	};
	const handleSelectionFriend = (friend) => {
		// setSelectedFriend(friend);
		setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
		setShowAddFriend(false);
	};
	const handleSplitBill = (value) => {
		setFriends((friends) =>
			friends.map((friend) =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);
		setSelectedFriend(null);
	};

	return (
		<div className='app'>
			<div className='sidebar'>
				<FriendsList
					friends={friends}
					onSelection={handleSelectionFriend}
					selectedFriend={selectedFriend}
				/>
				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
				<Button onClick={onSetShowAddFriend}>
					{!showAddFriend ? "Add Friend" : "Close"}
				</Button>
			</div>
			<div>
				{selectedFriend && (
					<FormSplitBill
						selectedFriend={selectedFriend}
						onSplitBill={handleSplitBill}
					/>
				)}
			</div>
		</div>
	);
};
