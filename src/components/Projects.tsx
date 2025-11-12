import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
          }}
        >
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        <div className="grid grid-2" style={{ gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card"
              style={{
                overflow: 'hidden',
                padding: 0,
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  width: '100%',
                  height: '250px',
                  backgroundColor: 'var(--bg-secondary)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
              </div>

              {/* Project Content */}
              <div style={{ padding: '2rem' }}>
                <h3
                  style={{
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    marginBottom: '1.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.4rem 0.8rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: 'var(--primary-color)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.9rem',
                      }}
                    >
                      🔗 GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.9rem',
                      }}
                    >
                      🚀 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
