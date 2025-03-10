import React from 'react';
import styles from '../../styles/AboutMe.module.css';

interface Education {
    institution: string;
    degree: string;
    period: string;
}

const education: Education[] = [
    { institution: "OO대학교", degree: "컴퓨터공학 학사", period: "2018 - 2022" },
    { institution: "프론트엔드 개발 부트캠프", degree: "웹 개발 과정 수료", period: "2022.07 - 2022.12" },
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
                    <img src="/images/profile.jpg" alt="홍길동 프로필" />
                </div>
                <div className={styles.aboutText}>
                    <p>
                        안녕하세요! 사용자 중심의 웹 경험을 만드는 것에 열정을 가진 프론트엔드 개발자 홍길동입니다.
                    </p>
                    <p>
                        HTML, CSS, JavaScript를 기반으로 React, TypeScript 등의 기술 스택을 활용하여 반응형 웹 애플리케이션을 개발하고 있습니다.
                    </p>
                    <div className={styles.education}>
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className={styles.educationItem}>
                                <h4>{edu.institution}</h4>
                                <p>{edu.degree}</p>
                                <p className={styles.period}>{edu.period}</p>
                            </div>
                        ))}
                    </div>
                    <a href="/resume.pdf" className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">
                        이력서 다운로드
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;