import React from 'react';
import { useRouter } from 'next/router';

const CardBack: React.FC = () => {
    const router = useRouter();

    // 포트폴리오 페이지로 이동하는 함수
    const goToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push('/Home');
    };

    return (
        <div style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            overflow: "hidden",
            background: "linear-gradient(145deg, #111111 0%, #000000 100%)",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
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
                animationTimingFunction: "ease-in-out",
                zIndex: "0"
            }}></div>

            {/* Profile Picture with gold border */}
            <div style={{
                position: "absolute",
                top: "3rem",
                right: "1.5rem",
                zIndex: "2",
                padding: "3px",
                background: "linear-gradient(45deg, #f1c232, #daa520)",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(241, 194, 50, 0.5)"
            }}>
                <img
                    src="/images/me.jpg"
                    alt="Profile"
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "8px",
                        objectFit: "cover"
                    }}
                />
            </div>

            {/* Header */}
            <div style={{
                marginBottom: "1.25rem",
                position: "relative",
                zIndex: "1"
            }}>
                <h2 style={{
                    color: "#f1c232",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textShadow: "0 0 5px rgba(218, 165, 32, 0.3)",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem"
                }}>PARK CHANIL</h2>
                <p style={{
                    color: "#e9c46a",
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.1em",
                    fontWeight: "500"
                }}>FRONTEND DEVELOPER</p>
                <div style={{
                    width: "40px",
                    height: "2px",
                    background: "linear-gradient(90deg, #daa520, transparent)",
                    marginTop: "0.25rem",
                    marginBottom: "0.5rem"
                }}></div>
            </div>

            {/* Phone */}
            <div style={{ position: "relative", zIndex: "1" }}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ color: "#e9c46a", fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                            M: 010.5874.3474
                        </p>
                    </div>
                </div>
            </div>

            {/* Website */}
            <div style={{ position: "relative", zIndex: "1" }}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ color: "#e9c46a", fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                            E: 0114chan@gmail.com
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "#e9c46a" }}>
                            G: <a href="https://github.com/0114chan" target="_blank" rel="noopener noreferrer" style={{ color: "#e9c46a" }}>
                            https://github.com/0114chan
                        </a>
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "#e9c46a" }}>
                            P:{' '}
                            <a
                                href="#"
                                onClick={goToPortfolio}
                                style={{ color: "#e9c46a", textDecoration: "underline" }}
                            >
                                PORTFOLIO
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div style={{ marginBottom: "1rem", position: "relative", zIndex: "1" }}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ color: "#e9c46a", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                            서울시 중구 만리재로 175
                        </p>
                        <p style={{ color: "#e9c46a", fontSize: "0.875rem" }}>
                            서울역센트럴자이 109동 1001호
                        </p>
                    </div>
                </div>
            </div>

            {/* Logo */}
            <div style={{ marginTop: "auto", textAlign: "center", position: "relative", zIndex: "1" }}></div>
        </div>
    );
};

export default CardBack;