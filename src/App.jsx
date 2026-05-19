import { useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AccountScreen from "./screens/AccountScreen";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [userData, setUserData] = useState(null);

  const navigate = (to, data) => {
    if (data) setUserData(data);
    setScreen(to);
  };

  return (
    <div className="app-shell">
      {screen === "welcome" && <WelcomeScreen navigate={navigate} />}
      {screen === "login" && <LoginScreen navigate={navigate} />}
      {screen === "register" && <RegisterScreen navigate={navigate} />}
      {screen === "account" && <AccountScreen navigate={navigate} userData={userData} />}
    </div>
  );
}
