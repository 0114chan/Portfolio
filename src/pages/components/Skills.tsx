import React from 'react';
import styles from '../../styles/Skills.module.css';

interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tools';
}

const skills: Skill[] = [
    { name: "HTML", level: 5, category: "frontend" },
    { name: "CSS", level: 4, category: "frontend" },
    // 추가 스킬 생략
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.sectionTitle}>
                <h2>Skills</h2>
                <div className={styles.underline}></div>
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