// 이메일
const email = document.querySelector('#email');
const emailMessage = document.querySelector('.email-error-message');
const emailCheck = document.querySelector('.email-check');

// 비밀번호
const password = document.querySelector('#password');
const passwordMessage = document.querySelector('.password-error-message');
const passwordCheck = document.querySelector('.password-check');

// 로그인 버튼
const loginBtn = document.querySelector('#login-btn');

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

// 로그인 버튼
function toggleLoginButton() {
  const isEmailValid = emailPattern.test(email.value);
  const isPasswordValid = password.value.length >= 8;

  if (isEmailValid && isPasswordValid) {
    loginBtn.classList.add('active');
    loginBtn.removeAttribute('disabled');
  } else {
    loginBtn.classList.remove('active');
    loginBtn.setAttribute('disabled', 'true');
  }
}

// 비밀번호 눈 아이콘
const eyeIcon = document.querySelector('.eyeIcon');

eyeIcon.addEventListener('click', function () {
  const isPasswordVisible = password.type === 'password';

  password.type = isPasswordVisible ? 'text' : 'password';

  eyeIcon.src = isPasswordVisible
    ? 'img/input-icon/Property 1=Default.svg'
    : 'img/input-icon/Property 1=Variant2.svg';
});
