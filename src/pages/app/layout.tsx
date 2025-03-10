// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '명함 디자인 | Business Card',
    description: '인터랙티브 플립 비즈니스 카드 | Interactive flipping business card',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body className={inter.className}>{children}</body>
        </html>
    );
}