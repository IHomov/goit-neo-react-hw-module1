import styles from "../FriendList/FriendList.module.css";
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
export default FriendListItem;
