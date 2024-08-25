import clsx from "clsx";
import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends, className }) => (
  <ul className={clsx(styles.friendList, className)}>
    {friends.map(({ id, ...props }) => (
      <li
        key={id}
        className={clsx(
          styles.friendItem,
          styles[props.isOnline ? "online" : "offline"]
        )}
      >
        <FriendListItem {...props} />
      </li>
    ))}
  </ul>
);

export default FriendList;
