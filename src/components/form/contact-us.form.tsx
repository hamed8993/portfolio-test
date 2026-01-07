"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";

type FormStateType = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUsForm() {
  const t = useTranslations();

  // -----------------------------
  // action function for form submit
  // -----------------------------
  const actionFn = (
    prevState: FormStateType,
    formData: FormData
  ): FormStateType => {
    // Type-safe extraction from FormData
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const data: FormStateType = {
      name: typeof name === "string" ? name : "",
      email: typeof email === "string" ? email : "",
      message: typeof message === "string" ? message : "",
    };

    console.log("Form submitted:", data);

    return data;
  };

  // -----------------------------
  // initial form state
  // -----------------------------
  const initialState: FormStateType = {
    name: "",
    email: "",
    message: "",
  };

  const [state, handleForm, isLoading] = useActionState<
    FormStateType,
    FormData
  >(actionFn, initialState);

  console.log("Current state:", state);

  // -----------------------------
  // form JSX
  // -----------------------------
  return (
    <form action={handleForm} className="mt-12 flex flex-col gap-8">
      {/* Name */}
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">
          {t("contact-us.labels.name")}
        </span>
        <input
          type="text"
          name="name"
          placeholder={t("contact-us.placeholders.name")}
          className="bg-primary-600 py-4 px-6 placeholder:text-neutral-300 text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      {/* Email */}
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">
          {t("contact-us.labels.email")}
        </span>
        <input
          type="email"
          name="email"
          placeholder={t("contact-us.placeholders.email")}
          className="bg-primary-600 py-4 px-6 placeholder:text-neutral-300 text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      {/* Message */}
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">
          {t("contact-us.labels.message")}
        </span>
        <textarea
          rows={7}
          name="message"
          placeholder={t("contact-us.placeholders.message")}
          className="bg-primary-600 py-4 px-6 placeholder:text-neutral-300 text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="cursor-pointer bg-primary-600 py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary-900"
      >
        {isLoading ? t("contact-us.btn-loading") : t("contact-us.btn-label")}
      </button>
    </form>
  );
}
