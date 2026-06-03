import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

import { IllustrationPanel } from "../components/ui/IllustrationPanel.jsx";
import { Reveal } from "../components/ui/Reveal.jsx";
import { SectionIntro } from "../components/ui/SectionIntro.jsx";
import { illustrations } from "../data/illustrations.js";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      siteName:'https://inversebionics.gov2partner.com/',
    };

    setLoading(true);

    const loadingToast = toast.loading("Submitting your request...");

    try {
      const response = await fetch(
        "https://cust.gov2partner.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (response.ok && data.success) {
        toast.success(
          data.message || "Form submitted successfully!"
        );

        e.target.reset();
      } else {
        toast.error(
          data.message || "Failed to submit form."
        );
      }
    } catch (error) {
      toast.dismiss(loadingToast);

      console.error(error);

      toast.error(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <SectionIntro
        eyebrow="Join Us"
        title="Be part of a global movement."
        text="Together, we can strengthen the world's cognitive future."
      />

      <div className="contact-grid">
        <div className="join-cards">
          <Reveal className="contact-illustration">
            <IllustrationPanel
              eyebrow="Reach Inverse Bionics"
              title="Join as a technologist, state leader, volunteer, student, innovator, or partner."
              text="Send a signal and connect with the movement for cognitive health."
              variant="compact"
              image={illustrations.contactUs}
            />
          </Reveal>
        </div>

        <Reveal className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                name="name"
                type="text"
                required
                placeholder=" "
              />
              <span>Name</span>
            </label>

            <label>
              <input
                name="email"
                type="email"
                required
                placeholder=" "
              />
              <span>Email</span>
            </label>

            <label>
              <input
                name="phone"
                type="tel"
                required
                placeholder=" "
              />
              <span>Phone</span>
            </label>

            <label className="message-field">
              <textarea
                name="message"
                required
                rows="5"
                placeholder=" "
              />
              <span>Message</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Sending..." : "Send Signal"}
              <ArrowRight size={18} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}