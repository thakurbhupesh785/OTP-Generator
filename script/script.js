const otpBox = document.querySelector(".password");
const length = 6;

const numbers = '0123456789';

function generateOTP () {
  let otp = '' ;

  otp += numbers[Math.floor(Math.random() * numbers.length)];

  while (length > otp.length) {
    otp += numbers[Math.floor(Math.random() * numbers.length)];
  }
  otpBox.value = otp;
}

function copyOTP () {
  otpBox.select();
  document.execCommand("copy");
}