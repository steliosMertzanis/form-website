import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import Success from "./Success";

const FormDisplay = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const [userClickedButton, setUserClickedButton] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const handleResize = () => {
    if (window.innerWidth <= 600 && !userClickedButton) {
      setMobileDisplay(true);
    } else {
      setMobileDisplay(false);
    }
  };

  const handleButtonClick = () => {
    setUserClickedButton(true);
    setMobileDisplay(false);
  };

  const ButtonClose = () => {
    setMobileDisplay(mobileDisplay);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [userClickedButton]);

  return (
    <div className={mobileDisplay ? "form-display mobile " : "form-display"}>
      <div className="mobile-active">
        <button className="started-button" onClick={handleButtonClick}>
          Get Started
        </button>
      </div>
      <div className="final-form">
        {!isSubmitted ? (
          <SignUp submitForm={submitForm} onClose={ButtonClose} />
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
};

export default FormDisplay;
