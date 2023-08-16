import create from "zustand";

export type StoreState = {
  count1: number;
  count2: number;
  total: number;
  inc1: () => void;
  inc2: () => void;
};

export const useStore = create<StoreState>((set) => ({
  count1: 0,
  count2: 0,
  total: 0,
  inc1: () =>
    set((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
      total: prev.count1 + 1 + prev.count2,
    })),
  inc2: () =>
    set((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
      total: prev.count1 + prev.count2 + 1,
    })),
}));
