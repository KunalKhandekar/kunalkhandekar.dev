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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear the field-specific error while typing
    setErrors((prev) => ({ ...prev, [`${name}Error`]: "" }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({ nameError: "", emailError: "", messageError: "" });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // reset flags
    setIsSuccess(false);
    setErrors({ nameError: "", emailError: "", messageError: "" });

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    let localErrors = { nameError: "", emailError: "", messageError: "" };
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
      // focus first invalid field
      if (localErrors.nameError) {
        document.getElementById("name")?.focus();
      } else if (localErrors.emailError) {
        document.getElementById("email")?.focus();
      } else {
        document.getElementById("message")?.focus();
      }
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/contact-form`,
        {
          headers: {
            "content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ name, email, message }),
        }
      );

      const data = await res.json();

      if (data.success) {
        resetForm();
        setIsSuccess(true);
      } else {
        throw new Error(data.message || "Failed to send message");
      }

      setTimeout(() => setIsSuccess(false), 3000);
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
            <label
              htmlFor="name"
              className="text-md max-[800px]:text-sm text-gray-700 dark:text-gray-200"
            >
              Name<span className="text-red-500 pl-0.5">*</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.nameError}
              aria-describedby={errors.nameError ? "name-error" : undefined}
              className={
                "w-full px-4 py-1.5 rounded-lg transition-shadow duration-150 outline-none " +
                "bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 " +
                "border border-gray-300 dark:border-zinc-700 placeholder-gray-500 dark:placeholder-gray-400 " +
                "focus:ring-2 focus:ring-blue-700 focus:ring-offset-0"
              }
            />
            {errors.nameError && (
              <p id="name-error" className="text-red-400 text-sm">
                {errors.nameError}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-md max-[800px]:text-sm text-gray-700 dark:text-gray-200"
            >
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
              className={
                "w-full px-4 py-1.5 rounded-lg transition-shadow duration-150 outline-none " +
                "bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 " +
                "border border-gray-300 dark:border-zinc-700 placeholder-gray-500 dark:placeholder-gray-400 " +
                "focus:ring-2 focus:ring-blue-700 focus:ring-offset-0"
              }
            />
            {errors.emailError && (
              <p id="email-error" className="text-red-400 text-sm">
                {errors.emailError}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-md max-[800px]:text-sm text-gray-700 dark:text-gray-200"
            >
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
              className={
                "w-full px-4 py-1.5 rounded-lg transition-shadow duration-150 outline-none resize-y " +
                "bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 " +
                "border border-gray-300 dark:border-zinc-700 placeholder-gray-500 dark:placeholder-gray-400 " +
                "focus:ring-2 focus:ring-blue-700 focus:ring-offset-0"
              }
            />
            {errors.messageError && (
              <p id="message-error" className="text-red-400 text-sm">
                {errors.messageError}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={
              "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold text-sm " +
              "transition-opacity duration-150 " +
              (isSubmitting
                ? "bg-green-600 border border-green-700 text-white opacity-70 cursor-wait"
                : "bg-green-700 border border-green-800 text-white hover:brightness-95")
            }
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>

          {isSuccess && (
            <div
              role="status"
              aria-live="polite"
              className="text-sm text-green-600 dark:text-green-300"
            >
              Message sent!
            </div>
          )}
        </div>
      </form>

      <div className="flex justify-start items-center gap-3 mt-6 max-[800px]:hidden text-gray-700 dark:text-gray-300">
        <FaLongArrowAltLeft className="size-6" />
        <p>Alternatively, you can contact me on my socials</p>
      </div>
    </div>
  );
}
