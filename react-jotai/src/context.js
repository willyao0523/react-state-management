import { atom } from "jotai";

export const countAtom = atom(0);

export const count1Atom = atom(0);
export const count2Atom = atom(0);
export const totalAtom = atom((get) => get(count1Atom) + get(count2Atom));

export const doubledCountAtom = atom((get) => get(countAtom) * 2);

export const firstNameAtom = atom("React");
export const lastNameAtom = atom("Hooks");
export const ageAtom = atom(3);

export const personAtom = atom((get) => ({
  firstName: get(firstNameAtom),
  lastName: get(lastNameAtom),
  ageA: get(ageAtom),
}));

export const fullNameAtom = atom((get) => ({
  firstName: get(firstNameAtom),
  lastName: get(lastNameAtom),
}));

export const todosAtom = atom([]);
