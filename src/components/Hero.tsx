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
                background: 'linear-gradient(135deg, #020617 0%, #0c1222 50%, #020617 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Dark Grid Pattern */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0.08,
                    backgroundImage: `
                        linear-gradient(rgba(96, 165, 250, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(96, 165, 250, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Animated Spotlight Effects */}
            <div
                style={{
                    position: 'absolute',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)',
                    top: '-300px',
                    right: '-200px',
                    animation: 'float 25s ease-in-out infinite',
                    filter: 'blur(80px)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)',
                    bottom: '-200px',
                    left: '-200px',
                    animation: 'float 30s ease-in-out infinite reverse',
                    filter: 'blur(80px)',
                }}
            />

            {/* Accent Lines */}
            <div
                style={{
                    position: 'absolute',
                    width: '2px',
                    height: '100%',
                    left: '20%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(96, 165, 250, 0.2) 50%, transparent 100%)',
                    opacity: 0.3,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '2px',
                    height: '100%',
                    right: '20%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(167, 139, 250, 0.2) 50%, transparent 100%)',
                    opacity: 0.3,
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        animation: 'fadeIn 1s ease-out',
                    }}
                >
                    {/* Profile Picture */}
                    <div
                        style={{
                            marginBottom: '2rem',
                            animation: 'fadeIn 0.8s ease-out',
                        }}
                    >
                        <div
                            style={{
                                width: '180px',
                                height: '180px',
                                margin: '0 auto',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid var(--primary-color)',
                                boxShadow: '0 0 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.2)',
                                position: 'relative',
                                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(167, 139, 250, 0.2))',
                            }}
                        >
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                                onError={(e) => {
                                    // Fallback if image not found
                                    const target = e.currentTarget as HTMLImageElement;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.innerHTML = `
                                            <div style="
                                                width: 100%;
                                                height: 100%;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                font-size: 4rem;
                                                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                                            ">
                                                👤
                                            </div>
                                        `;
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <p
                        style={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--primary-color)',
                            fontWeight: 500,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            animation: 'slideInLeft 0.8s ease-out',
                        }}
                    >
                        👋 Hello, I'm
                    </p>
                    <h1
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            fontWeight: 900,
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'fadeIn 1s ease-out 0.2s backwards',
                            textShadow: '0 0 40px rgba(96, 165, 250, 0.3)',
                        }}
                    >
                        Nimantha Madushan
                    </h1>
                    <h2
                        style={{
                            fontSize: 'clamp(1.2rem, 4vw, 1.2rem)',
                            fontWeight: 600,
                            marginBottom: '0.7rem',
                            background: 'linear-gradient(135deg, #d1d5db 0%, #a78bfa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'fadeIn 1s ease-out 0.4s backwards',
                        }}
                    >
                        Aspiring Full-Stack Developer | Software Engineering Enthusiast | CS undergraduate at UCSC | Lifelong Learner
                    </h2>
                    <p
                        style={{
                            fontSize: '1.0rem',
                            maxWidth: '700px',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.8,
                            color: 'rgba(209, 213, 219, 0.9)',
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
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                border: 'none',
                                boxShadow: 'var(--shadow-glow)',
                            }}
                        >
                            Get In Touch
                        </button>
                        <button
                            onClick={scrollToProjects}
                            className="btn btn-outline"
                            style={{
                                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                                color: 'var(--primary-color)',
                                border: '2px solid var(--primary-color)',
                                backdropFilter: 'blur(10px)',
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
