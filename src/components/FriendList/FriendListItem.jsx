function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="friend-list-item">
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={isOnline ? "status-online" : "status-offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
export default FriendListItem;
