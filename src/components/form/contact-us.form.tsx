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

  const actionFn = (
    prevState: FormStateType | undefined,
    formData: FormData
  ) => {
    // handleApi(
    //   formData.get("name"),
    //   formData.get("email"),
    //   formData.get("message")
    // );
    console.log(
      ">>>",
      formData.get("name"),
      formData.get("email"),
      formData.get("message")
    );
  };

  const [state, handleForm, isLoading] = useActionState<
    FormStateType,
    FormData
  >(actionFn, undefined);

  console.log("state>>", state);

  return (
    <form action={handleForm} className="mt-12 flex flex-col gap-8">
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

      <button
        type="submit"
        className="cursor-pointer bg-primary-600 py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary-900"
      >
        {isLoading ? t("contact-us.btn-loading") : t("contact-us.btn-label")}
      </button>
    </form>
  );
}
