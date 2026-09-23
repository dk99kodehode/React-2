import storestyles from "./Store.module.css";
import UnitBackground from "./CookieAssets/buildings/UnitBackground.png";

export function Upgrade({ title, image, price, units }) {
  return (
    <div
      style={{
        backgroundImage: `url(${UnitBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        height: "55px",
        paddingBottom: "20px",
        alignItems: "center",

        marginTop: "10px",

        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <img
        style={{
          objectFit: "contain",
          width: "70px",
          height: "auto",
          paddingTop: "20px",
          opacity: "0.8",
          flexShrink: 0,

          marginLeft: "0px",
        }}
        src={image}
        alt={title}
      />

      {/* TITLE + PRICE */}
      <div
        style={{
          marginLeft: "55px",
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            color: "white",
            margin: "0 0 5px 0",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "gold",
            margin: 0,
          }}
        >
          {`🍪 ${price}`}
        </p>
      </div>

      {/* COUNTER */}
      <div
        style={{
          position: "absolute",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",

          width: "150px",
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        <p
          style={{
            fontSize: "80px",
            fontFamily: "Gobits",
            margin: 0,
            color: "#9ba5b5",
          }}
        >
          {units}
        </p>
      </div>
    </div>
  );
}
