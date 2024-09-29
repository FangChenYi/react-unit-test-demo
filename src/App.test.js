import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders a button and handles click", () => {
  // 暫時禁用 console.error
  const originalError = console.error;
  console.error = jest.fn();

  // 渲染 App 組件
  render(<App />);

  // 查找初始的按鈕，確認文字為 "Click me"
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();

  // 模擬點擊按鈕
  fireEvent.click(buttonElement);

  // 點擊後確認按鈕文字改變為 "Button Clicked!"
  expect(buttonElement).toHaveTextContent("Button Clicked!");

  // 恢復 console.error
  console.error = originalError;
});
