import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./ContactForm.module.scss";

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");
  const [formSent, setFormSent] = useState(false);

  const handleForm = (data) => {
    console.log(data);
    setData(data);
    setFormSent(true);
  };

  const handleReset = () => {
    setFormSent(false);
    let emptyForm = {};
    setData(emptyForm);
    reset();
  };

  const fullNameRegex =
    /^[A-ZÆØÅ][a-zæøåA-ZÆØÅ' -]*[a-zæøåA-ZÆØÅ]?(?:\s[A-ZÆØÅ][a-zæøåA-ZÆØÅ' -]*[a-zæøåA-ZÆØÅ]?)?$/;

  const phoneRegex = /^(\d{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2})$/;

  const EmailregEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
      <form className={style.formStyling} onSubmit={handleSubmit(handleForm)}>
        <input
          {...register("fullname", {
            required: "Must be at least 6 characters",
            minLength: 10,
          })}
          placeholder="Full Name"
        />
        <input
          type="number"
          {...register("phonenumber", {
            required: true,
            pattern: phoneRegex,
          })}
          placeholder="Phonenumber"
        />
        <input
          type="email"
          {...register("email", { required: true, pattern: EmailregEx })}
          placeholder="None@fake.com"
        />
        <textarea
          {...register("comment")}
          placeholder="Your Message"
        ></textarea>
        <select {...register("contact")}>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
        </select>
        <input type="submit" value="Send" />
        <input onClick={handleReset} type="reset" value="Reset" />
      </form>
      {formSent ? (
        <div>
          <p>FullName: {data.fullname}</p>
          <p>PhoneNumber: {data.phonenumber}</p>
          <p>Email: {data.email}</p>
          <p>Message: {data.comment}</p>
          <p>Contact: {data.contact}</p>
        </div>
      ) : null}
    </>
  );
};
