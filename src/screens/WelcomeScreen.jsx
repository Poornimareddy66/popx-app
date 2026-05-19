export default function WelcomeScreen({ navigate }) {
  return (
    <div className="screen" style={{ justifyContent: "flex-end" }}>
      <h1>Welcome to PopX</h1>
      <p className="subtitle" style={{ marginBottom: 40 }}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <button className="btn-primary" onClick={() => navigate("register")}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate("login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}