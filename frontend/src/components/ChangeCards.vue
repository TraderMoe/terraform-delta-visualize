<template>
  <v-container>
    <v-card
      v-for="change in relevantChanges"
      :key="change.address"
      @click="changeSelection(change)"
      class="mx-auto ma-2"
      :variant="getVariant(change)"
    >
      <template v-slot:prepend>
        <v-icon
          :color="getColor(change.change.actions)"
          :icon="getIcon(change.change.actions)"
        />
      </template>
      <template v-slot:title>
        {{ change.name }}
      </template>
      <template v-slot:subtitle>
        {{ change.address }}
      </template>

      <template v-slot:text>{{ change.type }}</template>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ResourceChange } from "../types/ResourceChange";
import { toRefs } from "vue";
import { useAppStore } from "../store/app";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useAppStore();
const { selectedChange } = storeToRefs(store);

const relevantChanges = computed(() => {
  return store.rootPlan.resource_changes.filter((change) => {
    return "no-op" !== change.change.actions[0];
  });
});

function changeSelection(change: ResourceChange) {
  store.setSelectedChange(change);
}
function getVariant(change: ResourceChange) {
  if (change.address === selectedChange.value.address) {
    return "outlined";
  }
  return "flat";
}
function getColor(actions: string[]) {
  if (actions.includes("delete") && actions.includes("create")) {
    return "warning";
  }
  if (actions.includes("delete")) {
    return "error";
  }
  if (actions.includes("create")) {
    return "success";
  }
  return "warning";
}
function getIcon(actions: string[]) {
  if (actions.includes("delete") && actions.includes("create")) {
    return "mdi mdi-swap-horizontal";
  }
  if (actions.includes("delete")) {
    return "mdi mdi-delete";
  }
  if (actions.includes("create")) {
    return "mdi mdi-plus";
  }
  if (actions.includes("update")) {
    return "mdi mdi-pencil";
  }
  return "mdi mdi-alert";
}
</script>
