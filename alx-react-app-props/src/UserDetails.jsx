import { useContext } from "react";
import { userContest } from "./components/UserContext";

function UserDetails() {
    const userData = userContest(userContest);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;