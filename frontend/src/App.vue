<template>
  <router-view />
</template>

<script lang="ts" setup>
import { SamplePlan } from "./sample/samplePlan";
import { useAppStore } from "./store/app";
import { RootPlan } from "./types/RootPlan";

let appStore = useAppStore();

console.log("VITE_ROOT_PLAN", import.meta.env.VITE_ROOT_PLAN);

if (
  import.meta.env.VITE_ROOT_PLAN === "" ||
  import.meta.env.VITE_ROOT_PLAN === undefined
) {
  appStore.setRootPlan(SamplePlan);
} else {
  const rootPlan: RootPlan = JSON.parse(
    import.meta.env.VITE_ROOT_PLAN
  );
  appStore.setRootPlan(rootPlan);
}
</script>
