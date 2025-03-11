import React from 'react';
import styles from '../../styles/AboutMe.module.css';

interface Education {
    institution: string;
    degree1: string;
    degree2: string;
    period: string;
    logo: string; // Added optional logo field
}

const education: Education[] = [
    {
        institution: "숭실대학교",
        degree1: "AI 융합학부 공학사",
        degree2: "빅데이터 융합전공",
        period: "2019.03 - 2025.02",
        logo: "/images/soongsil.jpg" // Added logo
    },
    {
        institution: "부트캠프",
        degree1: "SK 쉴더스 루키즈 지능형 애플리케이션 개발 과정 수료",
        degree2: "프로젝트 3회 참여",
        period: "2024.06 - 2024.12",
        logo: "/images/sk.png" // Added logo
    },
    {
        institution: "자기 개발",
        degree1: "다양한 주제의 혼자만의 시획 및 개발 ",
        degree2: "사이드 프로젝트 3회",
        period: "2025.01 - 2025.03",
        logo: "/images/side.png" // Added logo
    },
];

const AboutMe: React.FC = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.sectionTitle}>
                <h2>About Me</h2>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.aboutImage}>
                    <img src="/images/me.jpg" alt="박찬일 프로필"/>
                    <p>박찬일</p>
                </div>

                <div className={styles.aboutText}>
                    <p>
                        안녕하세요! 사용자 중심의 웹 경험을 만드는 것에 열정을 가진 프론트엔드 개발 및 기획자가 되고 싶은 박찬일 입니다.
                    </p>
                    <p>
                        HTML, CSS, JavaScript를 기반으로 React, Next, TypeScript, tailwind 등의 기술 스택을 활용하여 반응형 웹 애플리케이션을 개발하고 있습니다.
                    </p>
                    <div className={styles.education}>
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className={styles.educationItem}>
                                <div className={styles.educationLogo}>
                                     <img src= {edu.logo} alt={`${edu.institution} 로고`} />
                                </div>
                                <div className={styles.educationDetails}>
                                    <p className={styles.period}>{edu.period}</p>
                                    <h4>{edu.institution}</h4>
                                    <p>{edu.degree1}</p>
                                    <p>{edu.degree2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="/parkchanil1.pdf" className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">
                        이력서 다운로드
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;