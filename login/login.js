const signupForm = document.querySelector(".sign-up-form");

const onSubmit = (event) => {
  try {
    event.preventDefault();

    const username = document.querySelector(".username").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const passwordCheck = document.querySelector(".password-check").value;

    usernameCheck(username);

    console.log(`
    아이디: ${username}
    이메일: ${email}
    비밀번호: ${password}
    확인: ${passwordCheck}
  `);
  } catch (error) {
    if (error instanceof Error) console.error(error.stack);
  }
};

const usernameCheck = (username) => {
  if (username.length < 6) throw new Error("아이디는 6자리 이상이어야합니다.");
};

signupForm.addEventListener("submit", (event) => onSubmit(event));
