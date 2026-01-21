import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

export const useQuestion = () => useContext(QuestionContext);
