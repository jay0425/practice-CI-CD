// src/components/PassowordInput/index.tsx

"use client";

import { useState } from "react";

export const PasswordInput = () => {
  const [a, setA] = useState(true);

  const onClickHandler = () => {
    setA(!a);
  };

  return (
    <div>
      <label htmlFor="passwordInput">비밀번호</label>
      <input
        type={a ? "password" : "text"}
        id="passwordInput"
        placeholder="비밀번호를 입력하세요."
      />
      <button onClick={onClickHandler}>{a ? "보기" : "숨기기"}</button>
    </div>
  );
};
