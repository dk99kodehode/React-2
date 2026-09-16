import storestyles from "./Store.module.css";

export function Upgrade({ title, image, price }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          backgroundColor: "#050505",
          display: "flex",
          height: "100px",
          flexDirection: "row",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <img
          style={{ paddingLeft: "24px", objectFit: "contain" }}
          src={image}
          alt={title}
        />

        <div>
          <h3 style={{ fontSize: "24px", color: "white" }}>??????</h3>
          <p style={{ color: "gold" }}>{price}</p>
        </div>
      </div>
    </section>
  );
}
