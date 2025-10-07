"use client";

import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clearing field-specific error while typing
    setErrors((prev) => ({ ...prev, [`${name}Error`]: "" }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(false);
    setErrors({
      nameError: "",
      emailError: "",
      messageError: "",
    });

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    let localErrors = {
      nameError: "",
      emailError: "",
      messageError: "",
    };
    let hasError = false;

    if (!name) {
      hasError = true;
      localErrors.nameError = "Name is required";
    }

    if (!email) {
      hasError = true;
      localErrors.emailError = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      hasError = true;
      localErrors.emailError = "Invalid email address";
    }

    if (!message) {
      hasError = true;
      localErrors.messageError = "Message is required";
    }

    setErrors(localErrors);

    if (hasError) {
      if (localErrors.nameError) {
        document.getElementById("name")?.focus();
      } else if (localErrors.emailError) {
        document.getElementById("email")?.focus();
      } else if (localErrors.messageError) {
        document.getElementById("message")?.focus();
      }
      return;
    }

    try {
      setIsSubmitting(true);

      console.log({ name, email, message });
      setFormData({ name: "", email: "", message: "" });
      setErrors({ nameError: "", emailError: "", messageError: "" });
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} noValidate>
        <div className="py-5 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="text-md max-[800px]:text-sm">
              Name<span className="text-red-500 pl-0.5">*</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              value={formData.name}
              name="name"
              onChange={handleChange}
              aria-invalid={!!errors.nameError}
              aria-describedby={errors.nameError ? "name-error" : undefined}
              className="px-4 py-1.5 focus:outline-2 focus:outline-white bg-zinc-950 rounded-lg border border-gray-700 text-md max-[800px]:text-sm"
            />
            {errors.nameError && (
              <p id="name-error" className="text-red-400 text-sm">
                {errors.nameError}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-md max-[800px]:text-sm">
              Email<span className="text-red-500 pl-0.5">*</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.emailError}
              aria-describedby={errors.emailError ? "email-error" : undefined}
              className="px-4 py-1.5 focus:outline-2 focus:outline-white bg-zinc-950 rounded-lg border border-gray-700 text-md max-[800px]:text-sm"
            />
            {errors.emailError && (
              <p id="email-error" className="text-red-400 text-sm">
                {errors.emailError}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="message" className="text-md max-[800px]:text-sm">
              Message<span className="text-red-500 pl-0.5">*</span>
            </label>
            <textarea
              rows={6}
              placeholder="Your message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.messageError}
              aria-describedby={
                errors.messageError ? "message-error" : undefined
              }
              className="px-4 py-1.5 focus:outline-2 focus:outline-white bg-zinc-950 rounded-lg border border-gray-700 text-md max-[800px]:text-sm"
            />
            {errors.messageError && (
              <p id="message-error" className="text-red-400 text-sm">
                {errors.messageError}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-green-800 bg-green-700 p-2 px-4 rounded-lg font-semibold text-sm cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </form>

      <div className="flex justify-start items-center gap-3 mt-6 max-[800px]:hidden">
        <FaLongArrowAltLeft className="size-6" />
        <p>Alternatively, you can contact me on my socials</p>
      </div>
    </div>
  );
}
