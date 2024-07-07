const otpInputFunc = () => {
  const inputDivId = document.getElementById("generate_otp_list_id");
  let otpCollect = "";

  inputDivId.addEventListener("input", (e) => {
    let data = e.target.value;

    // OTP Collect form Input Field
    otpCollect = [...inputDivId.children].map((input) => input.value).join("");

    // OTP Input Number Validation Implement
    if (isNaN(data)) {
      return (e.target.value = "");
    }

    // if input value true, focus will move to next input Field
    [...inputDivId.children].forEach((list) => {
      if (list.value && list.nextElementSibling) {
        list.nextElementSibling.focus();
      }

      if (!e.target.value && e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
      }
    });
  });
};

otpInputFunc();
