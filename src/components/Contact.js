import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact">
            <h2>Contactez-nous</h2>
            <form>
                <label>
                    Nom :
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email :
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message :
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Contact;