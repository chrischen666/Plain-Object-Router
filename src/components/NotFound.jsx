import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// useNavigate是導航hook

export function NotFound() {
  // react hook會回傳一個函式並賦予函式到navigate變數上
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // 呼叫navigate並帶入參數/
      navigate("/");
    }, 2000);
  }, []);
  return <>找不到頁面</>;
}
