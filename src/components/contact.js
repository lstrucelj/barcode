import React, { useState, useRef } from "react";
import useRecaptchaV3 from "./recaptcha";

const initialFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const executeRecaptcha = useRecaptchaV3();

  const messageSuccess = useRef(null);
  const messageError = useRef(null);

  const [fields, setFields] = useState(initialFields);
  const [errors, serErrors] = useState(initialFields);

  const [isLoading, setIsLoading] = useState(false);

  const FIELD_TO_VALIDATION = {
    name: () => {
      return fields.name.trim() !== "";
    },
    email: () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(fields.email);
    },
    subject: () => {
      return fields.subject.trim() !== "";
    },
    message: () => {
      return fields.message.trim() !== "";
    },
  };

  const handleFieldChange = (fieldName) => (event) => {
    const value = event.target.value;
    serErrors((prev) => ({ ...prev, [fieldName]: "" }));
    setFields((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    serErrors((prev) => ({ ...prev, ...initialFields }));

    if (
      Object.keys(FIELD_TO_VALIDATION).every((key) =>
        FIELD_TO_VALIDATION[key]()
      )
    ) {
      setIsLoading(true);
      const recaptchaToken = await executeRecaptcha("submit");
      const formData = {
        name: fields.name,
        email: fields.email,
        subject: fields.subject,
        message: fields.message,
        token: recaptchaToken,
      };

      fetch("/php/contact-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          messageSuccess.current.classList.remove("d-none");
          messageError.current.classList.add("d-none");

          setFields(initialFields);
          setIsLoading(false);
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          messageSuccess.current.classList.add("d-none");
          messageError.current.classList.remove("d-none");
          setIsLoading(false);
        });
    } else {
      const newErrors = {};
      Object.keys(FIELD_TO_VALIDATION).map((key) => {
        const valid = FIELD_TO_VALIDATION[key]();
        newErrors[key] = valid ? "" : "Molimo ispunite ovo prazno polje.";
        return;
      });

      serErrors((prev) => ({ ...prev, ...newErrors }));
    }
  };

  return (
    <div id="kontakt" className="container py-5" style={{ width: "90%" }}>
      <div className="row">
        <div className="col">
          <p
            className="text-uppercase font-weight-semibold mb-1 text-color-primary appear-animation"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay="100"
          >
            <span className="line-pre-title bg-color-primary"></span>
            Kontaktirajte nas
          </p>
          <h2
            className="text-color-secondary font-weight-bold mb-2 custom-letter-spacing-2 custom-text-1 appear-animation"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay="200"
          >
            Pošaljite nam upit
          </h2>
          <p
            className="mb-4 appear-animation"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay="300"
          >
            Za sva pitanja obratite nam se putem kontakt obrasca ili nas
            nazovite.
          </p>

          <form
            className="contact-form custom-form-style-1 appear-animation"
            data-appear-animation="fadeIn"
            data-appear-animation-delay="100"
            action="/"
            method="POST"
          >
            <div
              ref={messageSuccess}
              className="contact-form-success alert alert-success d-none mt-4"
            >
              <strong>Uspješno!</strong> Vaša poruka je poslana..
            </div>

            <div
              ref={messageError}
              className="contact-form-error alert alert-danger d-none mt-4"
            >
              <strong>Ups!</strong> Došlo je do problema.
              <span className="mail-error-message text-1 d-block"></span>
            </div>
            <div className="row">
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  placeholder="Ime i Prezime"
                  value={fields.name}
                  onChange={handleFieldChange("name")}
                  data-msg-required="Molimo upišite svoje ime."
                  maxLength="100"
                  className="form-control"
                  name="name"
                  required
                />
              </div>
              <div className="form-group col-lg-6">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={fields.email}
                  onChange={handleFieldChange("email")}
                  data-msg-required="Molimo upišite svoju email adresu."
                  data-msg-email="Molimo unesite ispravnu email adresu."
                  maxLength="100"
                  className="form-control"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Naslov"
                  type="text"
                  value={fields.subject}
                  onChange={handleFieldChange("subject")}
                  data-msg-required="Molimo upišite naslov."
                  maxLength="100"
                  className="form-control"
                  name="subject"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <textarea
                  value={fields.message}
                  onChange={handleFieldChange("message")}
                  placeholder="Vaša poruka..."
                  maxLength="5000"
                  data-msg-required="Molimo upišite Vašu poruku."
                  rows="10"
                  className="form-control"
                  name="message"
                  required
                ></textarea>
              </div>
            </div>

            <div className="row">
              <span
                style={{
                  marginBottom: "10px",
                  color: "#bdbdbd",
                  fontSize: "12px",
                  marginLeft: "6px",
                  display: "block",
                }}
              >
                This site is protected by reCAPTCHA and the Google&nbsp;
                <a
                  href="https://policies.google.com/privacy"
                  style={{
                    textDecoration: "none",
                    color: "#6f6b80",
                  }}
                >
                  Privacy Policy
                </a>{" "}
                and&nbsp;
                <a
                  href="https://policies.google.com/terms"
                  style={{
                    textDecoration: "none",
                    color: "#6f6b80",
                  }}
                >
                  Terms of Service
                </a>{" "}
                apply.
              </span>
            </div>
            <div className="row">
              <div className="form-group col">
                <input
                  disabled={isLoading}
                  onClick={handleSubmit}
                  type="submit"
                  value={isLoading ? "Čekanje..." : "Pošalji"}
                  className="btn btn-primary custom-btn text-center text-uppercase text-decoration-none border-0 py-0 px-5 font-weight-semibold"
                  data-loading-text="Čekanje..."
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
