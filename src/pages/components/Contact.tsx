import React, { useState, FormEvent } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../../styles/Contact.module.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 방법 1: EmailJS 사용 (추천)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // EmailJS 사용 예시 (실제로는 emailjs 라이브러리 설치 필요)
            // import emailjs from 'emailjs-com';
            // const result = await emailjs.send(
            //     'YOUR_SERVICE_ID', // EmailJS에서 생성한 서비스 ID
            //     'YOUR_TEMPLATE_ID', // EmailJS에서 생성한 템플릿 ID
            //     {
            //         name: formData.name,
            //         email: formData.email,
            //         message: formData.message,
            //         to_email: '0114chan@gmail.com'
            //     },
            //     'YOUR_USER_ID' // EmailJS 사용자 ID
            // );

            // 실제 API 연동 전 성공 시뮬레이션
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus({
                success: true,
                message: '메시지가 성공적으로 전송되었습니다!'
            });

            // 폼 초기화
            setFormData({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            setSubmitStatus({
                success: false,
                message: '메시지 전송에 실패했습니다. 다시 시도해주세요.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // 방법 2: 일반 mailto 링크 사용
    const handleMailtoSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = `웹사이트 문의: ${formData.name}`;
        const body = `
이름: ${formData.name}
이메일: ${formData.email}

메시지:
${formData.message}
        `;

        window.location.href = `mailto:0114chan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.sectionTitle}>
                <h2>Contact</h2>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.contactContent}>
                <div className={styles.contactText}>
                    <p>
                        프로젝트 협업, 채용 문의 등 어떤 내용이든 편하게 연락주세요.
                    </p>
                </div>
                <div className={styles.contactLinks}>
                    <a href="mailto:0114chan@gmail.com" className={styles.contactLink}>
                        <FaEnvelope /> <span>0114chan@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/0114chan" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> <span>GitHub</span>
                    </a>
                </div>

                {/* 방법 1: EmailJS 사용 (주석 처리) */}
                {/* <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">메시지</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {submitStatus.message && (
                        <div className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? '전송 중...' : '메시지 보내기'}
                    </button>
                </form> */}

                {/* 방법 2: mailto 링크 사용 (활성화) */}
                <form className={styles.contactForm} onSubmit={handleMailtoSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">메시지</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                    >
                        메시지 보내기
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;