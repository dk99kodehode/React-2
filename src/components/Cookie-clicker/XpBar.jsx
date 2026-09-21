export default function XpBar() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "10px",
        marginTop: "5px",
        width: "95%",
        marginLeft: "10px",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "4px",
      }}
    >
      <div
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, grey 0, grey 48px, black 48px, black 50px)",
        }}
      >
        0 / 1000
      </div>
    </div>
  );
}
