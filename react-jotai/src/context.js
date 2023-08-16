import { atom } from "jotai";

export const countAtom = atom(0);
countAtom.onMount = (setCount) => {
  console.log("count atom starts to be used");
  const onUnmount = () => {
    console.log("count atom ends to be used");
  };
  return onUnmount;
};

export const count1Atom = atom(0);
export const count2Atom = atom(0);
export const totalAtom = atom((get) => get(count1Atom) + get(count2Atom));

// export const doubledCountAtom = atom((get) => get(countAtom) * 2);

export const doubledCountAtom = atom(
  (get) => get(countAtom) * 2,
  (get, set, arg) => set(countAtom, arg / 2)
);

export const incrementCountAtom = atom(null, (get, set) =>
  set(countAtom, (c) => c + 1)
);

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

export const todoAtom = atom({});

export const todoAtomsAtom = atom([]);
