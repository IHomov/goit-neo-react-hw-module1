import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import UserProfile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <UserProfile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
