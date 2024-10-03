// 이메일
const email = document.querySelector('#email');
const emailMessage = document.querySelector('.email-error-message');
const emailCheck = document.querySelector('.email-check');

// 비밀번호
const password = document.querySelector('#password');
const passwordMessage = document.querySelector('.password-error-message');
const passwordCheck = document.querySelector('.password-check');

//비밀번호 확인
const passwordVerify = document.querySelector('#password-verify');
const passwordDifferentMessage = document.querySelector(
  '.password-different-message'
);

//닉네임
const username = document.querySelector('#username');
const usernameMessage = document.querySelector('.username-error-message');

// 로그인 버튼
const loginBtn = document.querySelector('#login-btn');

//회원가입 버튼
const signupBtn = document.querySelector('#signup-btn');

// 눈 이미지
const eyeOff = document.querySelector('.eye-off');
const eyeOn = document.querySelector('.eye-on');
const verifyEyeOff = document.querySelector('.verify-eye-off');
const verifyEyeOn = document.querySelector('.verify-eye-on');

// 이메일 형식
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 이메일
email.addEventListener('input', function () {
  // 값 없는 경우
  if (!email.value) {
    email.classList.add('error');
    emailMessage.style.display = 'block';
    emailMessage.innerHTML = '이메일을 입력해주세요.';
  }
  // 형식에 맞지 않는 경우
  else if (!emailPattern.test(email.value)) {
    email.classList.add('error');
    emailMessage.style.display = 'block';
    emailMessage.innerHTML = '잘못된 이메일 형식입니다.';
  } else {
    email.classList.remove('error');
    emailMessage.style.display = 'none';
    emailMessage.innerHTML = '';
  }
  toggleLoginButton();
});

// 비밀번호
password.addEventListener('input', function () {
  // 값 없는 경우
  if (!password.value) {
    password.classList.add('error');
    passwordMessage.style.display = 'block';
    passwordMessage.innerHTML = '비밀번호를 입력해주세요.';
  }
  // 8자 미만인 경우
  else if (password.value.length < 8) {
    password.classList.add('error');
    passwordMessage.style.display = 'block';
    passwordMessage.innerHTML = '비밀번호를 8자 이상 입력해주세요.';
  } else {
    password.classList.remove('error');
    passwordMessage.style.display = 'none';
    passwordMessage.innerHTML = '';
  }
  toggleLoginButton();
});

// 비밀번호 확인
passwordVerify.addEventListener('input', function () {
  if (password.value != passwordVerify.value) {
    passwordVerify.classList.add('error');
    passwordDifferentMessage.style.display = 'block';
    passwordDifferentMessage.innerHTML = '비밀번호가 일치하지 않습니다.';
  } else {
    passwordVerify.classList.remove('error');
    passwordDifferentMessage.style.display = 'none';
  }
  toggleSinupButton();
});

// 닉네임
username.addEventListener('input', function () {
  if (!username.value) {
    username.classList.add('error');
    usernameMessage.style.display = 'block';
    usernameMessage.innerHTML = '닉네임을 입력해주세요';
  } else {
    username.classList.remove('error');
    usernameMessage.style.display = 'none';
  }
  toggleSinupButton();
});

//회원가입 버튼
function toggleSinupButton() {
  const isEmailValid = emailPattern.test(email.value);
  const isPasswordValid = password.value.length >= 8;
  const isPasswordVerifyValid = passwordVerify.value === password.value;
  const isUsernameValid = username.value.trim() !== '';

  if (
    isEmailValid &&
    isPasswordValid &&
    isPasswordVerifyValid &&
    isUsernameValid
  ) {
    signupBtn.classList.add('active');
    loginBtn.removeAttribute('disabled');
  } else {
    signupBtn.classList.remove('active');
    signupBtn.setAttribute('disabled', 'true');
  }
}

// 비밀번호 눈 아이콘
const eyeIcon = document.querySelector('.eyeIcon');
const verifyEyeIcon = document.querySelector('.verifyEyeIcon');

eyeIcon.addEventListener('click', function () {
  const isPasswordVisible = password.type === 'password';

  password.type = isPasswordVisible ? 'text' : 'password';

  eyeIcon.src = isPasswordVisible
    ? 'img/input-icon/Property 1=Default.svg'
    : 'img/input-icon/Property 1=Variant2.svg';
});

verifyEyeIcon.addEventListener('click', function () {
  const isPasswordVerifyVisible = passwordVerify.type === 'password';

  passwordVerify.type = isPasswordVerifyVisible ? 'text' : 'password';

  verifyEyeIcon.src = isPasswordVerifyVisible
    ? 'img/input-icon/Property 1=Default.svg'
    : 'img/input-icon/Property 1=Variant2.svg';
});
