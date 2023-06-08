import React, { useState, useEffect } from "react";
import ContactMap from "../components/ContactMap";

const ContactSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className={`gradient__bg h-screen flex flex-row lg:flex-col justify-around items-center fade-in ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="flex flex-col sm:max-w-[80%]">
        <h2 className="text-5xl text-white font-bold mb-7">Contact me</h2>

        <form
          data-netlify="true"
          className="flex flex-col gap-5 xl:text-base text-xl "
        >
          <div className="flex sm:flex-col gap-3">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <input type="text" name="name" placeholder="Subject" />
          <textarea name="textarea" placeholder="Message" />

          <button className="border text-semibold px-6 py-1 bg-[#042C54] text-white text-xl transition duration-300 ease-in-out hover:bg-white hover:text-black mt-7 self-end">
            Sent
          </button>
        </form>
      </div>
      <ContactMap />
    </section>
  );
};

export default ContactSection;
