import { useState } from 'react'
import { hackathons } from '../data/hackathons'
import HackathonDetails from './HackathonDetails'

const Hackathons = () => {
    const [selectedHackathon, setSelectedHackathon] = useState<number | null>(null)

    return (
        <>
            <section id="hackathons" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title">Hackathons</h2>
                    <p
                        style={{
                            textAlign: 'center',
                            maxWidth: '700px',
                            margin: '0 auto 3rem',
                            color: 'var(--text-secondary)',
                            fontSize: '1.1rem',
                        }}
                    >
                        Explore my hackathon projects where I've competed and collaborated with talented teams.
                    </p>

                    <div className="grid grid-2" style={{ gap: '2.5rem' }}>
                        {hackathons.map((hackathon, index) => (
                            <div
                                key={hackathon.id}
                                className="card"
                                style={{
                                    overflow: 'visible',
                                    padding: 0,
                                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s backwards`,
                                }}
                            >
                                {/* Hackathon Image */}
                                <div
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        backgroundColor: 'var(--bg-primary)',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Achievement Badge Overlay */}
                                    {hackathon.achievement && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '1rem',
                                                right: '1rem',
                                                padding: '0.5rem 1rem',
                                                backgroundColor: 'rgba(52, 211, 153, 0.95)',
                                                borderRadius: '20px',
                                                color: '#020617',
                                                fontWeight: 600,
                                                fontSize: '0.85rem',
                                                zIndex: 2,
                                                boxShadow: '0 4px 15px rgba(52, 211, 153, 0.4)',
                                            }}
                                        >
                                            {hackathon.achievement.toLowerCase().includes('organizing') ? '' : '🏆 '}
                                            {hackathon.achievement}
                                        </div>
                                    )}
                                    <img
                                        src={hackathon.imageUrl}
                                        alt={hackathon.title}
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

                                {/* Hackathon Content */}
                                <div style={{ padding: '2rem' }}>
                                    <h3
                                        style={{
                                            marginBottom: '0.5rem',
                                            color: 'var(--text-primary)',
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        {hackathon.title}
                                    </h3>

                                    {/* Event Info */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '1rem',
                                            marginBottom: '1rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <span>📅 {hackathon.date}</span>
                                        <span>🎯 {hackathon.event}</span>
                                    </div>

                                    <p
                                        style={{
                                            marginBottom: '1.5rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {hackathon.description}
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
                                        {hackathon.technologies.slice(0, 4).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    padding: '0.4rem 0.8rem',
                                                    backgroundColor: 'var(--bg-primary)',
                                                    borderRadius: '15px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    color: 'var(--primary-color)',
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {hackathon.technologies.length > 4 && (
                                            <span
                                                style={{
                                                    padding: '0.4rem 0.8rem',
                                                    backgroundColor: 'var(--bg-primary)',
                                                    borderRadius: '15px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    color: 'var(--text-secondary)',
                                                }}
                                            >
                                                +{hackathon.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Button */}
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button
                                            onClick={() => setSelectedHackathon(hackathon.id)}
                                            className="btn btn-primary"
                                            style={{
                                                padding: '0.6rem 1.2rem',
                                                fontSize: '0.9rem',
                                                width: '100%',
                                            }}
                                        >
                                            📖 More Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hackathon Details Modal */}
            {selectedHackathon && (
                <HackathonDetails
                    hackathonId={selectedHackathon}
                    onClose={() => setSelectedHackathon(null)}
                />
            )}
        </>
    )
}

export default Hackathons
