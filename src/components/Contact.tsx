import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to a backend or email service
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p
                    style={{
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                    }}
                >
                     Whether you have a question or just
                    want to say hi, feel free to reach out!
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        maxWidth: '1000px',
                        margin: '0 auto',
                    }}
                >
                    {/* Contact Form */}
                    <div style={{ animation: 'slideInLeft 0.6s ease-out' }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    htmlFor="name"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: 500,
                                        color: 'var(--text-primary)',
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        borderRadius: '8px',
                                        border: '2px solid var(--border-color)',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--primary-color)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    htmlFor="email"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: 500,
                                        color: 'var(--text-primary)',
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        borderRadius: '8px',
                                        border: '2px solid var(--border-color)',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--primary-color)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    htmlFor="message"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontWeight: 500,
                                        color: 'var(--text-primary)',
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        borderRadius: '8px',
                                        border: '2px solid var(--border-color)',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit',
                                        resize: 'vertical',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--primary-color)'
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)'
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div style={{ animation: 'slideInRight 0.6s ease-out' }}>
                        <div className="card" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
                                📧 Email
                            </h3>
                            <a
                                href="mailto:nimantham.lk@gmail.com"
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.1rem',
                                    textDecoration: 'none',
                                }}
                            >
                                nimantham.lk@gmail.com
                            </a>
                        </div>

                        <div className="card" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
                                📱 Connect
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <a
                                    href="https://github.com/NimanthaM/NimanthaM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '1.1rem',
                                        textDecoration: 'none',
                                    }}
                                >
                                    GitHub: @NimanthaM
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nimantha-madushan-9293bb286"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '1.1rem',
                                        textDecoration: 'none',
                                    }}
                                >
                                    LinkedIn: /in/nimantha-madushan-9293bb286
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
                                📍 Location
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                Colombo, Sri Lanka
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
