import storestyles from "./Store.module.css";

export function Upgrade({ title, image, price }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          backgroundColor: "#6f6a6a",
          display: "flex",
          height: "70px",
          flexDirection: "row",
          gap: "40px",
          alignItems: "center",
          marginBottom: "3px",
          marginTop: "10px",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            width: "70px",
            overflow: "hidden",
            height: "auto",
            opacity: "0.6",
          }}
          src={image}
          alt={title}
        />

        <div
          style={{
            margin: "0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: "24px", color: "white", marginBottom: "5px" }}>
            {title}
          </h3>
          <p style={{ color: "gold", marginTop: "0" }}>{price}</p>
        </div>

        <div style={{ marginLeft: "auto", marginRight: "30px" }}>
          <p
            style={{
              fontSize: "80px",
              fontFamily: "Gobits",
              margin: 0,
              color: "#9ba5b5",
            }}
          >
            0
          </p>
        </div>
      </div>
    </section>
  );
}
