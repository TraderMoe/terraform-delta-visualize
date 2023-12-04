// Utilities
import { defineStore } from "pinia";
import { RootPlan } from "../types/RootPlan";
import { ResourceChange } from "../types/ResourceChange";

export const useAppStore = defineStore("app", {
  state: () => ({
    rootPlan: {} as RootPlan,
    selectedChange: {} as ResourceChange,
  }),
  actions: {
    setRootPlan(root: RootPlan) {
      this.rootPlan = root;
    },
    setSelectedChange(change: ResourceChange) {
      this.selectedChange = change;
    },
  },
});
