import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../../styles/Projects.module.css';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "얼굴 감정에 따른 할인 UI",
        description: "React와 TypeScript를 사용한 반응형 쇼핑몰 웹사이트입니다.",
        technologies: ["React", "TypeScript", "Styled-Components", "Redux"],
        imageUrl: "/images/project1.jpg",
        githubUrl: "https://github.com/0114chan/emotion_pay_toss.git",
        liveUrl: "https://emotionpaydiscount.vercel.app/",
    },
    {
        id: 2,
        title: "멍하냥 실시간 CCTV 앱",
        description: "Socket.IO를 활용한 실시간 채팅 기능을 제공하는 웹 앱입니다.",
        technologies: ["React", "Node.js", "Socket.IO", "Express"],
        imageUrl: "/images/project2.jpg",
        githubUrl: "https://github.com/yourusername/chat-app",
        liveUrl: "https://your-chat-app.vercel.app",
    },
    {
        id: 3,
        title: "3d 포토카드 생성UI",
        description: "OpenWeather API를 사용한 날씨 정보 시각화 대시보드입니다.",
        technologies: ["React", "Chart.js", "API", "CSS"],
        imageUrl: "/images/project3.jpg",
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://your-weather-dashboard.vercel.app",
    },
    {
        id: 4,
        title: "투두 리스트 관리",
        description: "로컬 스토리지를 활용한 간단한 투두 리스트 애플리케이션입니다.",
        technologies: ["React", "JavaScript", "Tailwind CSS"],
        imageUrl: "/images/project4.jpg",
        githubUrl: "https://github.com/yourusername/todo-list",
    },
    {
        id: 5,
        title: "포트폴리오 웹사이트",
        description: "개인 프로젝트와 기술 스택을 보여주는 포트폴리오 사이트입니다.",
        technologies: ["Next.js", "TypeScript", "Framer Motion"],
        imageUrl: "/images/project5.jpg",
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://your-portfolio.vercel.app",
    },
    {
        id: 6,
        title: "sk 2차",
        description: "사용자가 게시물을 작성하고 관리할 수 있는 블로그입니다.",
        technologies: ["React", "Firebase", "Material-UI"],
        imageUrl: "/images/project6.jpg",
        githubUrl: "https://github.com/yourusername/blog-platform",
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
                                    <FaGithub /> Code
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;