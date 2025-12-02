import styles from  "../FriendList/FriendList.module.css";
import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.friendItem}>
         
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;