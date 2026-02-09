import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // ⚠️ REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
    emailjs
      .sendForm(
        "service_ji0kmnk",     // e.g. "service_x98..."
        "template_qb931rq",    // e.g. "template_j21..."
        form.current,
        "kBgOfK9MDq2S8-VnU"      // e.g. "user_891..."
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setLoading(false);
          e.target.reset(); // Clears form after sending
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="page contact-page">
      <div className="contact-container">
        
        {/* === LEFT SIDE: DIRECT CONTACT INFO === */}
        <div className="contact-info-box">
          <h3>Contact Details</h3>
          <p className="info-desc">
            Active Job Seeker. Feel free to contact me directly regarding job opportunities.
          </p>

          <div className="info-item">
            <span className="label">Phone / WhatsApp</span>
            <p>+91 7393930855</p> {/* ✏️ Update this */}
          </div>

          <div className="info-item">
            <span className="label">Email</span>
            <p>mbssingh1750@gmail.com</p> {/* ✏️ Update this */}
          </div>

          <div className="info-item">
            <span className="label">Location</span>
            <p>Noida, Uttar Pradesh</p>
          </div>

          {/* ✅ NEW SOCIAL LINKS SECTION */}
          <div className="contact-socials">
            <span style={{ color: "#cfcfcf" }}> </span>
            <a href="https://www.linkedin.com/in/mahabali/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span style={{ color: "#cfcfcf" }}> | </span>
            <a href="https://github.com/mahabalii" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span style={{ color: "#cfcfcf" }}> </span>
          </div>

        </div>

        {/* === RIGHT SIDE: EMAIL FORM === */}
        <div className="contact-form-box">
          <h2>Send a Message </h2>
          <p style={{color: "#cfcfcf", marginBottom:"20px"}}>
             Have a project or question? I'd love to hear from you.
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* These names must match your EmailJS template variables */}
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
            />

            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              required 
            />

            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              required 
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {done && (
              <span className="success-msg">
                ✅ Message sent! I'll reply soon.
              </span>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;