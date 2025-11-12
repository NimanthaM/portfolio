const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'Git', level: 90 },
  ]

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
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
              I'm a passionate software engineering student with a strong foundation in 
              full-stack development. I love solving complex problems and building 
              applications that make a difference.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Currently seeking internship opportunities where I can contribute my skills, 
              learn from experienced professionals, and grow as a developer.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or learning about the latest trends in software development.
            </p>
            
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h4>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h5 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                  Bachelor of Computer Science
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                  Your University • Expected Graduation: 2025
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
                {['HTML/CSS', 'REST APIs', 'MongoDB', 'SQL', 'Docker', 'AWS'].map(
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
