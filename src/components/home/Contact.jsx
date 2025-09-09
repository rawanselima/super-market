import React from "react";
import HeaderSection from "../common/HeaderSection";
import Button from "../common/Button";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const styleInput =
    "bg-white my-1 rounded-xl px-3 py-1.5 w-full outline-none border-2 border-green/50 text-sm";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rxvivqo",
        "template_4z0bgwv",
        e.target,
        "8b9ZvEfv6ev5Yj31e"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Failed to send the message, please try again");
          console.log(error);
        }
      );
  };

  return (
    <section className="bg-[url(/assets/background.png)] bg-no-repeat bg-cover bg-left rounded-3xl flex flex-wrap justify-between items-center my-10">
      <div className="px-10">
        <HeaderSection showByMargin={true} >
          Stay home & get your daily <br /> needs from our shop
        </HeaderSection>
        <p className="text-dark-gray mb-3">
          you can contact with
          <span className="text-green font-bold text-lg"> Nest Mar</span> on our
          email
        </p>
        <form onSubmit={sendEmail}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styleInput}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={styleInput}
              required
            />
          </div>
          <textarea
            name="message"
            className={styleInput}
            rows={3}
            placeholder="Write your message"
            required
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
      <div>
        <img
          src="/assets/contact.png"
          alt="contactImage"
          loading="lazy"
          className="object-cover xl:mt-20"
        />
      </div>
    </section>
  );
};

export default Contact;
