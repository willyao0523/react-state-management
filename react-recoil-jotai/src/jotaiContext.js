import { atom } from "jotai";

export const textAtom = atom("");

export const charCountAtom = atom((get) => get(textAtom).length);
