// src/components/BusinessCard.tsx
"use client";

import { useState, useEffect } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

const BusinessCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setIsFlipped(!isFlipped);
        }
    };

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 10); // Animation duration + small buffer
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
            padding: "20px"
        }}>
            <div
                style={{
                    position: "relative",
                    width: "640px",
                    height: "400px",
                    cursor: "pointer",
                    perspective: "2000px",
                    transition: "all 0.3s ease",
                    transform: `scale(${isAnimating ? 0.96 : 1})`,
                    filter: `drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))`
                }}
                onClick={handleFlip}
                onMouseDown={() => setIsAnimating(true)}
                onMouseUp={() => setTimeout(() => setIsAnimating(false), 300)}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        transition: "transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
                        transformStyle: "preserve-3d",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            display: isFlipped ? "none" : "block"
                        }}
                    >
                        <CardFront />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            display: isFlipped ? "block" : "none"
                        }}
                    >
                        <CardBack />
                    </div>
                </div>

                {/* Card edge effect */}
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "4px",
                    bottom: "-4px",
                    left: "0",
                    background: "linear-gradient(90deg, #daa520 0%, #f1c232 50%, #daa520 100%)",
                    borderRadius: "0 0 4px 4px",
                    opacity: "0.7",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
                    zIndex: "-1"
                }}></div>

                {/* Click instruction */}
                <div style={{
                    position: "absolute",
                    bottom: "-40px",
                    left: "0",
                    width: "100%",
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "14px",
                    fontStyle: "italic"
                }}>
                    저의 포토폴리오를 보러 와 주세요.
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;