import { Button } from "./Button";

export const SingleFriend = ({ friend, onSelection, selectedFriend }) => {
	const isSelected = friend.id === selectedFriend?.id;
	return (
		<li className={isSelected ? "selected" : ""}>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{friend.balance < 0 && (
				<p className='red'>
					You owe {friend.name} {Math.abs(friend.balance)}$
				</p>
			)}
			{friend.balance > 0 && (
				<p className='green'>
					Your friend {friend.name} owe {Math.abs(friend.balance)}$
				</p>
			)}
			{friend.balance === 0 && (
				<p>You and your friend {friend.name} are even</p>
			)}
			<Button onClick={() => onSelection(friend)}>
				{isSelected ? "Close" : "Select"}
			</Button>
		</li>
	);
};
