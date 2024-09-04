import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setEmailError] = useState("");

  console.log(firstName);

  useEffect(() => {
    const regEx = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~])(?=.{6,}).*$/;
    const isValid = regEx.test(firstName);

    if (isValid) {
      console.log("Valid Name");
      setUserNameError("");
    } else {
      setUserNameError(
        "Dit navn skal være mindst 6 bogstaver langt og indeholde et tegn."
      );
    }
  }, [firstName]);

  useEffect(() => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regEx.test(email);

    if (isValid) {
      console.log("Email Valid");
      setEmailError("");
    } else {
      console.log("Not valid");
      setEmailError("Email skal være en gyldig email (john@mail.com)");
    }
  }, [email]);

  return (
    <>
      <section>
        <form>
          <label>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstname"
          />

          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
          />
        </form>
        <p>{userNameError}</p>
        <p>{userEmailError}</p>
        <button>Send</button>
      </section>
    </>
  );
};
