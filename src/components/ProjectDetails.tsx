import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

interface ProjectDetailsProps {
    projectId: number
    onClose: () => void
}

const ProjectDetails = ({ projectId, onClose }: ProjectDetailsProps) => {
    const project = projects.find((p) => p.id === projectId)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    // Auto-play carousel - change image every 3 seconds
    useEffect(() => {
        if (!project || !project.gallery || project.gallery.length <= 1) return

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % (project.gallery?.length || 1))
        }, 3000) // Change image every 3 seconds

        return () => clearInterval(interval)
    }, [project])

    if (!project) return null

    const images = project.gallery || [project.imageUrl]

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const goToImage = (index: number) => {
        setCurrentImageIndex(index)
    }

    // Handle touch events for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swipe left
            nextImage()
        }
        if (touchStart - touchEnd < -75) {
            // Swipe right
            prevImage()
        }
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                zIndex: 9999,
                overflow: 'auto',
                animation: 'fadeIn 0.3s ease-out',
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
        >
            <div className="container" style={{ padding: '2rem', maxWidth: '1200px' }}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: '2rem',
                        right: '2rem',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'rgba(96, 165, 250, 0.2)',
                        border: '2px solid var(--primary-color)',
                        color: 'var(--primary-color)',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        zIndex: 10000,
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--primary-color)'
                        e.currentTarget.style.color = 'var(--bg-dark)'
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(96, 165, 250, 0.2)'
                        e.currentTarget.style.color = 'var(--primary-color)'
                    }}
                >
                    ✕
                </button>

                {/* Project Content */}
                <div style={{ marginTop: '4rem', animation: 'slideInLeft 0.5s ease-out' }}>
                    {/* Project Title */}
                    <h1
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            marginBottom: '1rem',
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {project.title}
                    </h1>

                    {/* Technologies */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.75rem',
                            marginBottom: '2rem',
                        }}
                    >
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                                    border: '1px solid var(--primary-color)',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    color: 'var(--primary-color)',
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Image Carousel */}
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '900px',
                            margin: '2rem auto',
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Images */}
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '500px',
                            }}
                        >
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        opacity: idx === currentImageIndex ? 1 : 0,
                                        transform: idx === currentImageIndex ? 'scale(1)' : 'scale(0.95)',
                                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    style={{
                                        position: 'absolute',
                                        left: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        border: '2px solid var(--primary-color)',
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'var(--primary-color)'
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'
                                    }}
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={nextImage}
                                    style={{
                                        position: 'absolute',
                                        right: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        border: '2px solid var(--primary-color)',
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'var(--primary-color)'
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'
                                    }}
                                >
                                    ›
                                </button>
                            </>
                        )}

                        {/* Dots Indicator */}
                        {images.length > 1 && (
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '1.5rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    gap: '0.5rem',
                                }}
                            >
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToImage(idx)}
                                        style={{
                                            width: idx === currentImageIndex ? '30px' : '10px',
                                            height: '10px',
                                            borderRadius: '5px',
                                            background:
                                                idx === currentImageIndex
                                                    ? 'var(--primary-color)'
                                                    : 'rgba(255, 255, 255, 0.4)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Project Details */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            marginTop: '3rem',
                        }}
                    >
                        {/* Description */}
                        <div>
                            <h3
                                style={{
                                    color: 'var(--primary-color)',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem',
                                }}
                            >
                                About This Project
                            </h3>
                            <p
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                {project.detailedDescription || project.description}
                            </p>
                        </div>

                        {/* Features */}
                        {project.features && (
                            <div>
                                <h3
                                    style={{
                                        color: 'var(--primary-color)',
                                        marginBottom: '1rem',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    Key Features
                                </h3>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {project.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            style={{
                                                marginBottom: '0.75rem',
                                                paddingLeft: '1.5rem',
                                                position: 'relative',
                                                fontSize: '1.05rem',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: 'var(--primary-color)',
                                                }}
                                            >
                                                ✓
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* My Role */}
                        {project.myRole && (
                            <div>
                                <h3
                                    style={{
                                        color: 'var(--primary-color)',
                                        marginBottom: '1rem',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    My Role
                                </h3>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {project.myRole.map((role, idx) => (
                                        <li
                                            key={idx}
                                            style={{
                                                marginBottom: '0.75rem',
                                                paddingLeft: '1.5rem',
                                                position: 'relative',
                                                fontSize: '1.05rem',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: 'var(--accent-color)',
                                                }}
                                            >
                                                ✓
                                            </span>
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            marginTop: '3rem',
                            marginBottom: '2rem',
                            flexWrap: 'wrap',
                        }}
                    >
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                🔗 View Code
                            </a>
                        )}
                        <button onClick={onClose} className="btn btn-primary">
                            ← Back to Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
