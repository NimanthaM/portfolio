const About = () => {
    const skills = [
        { name: 'Java Spring Boot', level: 85 },


        { name: 'React', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 80 },

        { name: 'MySQL', level: 90 },
        { name: 'C', level: 85 },
        { name: 'C++', level: 85 },
        { name: 'Scala', level: 75 },
        { name: 'Git', level: 90 },

    ]

    return (
        <section id="about" className="section" style={{
            backgroundColor: 'var(--bg-secondary)',
            position: 'relative'
        }}>
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        marginTop: '3rem',
                    }}
                >
                    {/* About Text */}
                    <div style={{ animation: 'slideInLeft 0.6s ease-out' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
                            Who I Am
                        </h3>
                        <p style={{ marginBottom: '1rem' }}>
                            A dedicated Computer Science undergraduate at the University of Colombo School of Computing,
                            specializing in full-stack development. My passion lies in crafting elegant solutions to complex
                            problems and building scalable applications that deliver real value.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            With a strong foundation in modern web technologies and software engineering principles,
                            I thrive on transforming innovative ideas into functional, user-centric applications.
                            My experience spans across the entire development lifecycle, from conceptualization to deployment.
                        </p>
                        <p>
                            Beyond coding, I'm an avid learner who stays current with emerging technologies, participates
                            in hackathons, and continuously expands my technical expertise. I believe in writing clean,
                            maintainable code and following industry best practices.
                        </p>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h4>
                            <div className="card" style={{ padding: '1.5rem' }}>
                                <h5 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                    BSc. In Computer Science
                                </h5>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                    University Of Colombo School of Computing
                                    <br />
                                    Expected Graduation: 2026
                                    <br />
                                    Current GPA: 3.4
                                </p>
                            </div>

                            <div className="card" style={{ padding: '1.5rem', marginTop: '1rem' }}>
                                <h5 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                    GCE O/L and A/L
                                </h5>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                    Ananda College, Colombo 10
                                    <br />
                                    O/L - 9A's
                                    <br />
                                    A/L - 1A, 2B's - Physical Science Stream
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Skills */}
                    <div style={{ animation: 'slideInRight 0.6s ease-out' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                            Technical Skills
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                                            {skill.name}
                                        </span>
                                        <span style={{ color: 'var(--text-secondary)' }}>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '10px',
                                            backgroundColor: 'var(--border-color)',
                                            borderRadius: '5px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${skill.level}%`,
                                                height: '100%',
                                                background: 'var(--gradient-primary)',
                                                borderRadius: '5px',
                                                transition: 'width 1s ease-out',
                                                animation: `skillBar 1.5s ease-out ${index * 0.1}s backwards`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Additional Skills
                            </h4>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem',
                                }}
                            >
                                {['HTML/CSS', 'REST APIs', 'MongoDB', 'SQL', 'Docker', 'AWS', 'Figma', 'Postman'].map(
                                    (tech, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                backgroundColor: 'var(--bg-primary)',
                                                border: '2px solid var(--primary-color)',
                                                borderRadius: '20px',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                color: 'var(--primary-color)',
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes skillBar {
          from {
            width: 0%;
          }
        }
      `}</style>
        </section>
    )
}

export default About
