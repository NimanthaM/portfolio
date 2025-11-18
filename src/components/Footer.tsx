const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/NimanthaM/NimanthaM', icon: '🔗' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nimantha-madushan-9293bb286', icon: '💼' },
        
        { name: 'Email', url: 'mailto:nimantham.lk@gmail.com', icon: '📧' },
    ]

    return (
        <footer
            style={{
                backgroundColor: 'var(--bg-dark)',
                color: 'white',
                padding: '3rem 0 1.5rem',
                marginTop: '5rem',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem',
                    }}
                >
                    {/* Brand */}
                    <div>
                        <h3
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Nimantha Madushan
                        </h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                            Software Engineering Intern seeking opportunities to build innovative solutions and
                            grow as a developer.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['About', 'Projects', 'Contact'].map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = 'white'
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                                        }}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Connect</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '45px',
                                        height: '45px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '50%',
                                        textDecoration: 'none',
                                        fontSize: '1.3rem',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--primary-color)'
                                        e.currentTarget.style.transform = 'translateY(-3px)'
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                                        e.currentTarget.style.transform = 'translateY(0)'
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        paddingTop: '1.5rem',
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.6)',
                    }}
                >
                    <p>
                        © {currentYear} Nimantha Madushan. Built with React & TypeScript. All rights reserved .
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
