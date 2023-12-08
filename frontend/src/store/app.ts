// Utilities
import { defineStore } from "pinia";
import { RootPlan } from "../types/RootPlan";
import { ResourceChange } from "../types/ResourceChange";

export const useAppStore = defineStore("app", {
  state: () => ({
    rootPlan: {} as RootPlan,
    selectedChange: {} as ResourceChange,
    offlineMode: false,
  }),
  actions: {
    setRootPlan(root: RootPlan) {
      this.rootPlan = root;
      this.selectedChange = root.resource_changes[0];
    },
    setSelectedChange(change: ResourceChange) {
      this.selectedChange = change;
    },
    setOfflineMode(offline: boolean) {
      this.offlineMode = offline;
    },
  },
});
