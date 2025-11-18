import { useState, useEffect } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 2px 20px rgba(96, 165, 250, 0.1)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <nav className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
            }}>
                {/* LinkedIn Link - Left Side */}
                <a
                    href="https://www.linkedin.com/in/nimantha-madushan-9293bb286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--primary-color)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = 'var(--primary-color)'
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                </a>

                {/* Desktop Navigation */}
                <ul
                    style={{
                        display: 'flex',
                        listStyle: 'none',
                        gap: '2rem',
                        margin: 0,
                    }}
                    className="desktop-nav"
                >
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('about')
                            }}
                            style={{
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s ease',
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('projects')
                            }}
                            style={{
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s ease',
                            }}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('hackathons')
                            }}
                            style={{
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s ease',
                            }}
                        >
                            Hackathons
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('contact')
                            }}
                            style={{
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s ease',
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                    }}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        display: 'none',
                        backgroundColor: 'white',
                        padding: '1rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ padding: '0.75rem 0' }}>
                            <a
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('about')
                                }}
                                style={{ cursor: 'pointer', fontSize: '1.1rem' }}
                            >
                                About
                            </a>
                        </li>
                        <li style={{ padding: '0.75rem 0' }}>
                            <a
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('projects')
                                }}
                                style={{ cursor: 'pointer', fontSize: '1.1rem' }}
                            >
                                Projects
                            </a>
                        </li>
                        <li style={{ padding: '0.75rem 0' }}>
                            <a
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('hackathons')
                                }}
                                style={{ cursor: 'pointer', fontSize: '1.1rem' }}
                            >
                                Hackathons
                            </a>
                        </li>
                        <li style={{ padding: '0.75rem 0' }}>
                            <a
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('contact')
                                }}
                                style={{ cursor: 'pointer', fontSize: '1.1rem' }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
        </header>
    )
}

export default Header
