<template>
  <router-view />
</template>

<script lang="ts" setup>
import { SamplePlan } from "./sample/samplePlan";
import { useAppStore } from "./store/app";

let appStore = useAppStore();
appStore.setRootPlan(SamplePlan);
</script>
