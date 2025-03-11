import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import styles from '../../styles/Projects.module.css';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl?: string;
    contentUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "얼굴 감정에 따른 가격 할인 UI",
        description: "React와 TypeScript를 사용한 반응형 쇼핑몰 웹사이트입니다.",
        technologies: ["React", "TypeScript", "Styled-Components", "face-api-js"],
        imageUrl: "/images/tpay.png",
        githubUrl: "https://github.com/0114chan/emotion_pay_toss.git",
        liveUrl: "https://emotionpaydiscount.vercel.app/",
        contentUrl: "https://hill-anise-068.notion.site/EmotionPay-1b330622a6a98026930eec7845c1e832?pvs=4",
    },
    {
        id: 2,
        title: "AI 면접 비서",
        description: "Socket.IO를 활용한 실시간 채팅 기능을 제공하는 웹 앱입니다.",
        technologies: ["React", "TypeScript", "REST API", "Hooks", "Lucide-React"],
        imageUrl: "/images/sk1.png",
        githubUrl: "https://github.com/Rookies-mini3-team5/FrontEnd",
        contentUrl: "https://hill-anise-068.notion.site/AI-1b330622a6a98045a01ed8f00610184a?pvs=4",
    },
    {
        id: 3,
        title: "3d 포토카드 생성UI",
        description: "OpenWeather API를 사용한 날씨 정보 시각화 대시보드입니다.",
        technologies: ["React", "TypeScript,", "Next.js", "Three.js","@react-three/fiber","@react-three/drei"],
        imageUrl: "/images/photocard.png",
        githubUrl: "https://github.com/0114chan/potocard1",
        liveUrl: "https://buddlering.vercel.app/",
        contentUrl: "https://hill-anise-068.notion.site/3D-PhotoCard-3D-1b330622a6a9809fb74ed86a11924854?pvs=4",
    },
    {
        id: 4,
        title: "투두 리스트 관리",
        description: "로컬 스토리지를 활용한 간단한 투두 리스트 애플리케이션입니다.",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST API"],
        imageUrl: "/images/todo.png",
        githubUrl: "https://github.com/0114chan/todoapp",
        liveUrl: "https://todoapp-two-ashy.vercel.app/",
        contentUrl: "https://hill-anise-068.notion.site/Do-it-Todo-App-1b330622a6a98019a46bdf38437e3f73?pvs=4",
    },
    {
        id: 5,
        title: "포트폴리오 웹사이트",
        description: "개인 프로젝트와 기술 스택을 보여주는 포트폴리오 사이트입니다.",
        technologies: ["Next.js", "TypeScript", "Framer Motion", "CSS Transition"],
        imageUrl: "/images/portfolio.png",
        githubUrl: "https://github.com/0114chan/ownportfolio",
        liveUrl: "https://ownportfolioparkchanil.vercel.app/",
        contentUrl: "https://hill-anise-068.notion.site/1b330622a6a980d98f67e299943a0a7a?pvs=4",
    },
    {
        id: 6,
        title: "멍하냥 실시간 CCTV 앱",
        description: "반려인들의 편안한 외출과 내 가족의 안전을 책임지는 반려동물 홈캠 서비스, 멍하냥입니다..",
        technologies: ["Kotlin", "Figma", "Andriod-studio", "Material Design"],
        imageUrl: "/images/sk3.png",
        githubUrl: "https://github.com/IoTeaTime",
        contentUrl: "https://www.notion.so/EmotionPay-1b330622a6a98026930eec7845c1e832?pvs=4",
    },
    {
        id: 7,
        title: "개인 맞춤형 취업 준비 플랫폼 개발",
        description: "구직자들이 취업 준비를 효과적으로 할 수 있도록 돕는 채팅 기반 플랫폼을",
        technologies: ["JavaScript", "Figma", "CSS", "REST API","Socket.IO "],
        imageUrl: "/images/sk2.png",
        githubUrl: "https://github.com/kimmatches/CareerConnect-front",
        contentUrl: "https://hill-anise-068.notion.site/1b330622a6a98005ac16ec4c7ab1a661?pvs=4",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.sectionTitle}>
                <h2>Projects</h2>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className={styles.projectCard}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className={styles.projectImage}>
                            <img src={project.imageUrl} alt={project.title} />
                        </div>
                        <div className={styles.projectInfo}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className={styles.techTag}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.projectLinks}>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub/> Code
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt/> Live Demo
                                    </a>
                                )}
                                <a href={project.contentUrl} target="_blank" rel="noopener noreferrer">
                                    <FaBook/> Notion
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;