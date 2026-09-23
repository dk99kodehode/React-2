export default function XpBar() {
  return (
    <div
      style={{
        width: "95%",
        height: "12px",

        position: "relative",
        margin: "10px auto 4px auto",
        backgroundColor: "grey",
        height: "12px",

        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          position: "absolute",
          inset: 0,
          margin: 0,
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        0 / 1000
      </p>
    </div>
  );
}
