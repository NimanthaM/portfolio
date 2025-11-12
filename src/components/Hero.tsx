const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'white',
            top: '-200px',
            right: '-100px',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'white',
            bottom: '-100px',
            left: '-50px',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            animation: 'fadeIn 1s ease-out',
          }}
        >
          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              opacity: 0.9,
              animation: 'slideInLeft 0.8s ease-out',
            }}
          >
            👋 Hello, I'm
          </p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              animation: 'fadeIn 1s ease-out 0.2s backwards',
            }}
          >
            Your Name
          </h1>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 600,
              marginBottom: '1.5rem',
              opacity: 0.95,
              animation: 'fadeIn 1s ease-out 0.4s backwards',
            }}
          >
            Software Engineering Intern
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
              opacity: 0.9,
              animation: 'fadeIn 1s ease-out 0.6s backwards',
            }}
          >
            Passionate about building innovative solutions and learning new technologies.
            Seeking opportunities to contribute to impactful projects.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeIn 1s ease-out 0.8s backwards',
            }}
          >
            <button
              onClick={scrollToContact}
              className="btn btn-primary"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
              }}
            >
              Get In Touch
            </button>
            <button
              onClick={scrollToProjects}
              className="btn btn-outline"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
              }}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'float 2s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '20px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '3px',
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scroll 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
