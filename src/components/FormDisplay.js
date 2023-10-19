import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import Success from "./Success";

const FormDisplay = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-display">
      <div className="final-form">
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <Success />}
      </div>
    </div>
  );
};

export default FormDisplay;
