<template>
  <router-view />
</template>

<script lang="ts" setup>
import { SamplePlan } from "./sample/samplePlan";
import { useAppStore } from "./store/app";

let appStore = useAppStore();

console.log(import.meta.env);

if (import.meta.env.JSON_DATA != null) {
  console.log("Using JSON data from environment variable");
  appStore.setRootPlan(JSON.parse(JSON.stringify(import.meta.env.JSON_DATA)));
} else {
  appStore.setRootPlan(SamplePlan);
}
</script>
