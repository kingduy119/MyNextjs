import React from "react";

const ContactModal = (props) => (
    <div id='restaurant-contact-modal' className="modal">
        <div className="modal__content animate-zoom">
            <div className="container white-black display-container">
                <span className="btn display-topright large"
                    onClick={() => { document.getElementById('restaurant-contact-modal').style.display = 'none'; }}
                >X</span>
                <h1>Contact</h1>
            </div>
            <div className="container">
                <p>Reserve a table, ask for today's special or just send us a message:</p>
                <form>
                    <p><input className="input padding-16 border block"
                        name="name"
                        type='text'
                        placeholder="Name"
                        required
                    /></p>
                    <p><input className="input padding-16 border block"
                        name="people"
                        type='number'
                        placeholder="How many people"
                        required
                    /></p>
                    <p><input className="input padding-16 border block"
                        name="date"
                        type='datetime-local'
                        placeholder="Date and time"
                        value="2017-11-16T20:00"
                        required
                    /></p>
                    <p><input className="input padding-16 border block"
                        name="message"
                        type='text'
                        placeholder="Message \ Special requirements"
                        value="2017-11-16T20:00"
                        required
                    /></p>
                    <p><button className="btn white-black" type="submit">Send Message</button></p>
                </form>
            </div>
        </div>
    </div>
)


export default ContactModal;


