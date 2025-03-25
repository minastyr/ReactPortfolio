import React, { useState } from 'react';
import '../styles/contact.css'; // Import the CSS file

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name) newErrors.name = 'Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email is not in the correct format';
        }
        if (!message) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length === 0) {
            console.log({ name, email, message });
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="contact">

            <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => !name && setErrors((prev) => ({ ...prev, name: 'Name is required' }))}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => {
                            if (!email) {
                                setErrors((prev) => ({ ...prev, email: 'Email is required' }));
                            } else if (!validateEmail(email)) {
                                setErrors((prev) => ({ ...prev, email: 'Email is not in the correct format' }));
                            }
                        }}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => !message && setErrors((prev) => ({ ...prev, message: 'Message is required' }))}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
};

export default Contact;