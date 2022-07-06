import { useContext } from "react";
import { ColorContext } from "../components/ColorProvider";

export default function useColors() {
  return useContext(ColorContext);
}
