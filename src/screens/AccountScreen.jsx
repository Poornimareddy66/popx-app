export default function AccountScreen({ navigate, userData }) {
  const name = userData?.name || "Marry Doe";
  const email = userData?.email || "Marry@Gmail.Com";

  return (
    <div className="screen" style={{ padding: 0 }}>
      {/* Header */}
      <div style={{ padding: "24px 20px 16px", borderBottom: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: 20, fontWeight: 500, color: "var(--dark)", marginBottom: 20 }}>
          Account Settings
        </h2>

        {/* Profile row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            {/* Avatar placeholder */}
            <div style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #d4b8f0, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 600,
              color: "white",
              overflow: "hidden",
            }}>
              {name.charAt(0)}
            </div>
            {/* Camera badge */}
            <div style={{
              position: "absolute",
              bottom: 0,
              right: -2,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "var(--purple)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.93s-.03-.63-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.07.64-.07.94s.03.63.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z"/>
              </svg>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 15, fontWeight: 500, color: "var(--dark)" }}>{name}</p>
            <p style={{ fontSize: 14, color: "var(--gray)", marginTop: 2 }}>{email}</p>
          </div>
        </div>
      </div>

      {/* Bio section */}
      <div style={{ padding: "20px", borderBottom: "1px dashed var(--border)" }}>
        <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.6 }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Back link */}
      <div style={{ padding: "24px 20px" }}>
        <p
          style={{ textAlign: "center", fontSize: 14, color: "var(--purple)", cursor: "pointer", fontWeight: 500 }}
          onClick={() => navigate("welcome")}
        >
          ← Back to Welcome
        </p>
      </div>
    </div>
  );
}
