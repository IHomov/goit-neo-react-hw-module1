import "./FriendList.css";
import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="friend-item">
          <img src={avatar} alt={name} className="friend-avatar" />
          <p className="friend-name">{name}</p>
          <p className={`friend-status ${isOnline ? "online" : "offline"}`}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;