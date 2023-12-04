<template>
  <router-view />
</template>

<script lang="ts" setup>
import { SamplePlan } from "./sample/samplePlan";
import { useAppStore } from "./store/app";

if (import.meta.env.MODE === "development") {
  let appStore = useAppStore();
  appStore.setRootPlan(SamplePlan);
}
</script>
