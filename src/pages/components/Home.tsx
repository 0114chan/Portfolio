import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Home.module.css';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 100, onComplete = () => {} }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            onComplete();
        }
    }, [currentIndex, delay, text, onComplete]);

    return <>{displayText}</>;
};

const Home: React.FC = () => {
    const [animationState, setAnimationState] = useState({
        title: false,
        subtitle: false,
        description: false
    });

    return (
        <section id="home" className={styles.homeSection}>
            <motion.div
                className={styles.heroContent}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
                <h1>
                    {animationState.title ? (
                        "안녕하세요, "
                    ) : (
                        <TypewriterText
                            text="안녕하세요, "
                            delay={100}
                            onComplete={() => setAnimationState(prev => ({...prev, title: true}))}
                        />
                    )}
                    <span className={styles.highlight}>박찬일</span>
                    {animationState.title ? "입니다" : <TypewriterText text="입니다" delay={100}/>}
                </h1>

                <h2 className={styles.multilineText}>
                    {animationState.title ? (
                        <TypewriterText
                            text="프론트엔드 신입 개발자가 되기 위해 만든 포토폴리오 입니다. 적극적으로 봐주시면 감사하겠습니다."
                            delay={50}
                            onComplete={() => setAnimationState(prev => ({...prev, subtitle: true, description: true}))}
                        />
                    ) : ""}
                </h2>

                <motion.div
                    className={styles.ctaButtons}
                    initial={{opacity: 0}}
                    animate={{opacity: animationState.description ? 1 : 0}}
                    transition={{duration: 0.5}}
                >
                    <a href="/projects" className={styles.primaryBtn}>Projects</a>
                    <a href="/contact" className={styles.secondaryBtn}>Contact</a>
                </motion.div>
            </motion.div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{opacity: 0}}
                animate={{opacity: animationState.description ? 1 : 0}}
                transition={{duration: 0.5, delay: 0.5}}
            >
                <span></span>
            </motion.div>
        </section>
    );
};

export default Home;