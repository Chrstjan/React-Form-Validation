import "./App.scss";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ControlledForm } from "./components/ControlledForm/ControlledForm";
import { UnControlledForm } from "./components/UnControlledForm/ControlledForm";

function App() {
  return (
    <>
      {/* <UnControlledForm /> */}
      {/* <ControlledForm /> */}
      <ContactForm />
    </>
  );
}

export default App;
