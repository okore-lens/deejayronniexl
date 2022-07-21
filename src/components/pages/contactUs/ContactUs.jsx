import React, { useState } from "react";
import "./ContactUs.scss";
import { send } from "emailjs-com";
import image from "../../../assets/images/img.jpg";

const ContactUs = () => {
  const [formInputs, setFormInputs] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [disable, setDisable] = useState(true);

  const ChangeHandler = (event) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };
  const BlurHandler = () => {
    if (
      formInputs.from_name.trim().length > 4 &&
      formInputs.message.trim().length > 20
    )
      setDisable(false);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log("Clicked");
    send("service_yyeki9b", "template_ioz6ifx", formInputs, "yySSC3OYij-nR0TpB")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Message not sent");
      });
    setFormInputs({ from_name: "", message: "", reply_to: "" });
  };

  const myStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div style={myStyle} className="contact-us">
      <div className="inquiry-section">
        <div className="form">
          <form>
            <div className="name">
              <input
                type="text"
                name="from_name"
                value={formInputs.from_name}
                onBlur={BlurHandler}
                onChange={ChangeHandler}
                placeholder="Name"
              />
            </div>
            <div className="email">
              <input
                type="text"
                name="reply_to"
                value={formInputs.reply_to}
                onBlur={BlurHandler}
                onChange={ChangeHandler}
                placeholder="Email"
              />
            </div>
            <div className="message">
              <textarea
                type="text"
                name="message"
                value={formInputs.message}
                onBlur={BlurHandler}
                onChange={ChangeHandler}
                placeholder="Message"
              />
            </div>

            <button disabled={disable} onClick={SubmitHandler}>
              Submit
            </button>
          </form>
        </div>
        <div className="info">
          <div className="text">
            <p>
              For any enquiries regarding Bookings, Commercial
              Partnerships,Publicity, Marketing & Social Media or to be in touch
              with Deejay RonnieXl’s Management, please use the relevant contact
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// const validateEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

// const validate = () => {
//   const $result = $('#result');
//   const email = $('#email').val();
//   $result.text('');

//   if (validateEmail(email)) {
//     $result.text(email + ' is valid :)');
//     $result.css('color', 'green');
//   } else {
//     $result.text(email + ' is not valid :(');
//     $result.css('color', 'red');
//   }
//   return false;
// }

// $('#email').on('input', validate);
