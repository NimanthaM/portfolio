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
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '1rem 2rem',
            }}>
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
