import { SingleFriend } from "./SingleFriend";

export const FriendsList = ({ friends, onSelection, selectedFriend }) => {
	return (
		<ul>
			{friends.map((friend) => (
				<SingleFriend
					friend={friend}
					key={friend.id}
					onSelection={onSelection}
					selectedFriend={selectedFriend}
				/>
			))}
		</ul>
	);
};
