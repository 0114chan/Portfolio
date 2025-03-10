// src/components/CardFront.tsx
const CardFront = () => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            overflow: "hidden",
            background: "linear-gradient(145deg, #111111 0%, #000000 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            border: "1px solid rgba(255, 215, 0, 0.3)"
        }}>
            {/* Gold corner accents */}
            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "4rem",
                height: "4rem",
                background: "linear-gradient(to bottom right, #f1c232, #daa520)",
                transform: "rotate(-45deg) translate(-2rem, -2rem)",
                boxShadow: "0 0 10px rgba(241, 194, 50, 0.3)",
                opacity: "0.8"
            }}></div>
            <div style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "4rem",
                height: "4rem",
                background: "linear-gradient(to top left, #f1c232, #daa520)",
                transform: "rotate(45deg) translate(2rem, 2rem)",
                boxShadow: "0 0 10px rgba(241, 194, 50, 0.3)",
                opacity: "0.8"
            }}></div>

            {/* Card shine effect */}
            <div style={{
                position: "absolute",
                top: "0",
                left: "-100%",
                width: "300%",
                height: "100%",
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                animation: "shine 3s infinite",
                animationTimingFunction: "ease-in-out"
            }}></div>

            {/* Logo */}
            <div style={{
                color: "#f1c232",
                fontSize: "4.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                textShadow: "0 0 10px rgba(218, 165, 32, 0.6)",
                fontFamily: "'Arial', sans-serif",
                letterSpacing: "-2px"
            }}>Profile Card</div>

            <div style={{
                color: "#f1c232",
                fontSize: "0.9rem",
                letterSpacing: "0.2em",
                fontWeight: "600",
                textTransform: "uppercase",
                textShadow: "0 0 5px rgba(218, 165, 32, 0.3)"
            }}>Park chanil</div>

            <div style={{
                color: "#e9c46a",
                fontSize: "0.75rem",
                marginTop: "0.4rem",
                fontStyle: "italic",
                letterSpacing: "0.1em",
                opacity: "0.9"
            }}>Click the card</div>

            {/* Small decorative line */}
            <div style={{
                width: "40px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #daa520, transparent)",
                marginTop: "1rem"
            }}></div>
        </div>
    );
};

export default CardFront;