const otpInputFunc = () => {
  const inputDivId = document.getElementById("generate_otp_list_id");
  const storeOtp = document.getElementById("random_otp_id");
  const conformationMessage = document.getElementById("otp_validation_msg_id");
  let otpCollect = "";
  let otp = otpGenerator();
  storeOtp.innerText = `Your OTP is: ${otp}`;

  inputDivId.addEventListener("input", (e) => {
    let data = e.target.value;

    // OTP Collect form Input Field
    otpCollect = [...inputDivId.children].map((input) => input.value).join("");

    // Logic for otp Match
    if (otp === parseInt(otpCollect, 10)) {
      conformationMessage.innerText = `Your OTP is Correct! `;
      conformationMessage.style.color = "#008000";
    }

    if (otp !== parseInt(otpCollect, 10)) {
      conformationMessage.innerText = `Invalid OTP`;
      conformationMessage.style.color = "#ff0000";
    }

    if (isNaN(data)) {
      // OTP Input Number Validation Implement
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

const otpGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 1000 + 9000);
  return randomNumber;
};

otpInputFunc();
