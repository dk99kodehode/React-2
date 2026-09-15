import storestyles from "./Store.module.css";

export function Upgrade({ title, image, price }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          height: "90px",
          flexDirection: "row",
          gap: "100px",
          alignItems: "center",
        }}
      >
        <div>
          <img style={{ paddingLeft: "24px" }} src={image} alt={title} />
        </div>
        <div>
          <h3 style={{ fontSize: "24px" }}>??????</h3>
          <p style={{ color: "gold" }}>{price}</p>
        </div>
      </div>
    </section>
  );
}
