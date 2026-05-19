import { useState } from "react";

export default function LoginScreen({ navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigate("account", { name: "Marry Doe", email });
    }
  };

  return (
    <div className="screen">
      <h1>Signin to your<br />PopX account</h1>
      <p className="subtitle" style={{ marginBottom: 32 }}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <div className="field">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="btn-primary"
        style={{ marginTop: 8 }}
        onClick={handleLogin}
        disabled={!email || !password}
      >
        Login
      </button>

      <p
        style={{ marginTop: 20, textAlign: "center", fontSize: 14, color: "var(--gray)", cursor: "pointer" }}
        onClick={() => navigate("welcome")}
      >
        ← Back to Welcome
      </p>
    </div>
  );
}
