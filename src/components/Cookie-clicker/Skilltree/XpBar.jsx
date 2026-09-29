export default function XpBar({ xp }) {
  const levelRequirement = 1000;
  const percentXp = Math.min((xp / levelRequirement) * 100, 100);

  return (
    <div
      style={{
        width: "60%",
        height: "12px",
        position: "relative",
        margin: "10px auto 4px auto",
        backgroundColor: "grey",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentXp}%`,
          height: "100%",
          backgroundColor: "#114f5d",
        }}
      />

      <p
        style={{
          position: "absolute",
          color: "white",
          inset: 0,
          margin: 0,
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        {xp} / {levelRequirement}
      </p>
    </div>
  );
}
