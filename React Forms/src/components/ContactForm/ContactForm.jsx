import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import style from "./ContactForm.module.scss";

//Destructuring the errors value from formState at line 11
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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

  useEffect(() => {
    console.log(errors);
  }, []);

  const phoneRegex = /^(\d{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2})$/;

  const EmailregEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
      <form className={style.formStyling} onSubmit={handleSubmit(handleForm)}>
        <input
          {...register("fullname", {
            required: "Full name is required",
            pattern: {
              message: "Invalid name format",
            },
            minLength: {
              value: 6,
              message: "Must be at least 6 characters",
            },
          })}
          placeholder="Full Name"
        />
        {errors.fullname ? <span>{errors.fullname.message}</span> : null}
        <input
          type="number"
          {...register("phonenumber", {
            required: "Phonenumber is required",
            pattern: {
              value: phoneRegex,
              message: "Must contain 8 numbers",
            },
          })}
          placeholder="Phonenumber"
        />
        {errors.phonenumber ? <span>{errors.phonenumber.message}</span> : null}
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EmailregEx,
              message: "Must contain a @ and a domain (John@doe.com)",
            },
          })}
          placeholder="None@fake.com"
        />
        {errors.email ? <span>{errors.email.message}</span> : null}
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
