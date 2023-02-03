import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormArea,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from "./ContactStyle";
import { Container, Section } from "../../globalStyles";
import validateForm from "./contactValidation";

const Contact = () => {
  const [from_name, setName] = useState("");
  const [from_email, setEmail] = useState("");
  const [from_telephone, setTelephone] = useState("");
  const [from_message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  //Send email using EmailJS

  const form = useRef();

  //End Send Email

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({
      from_name,
      from_email,
      from_telephone,
      from_message,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    //send the message
    // const sendEmail = (e) => {
    //   e.preventDefault();

    emailjs
      .sendForm(
        "service_pqj2vk6", //"YOUR_SERVICE_ID",
        "template_1u71l3d", //"YOUR_TEMPLATE_ID",
        form.current,
        "xCcUGLdysAvEkILby" //"YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          console.log("Failed to send message");
        }
      );
    //};

    //Clear the form data
    setName("");
    setEmail("");
    setTelephone("");
    setMessage("");
    setError(null);
    setSuccess(
      "Thank you for connecting with us, a specialist will be with you shortly!"
    );
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Full Name",
      name: "from_name",
      value: from_name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Email Address",
      name: "from_email",
      value: from_email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Telephone",
      name: "from_telephone",
      value: from_telephone,
      onChange: (e) => setTelephone(e.target.value),
      type: "number",
    },
    // {
    //   label: "Tell us how we can help you",
    //   value: message,
    //   onChange: (e) => setMessage(e.target.value),
    //   type: "text",
    // },
  ];
  return (
    <Section inverse id="contactus">
      <FormSection>
        <Container>
          <FormRow>
            <FormColumn small>
              <FormTitle>Connect with Us</FormTitle>
              <FormWrapper onSubmit={handleSubmit} ref={form}>
                {formData.map((el, index) => (
                  <FormInputRow key={index}>
                    <FormLabel>{el.label}</FormLabel>
                    <FormInput
                      type={el.type}
                      name={el.name}
                      placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                      value={el.value}
                      onChange={el.onChange}
                    />
                  </FormInputRow>
                ))}
                <FormLabel>Message</FormLabel>
                <FormArea
                  type="text"
                  name="from_message"
                  placeholder="Tell us how we can help you!"
                  onChange={(e) => setMessage(e.target.value)}
                >
                  {from_message}
                </FormArea>
                <FormButton type="submit">Submit</FormButton>
              </FormWrapper>
              {error && (
                <FormMessage
                  variants={messageVariants}
                  initial="hidden"
                  animate="animate"
                  error
                >
                  {error}
                </FormMessage>
              )}
              {success && (
                <FormMessage
                  variants={messageVariants}
                  initial="hidden"
                  animate="animate"
                >
                  {success}
                </FormMessage>
              )}
            </FormColumn>
          </FormRow>
        </Container>
      </FormSection>
    </Section>
  );
};

export default Contact;
