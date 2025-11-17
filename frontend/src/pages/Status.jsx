export default function Status({ backendStatus }) {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Backend Status:</h3>
      <p>
        {backendStatus === "ok"
          ? "🟢 Backend is running"
          : backendStatus === "offline"
          ? "🔴 Backend offline"
          : "Checking..."}
      </p>
    </div>
  );
}
