import React from 'react';
import styles from '../../styles/Skills.module.css';

interface Skill {
    name: string;
    level: number; // 1~5 레벨로 가정 (5가 최고)
    category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
    // Frontend Skills
    { name: "HTML", level: 3, category: "frontend" },
    { name: "CSS", level: 3, category: "frontend" },
    { name: "JavaScript", level: 3, category: "frontend" },
    { name: "React", level: 3.5, category: "frontend" },
    { name: "Next.js", level: 3.5, category: "frontend" },
    { name: "TypeScript", level: 3.5, category: "frontend" },
    { name: "Redux", level: 1, category: "frontend" },
    { name: "Tailwind CSS", level: 3, category: "frontend" },
    { name: "Sass", level: 2, category: "frontend" },

    // Backend Skills (프론트엔드 개발자에게 유용한 수준)
    { name: "Node.js", level: 2, category: "backend" },
    { name: "Express.js", level: 1.5, category: "backend" },
    { name: "REST API", level: 2.5, category: "backend" },
    { name: "MongoDB", level: 1, category: "backend" },
    { name: "SQL", level: 2.5, category: "backend" },

    // Tools
    { name: "Git", level: 3.5, category: "tools" },
    { name: "Webpack", level: 2, category: "tools" },
    { name: "Docker", level: 1, category: "tools" },
    { name: "Figma", level: 3, category: "tools" },
    { name: "IntelliJ IDEA", level: 4, category: "tools" },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.sectionTitle}>
                <h2>Skills</h2>
                <div className={styles.underline}></div>
                <h3>게이지를 열심히 채워나가겠습니다.</h3>
            </div>
            <div className={styles.skillsCategories}>
                {['frontend', 'backend', 'tools'].map((category) => (
                    <div key={category} className={styles.skillsCategory}>
                        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        <div className={styles.skillsList}>
                            {skills
                                .filter((skill) => skill.category === category)
                                .map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <div className={styles.skillName}>{skill.name}</div>
                                        <div className={styles.skillBarContainer}>
                                            <div
                                                className={styles.skillBar}
                                                style={{ width: `${skill.level * 20}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;