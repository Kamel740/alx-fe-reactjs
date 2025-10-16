import ProfilePage from "./ProfilePage";
import { userContest } from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <userContest.Provider value={userData}>
      <ProfilePage userData={userData} />
    </userContest.Provider>
  );
}

export default App;
