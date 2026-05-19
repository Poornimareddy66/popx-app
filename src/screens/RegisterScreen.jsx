import { useState } from "react";

export default function RegisterScreen({ navigate }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleCreate = () => {
    if (form.name && form.email && form.password) {
      navigate("account", { name: form.name, email: form.email });
    }
  };

  return (
    <div className="screen" style={{ paddingBottom: 48 }}>
      <h1>Create your<br />PopX account</h1>

      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
        <div className="field">
          <label className="required">Full Name</label>
          <input placeholder="Marry Doe" value={form.name} onChange={set("name")} />
        </div>

        <div className="field">
          <label className="required">Phone number</label>
          <input placeholder="Marry Doe" value={form.phone} onChange={set("phone")} />
        </div>

        <div className="field">
          <label className="required">Email address</label>
          <input type="email" placeholder="Marry Doe" value={form.email} onChange={set("email")} />
        </div>

        <div className="field">
          <label className="required">Password</label>
          <input type="password" placeholder="Marry Doe" value={form.password} onChange={set("password")} />
        </div>

        <div className="field">
          <label>Company name</label>
          <input placeholder="Marry Doe" value={form.company} onChange={set("company")} />
        </div>

        <div style={{ marginTop: 4 }}>
          <p style={{ fontSize: 14, color: "var(--dark)", marginBottom: 12 }}>
            Are you an Agency?<span style={{ color: "var(--red)" }}> *</span>
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["yes", "no"].map((opt) => (
              <label key={opt} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14, color: "var(--dark)" }}>
                <div
                  onClick={() => setForm({ ...form, isAgency: opt })}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: `2px solid ${form.isAgency === opt ? "var(--purple)" : "var(--border)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  {form.isAgency === opt && (
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--purple)" }} />
                  )}
                </div>
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        className="btn-primary"
        style={{ marginTop: 32 }}
        onClick={handleCreate}
        disabled={!form.name || !form.email || !form.password}
      >
        Create Account
      </button>

      <p
        style={{ marginTop: 16, textAlign: "center", fontSize: 14, color: "var(--gray)", cursor: "pointer" }}
        onClick={() => navigate("welcome")}
      >
        ← Back to Welcome
      </p>
    </div>
  );
}
