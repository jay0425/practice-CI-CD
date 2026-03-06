// src/components/LoginForm/index.test.tsx

import { render, screen } from "@testing-library/react";
import ProductItem from ".";

test("현재 상품의 title과 description에 입력한 내용이 제대로 렌더링이 되는지 확인하기", () => {
  const title = "오프화이트 스니커즈";
  const description = "편하고 가벼운 데일리 스니커즈";

  render(<ProductItem title={title} description={description} />);

  const titleText = screen.getByText(title);
  const descriptionText = screen.getByText(description);

  expect(titleText).toBeInTheDocument();
  expect(descriptionText).toBeInTheDocument();
});

test("증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인하기", () => {
  render(<ProductItem title="" description="" />);

  const minusButton = screen.getByRole("button", { name: "-" });
  const plusButton = screen.getByRole("button", { name: "+" });
  const numberOneText = screen.getByText("1");

  expect(minusButton).toBeInTheDocument();
  expect(plusButton).toBeInTheDocument();
  expect(numberOneText).toBeInTheDocument();
});

test("구매하기 버튼이 존재하는지 확인하기", () => {
  render(<ProductItem title="" description="" />);

  const buyButton = screen.getByRole("button", { name: "구매하기" });
  expect(buyButton).toBeInTheDocument();
});

test("상품이 품절 상태(isSoldOut={true})일 때 “품절” 텍스트가 렌더링되는지 확인하기", () => {
  render(<ProductItem title="" description="" isSoldOut={true} />);

  const titleText = screen.getByText("품절");
  expect(titleText).toBeInTheDocument();
});

test("상품이 품절 상태(isSoldOut={true})일 때 버튼이 비활성화(disabled)되고, CSS 클래스명에 opacity-50과 cursor-not-allowed가 포함되는지 확인하기", () => {
  render(<ProductItem title="" description="" isSoldOut={true} />);

  const numberOneText = screen.getByRole("button", { name: "구매하기" });

  expect(numberOneText).toBeDisabled();
  expect(numberOneText).toHaveClass("opacity-50");
  expect(numberOneText).toHaveClass("cursor-not-allowed");
});
