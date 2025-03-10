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
        title: "쇼핑몰 웹사이트",
        description: "React와 TypeScript를 사용한 반응형 쇼핑몰 웹사이트입니다.",
        technologies: ["React", "TypeScript", "Styled-Components", "Redux"],
        imageUrl: "/images/project1.jpg",
        githubUrl: "https://github.com/yourusername/shopping-mall",
        liveUrl: "https://your-shopping-mall.vercel.app",
    },
    // 추가 프로젝트 생략
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