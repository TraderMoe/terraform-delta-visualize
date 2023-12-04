// Utilities
import { defineStore } from "pinia";
import { RootPlan } from "../types/RootPlan";

export const useAppStore = defineStore("app", {
  state: () => ({
    rootPlan: {} as RootPlan,
  }),
  actions: {
    setRootPlan(root: RootPlan) {
      this.rootPlan = root;
    },
  },
});
