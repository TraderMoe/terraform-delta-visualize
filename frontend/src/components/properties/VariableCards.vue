<template>
  <v-container>
    <div class="text-h4 py-2 mb-5">Variables</div>

    <v-row align="center" justify="center">
      <v-card
        v-for="variable in variables"
        class="mx-auto ma-2 pa-2"
        :key="variable.name"
        width="400"
      >
        <v-card-title>{{ variable.name }}</v-card-title>
        <v-card-subtitle>{{ variable.value }}</v-card-subtitle>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useAppStore();
const { rootPlan } = storeToRefs(store);

const variables = computed(() => {
  return Object.entries(rootPlan.value.variables ?? {})
    .map(([key, obj]) => ({
      name: key,
      value: obj.value,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
});
</script>
