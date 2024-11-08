import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./data";
import "./style.css";
import contactimg from '../../assets/Images/cntact-img.jpg';
import { AiOutlineAim } from "react-icons/ai";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  });

  const [mapLocation, setMapLocation] = useState("Gurgaon, haryana");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;



    // Send email using EmailJS
    emailjs.sendForm(
      'service_cmxlnaa', // Replace with your EmailJS service ID
      'template_e6geusk', // Replace with your EmailJS template ID
      form,
      'jtnFRp10sr6HilXA3' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send email.');
    });
  };

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224102.96849580578!2d77.039722!3d28.445889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a4331b8e5f%3A0x6f1c47b186b5a4ef!2s${encodeURIComponent(mapLocation)}!5e0!3m2!1sen!2sin!4v1618387834124!5m2!1sen!2sin`;

  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-6">
            <div className="contact-box">
              <div className="icon"><AiOutlineAim /></div>
              <h3>Our Address</h3>
              <p>Gurugram, Haryana, <br /> India</p>
            </div>
          </div>
        </div>

        <div className="contact-header">
          <h6>GET IN TOUCH</h6>
          <h4>Ready to Get Started?</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>

        <div className="row mt-2 pt-2">
          <div className="col-lg-6 col-md-6 col-12 mt-5">
            <img src={contactimg} className="img-fluid" alt="contact" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="contact-form">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        className="form-control"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        spellCheck="false"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn readmore">Send Message</button>
                  </div>
                </div>
              </form>
              <div id="msg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="map">
          <iframe
            src={mapSrc}
            width="100%"
            height="550"
            loading="lazy" className="map-style p-0 m-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
