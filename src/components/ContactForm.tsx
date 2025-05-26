"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { useTheme } from "next-themes";


const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [err, setErr] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subject, setSubject] = useState("");
  const form = useRef<any>();
  const { theme } = useTheme();

  const sites = [
    {
      id: 1,
      name: "Linkedin",
      designation: "",
      image:
        "https://i.gyazo.com/76f926f4dc405635082d63d553c8e5ab.png",
      // onClick:()=>{
      //   window.open("www.linkedin.com", '_blank', 'noopener,noreferrer');

      // }
      href: "https://www.linkedin.com/in/jayanth920/"
    },
    {
      id: 2,
      name: "Github",
      designation: "",
      image:
        theme === "light"
          ? "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
          : "https://i.gyazo.com/85e7ce9196ae635161fec921602903a7.png",
      href: "https://github.com/jayanth920"
    },
  ];

  // Custom debounce function
  const debounce = (func: any, delay: any) => {
    let timeoutId: any;
    return function (this: any, ...args: any) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Debounce the sendEmail function with a delay of 2 seconds (adjust as needed)

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setErr(true);
      console.error("Please fill all the fields !");
      return;
    }

    if (subject !== "") {
      console.warn("UNUSUAL ACTIVITY DETECTED, please try again later..");
      console.error("UNUSUAL ACTIVITY DETECTED, please try again later..");
      setErr(true);
      return;

    }
    setErr(false);
    if (!isSubmitting) {
      setIsSubmitting(true);
      debouncedSendEmail();
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_6i0dr4d",
        "template_82jl46j",
        form.current,
        "jtWv7VqitHp320Q0l"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Form data:", form.current);
          console.log("message sent");

          // Animate fields on success
          const inputs = form.current.querySelectorAll("input, textarea");
          inputs.forEach((el: HTMLElement) => {
            el.classList.add("submitted");
          });

          // Remove the animation class after a short delay
          setTimeout(() => {
            inputs.forEach((el: HTMLElement) => {
              el.classList.remove("submitted");
            });
          }, 1000); // 1 second duration for the visual feedback
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setEmail("");
        setName("");
        setMessage("");
        setIsSubmitting(false);
      });
  };

  const debouncedSendEmail = debounce(sendEmail, 2000);

  return (
    <div className="contact-form2" style={{ color: "white", fontFamily: "system-ui" }}>
      <form ref={form} onSubmit={handleFormSubmit}>
        {err && <p style={{ color: "red" }}>Please fill all the fields correctly ! </p>}
        <label className="text-black dark:text-white">Name</label>
        <input type="text" name="user_name" className="userName" value={name} onChange={(e) => {
          setName(e.target.value)
        }} />
        <label className="text-black dark:text-white">Email</label>
        <input type="email" name="user_email" value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} />

        <label style={{ display: "none", "visibility": "hidden" }}>Subject</label>
        <textarea style={{ display: "none", "visibility": "hidden" }} name="subject" value={subject} onChange={(e) => {
          setSubject(e.target.value)
        }} />
        <label className="text-black dark:text-white">Message</label>
        <textarea name="message" value={message} onChange={(e) => {
          setMessage(e.target.value)
        }} />
        <input
          type="submit"
          value="Send"
          className="
    formsub_btn
    w-[20vw]
    mt-12
    px-2
    py-1
    text-[16px]
    uppercase
    tracking-widest
    cursor-pointer
    select-none
    border-[3px]
    rounded-none
    relative
    font-sans
    transition-all

    text-white
    bg-black
    border-white
    shadow-[1px_1px_0_white,2px_2px_0_white,3px_3px_0_white,4px_4px_0_white,5px_5px_0_white]

    dark:text-white
    dark:bg-black
    dark:border-white
    dark:shadow-[1px_1px_0_white,2px_2px_0_white,3px_3px_0_white,4px_4px_0_white,5px_5px_0_white]
  "
        />
      </form>
      <div className="flex flex-row items-center justify-start mt-10 mb-10 w-full">
        <AnimatedTooltip items={sites} />
      </div>
    </div>
  );
};

export default ContactForm;
