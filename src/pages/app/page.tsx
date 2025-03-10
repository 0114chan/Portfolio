// src/app/page.tsx
"use client";

import BusinessCard from '../components/BusinessCard';

export default function Home() {
    return (
        <main style={{
            padding: 0,
            margin: 0,
            overflow: "hidden",
            background: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
            minHeight: "100vh",
            width: "100%"
        }}>
            <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          25%, 75% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #1a1a1a;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
            <BusinessCard />
        </main>
    );
}