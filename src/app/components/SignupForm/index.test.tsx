// src/components/LoginForm/index.test.tsx

import { render, screen } from "@testing-library/react";
import SignupForm from ".";

test("회원가입 폼이 올바르게 렌더링 되는지 확인", () => {
  render(<SignupForm />);

  // 1. 이메일, 비밀번호, 비밀번호 확인 입력 필드가 제대로 렌더링되는지 확인하는 테스트 코드를 작성해보세요. 이때 `getByLabelText`를 사용하여 각 입력 필드를 찾아보고, `toBeInTheDocument`를 활용하여 존재 여부를 확인해보세요.
  const emailByLabel = screen.getByLabelText("이메일");
  const passwordByLabel = screen.getByLabelText("비밀번호");
  const passwordConfirmByLabel = screen.getByLabelText("비밀번호 확인");

  // 2. 비밀번호, 비밀번호 확인 입력 필드의 `type`이 `"password"`인지 확인하는 테스트 코드를 작성해보세요. 이때 매쳐는 `toHaveAttribute`를 활용해보세요. 이때 `getByPlaceholderText`를 활용하여 입력 필드를 가져와보세요.
  const emailByPlaceholder = screen.getByPlaceholderText("비밀번호");
  const emailConfirmByPlaceholder = screen.getByPlaceholderText("비밀번호 확인");

  // 3. 회원가입 버튼이 렌더링되는지 확인하세요. 이때 회원가입 버튼은 `getByRole`을 활용하여 가져와보세요.
  const signupButton = screen.getByRole("button", { name: "회원가입" });

  // 모든 요소가 화면에 있는지 확인
  expect(emailByLabel).toBeInTheDocument();
  expect(passwordByLabel).toBeInTheDocument();
  expect(passwordConfirmByLabel).toBeInTheDocument();

  expect(emailByPlaceholder).toBeInTheDocument();
  expect(emailConfirmByPlaceholder).toBeInTheDocument();

  expect(signupButton).toBeInTheDocument();
});
