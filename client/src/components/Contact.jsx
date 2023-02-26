import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {  useNavigate } from "react-router-dom";
import "../style/Contact.scss"

function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const question = require("../logos/question.PNG");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcz6gke",
        "template_4btpky8",
        form.current,
        "67lDTNb3Sjy-DNZs_"
      )
      .then(
        (result) => {
          alert("message sent");
          navigate("/")
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div><img src={question} alt="" /></div>
    <StyledContactForm id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required/>
        <label>Email</label>
        <input type="email" name="email" required/>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" required/>
      </form>
    </StyledContactForm>
    </div>
  );
};
export default Contact;

const StyledContactForm = styled.div`
  width: 400px;
  margin-left:  auto;
  margin-right: auto;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #37517e;
      color: white;
      border: none;
    }
  }
`;