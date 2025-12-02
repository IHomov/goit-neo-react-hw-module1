
import styles from "./Profile.module.css";

function UserProfile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <h2 className={styles.name}>{username}</h2>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;
