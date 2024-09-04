import { useState } from "react";

export const UnControlledForm = () => {
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = (e) => {
    setSubmitError("");
    e.preventDefault();
    console.log("Name", e.target.firstname.value);
    console.log("Lastname", e.target.lastname.value);
    console.log("Email", e.target.email.value);

    if (e.target.firstname.value < 5) {
      setSubmitError("Dit navn er for kort");
    }
  };

  return (
    <>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>First Name</label>
          <input type="text" name="firstname" />

          <label>Last Name</label>
          <input type="text" name="lastname" />

          <label>Email</label>
          <input type="email" name="email" />

          <input type="submit" value="Submit"></input>
        </form>
        {submitError ? <p>{submitError}</p> : null}
      </section>
    </>
  );
};
