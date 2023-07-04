import { atom } from "recoil";

export const arrayState = atom({
  key: "arrayState",
  default: Array(24).fill(0),
});
