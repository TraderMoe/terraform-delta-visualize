<template>
  <router-view />
</template>

<script lang="ts" setup>
import { SamplePlan } from "./sample/samplePlan";
import { useAppStore } from "./store/app";

let appStore = useAppStore();

if (import.meta.env.VITE_ROOT_PLAN === "" || import.meta.env.VITE_ROOT_PLAN === undefined) {
  appStore.setRootPlan(SamplePlan);
} else {
  appStore.setRootPlan(JSON.parse(JSON.stringify(import.meta.env.VITE_ROOT_PLAN)));
}
</script>
