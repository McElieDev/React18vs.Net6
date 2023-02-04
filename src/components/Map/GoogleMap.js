import React from "react";
import { Container } from "react-bootstrap";

const GoogleMap = () => {
  return (
    <>
      <Container>
        <div className="google-map-code">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.714158520822!2d28.04556595119023!3d-26.205975170329836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e9980389217%3A0x58da96a0b1e0bd6f!2s34%20Von%20Wielligh%20St%2C%20Marshalltown%2C%20Johannesburg%2C%202107!5e0!3m2!1sen!2sza!4v1675537735259!5m2!1sen!2sza"
            height="410"
            style={{ width: "100%", border: 0, margin: 0, padding: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="Carlton Digital Printing Physical Address / Location"
            arial-hidden="false"
            tabIndex={0}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default GoogleMap;
