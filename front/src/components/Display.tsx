import { LetterCtx } from "../context/LetterCtx";
import { useContext } from "react";

export default function Display() {
  const { input } = useContext(LetterCtx);
  return <div>{input}</div>;
}
