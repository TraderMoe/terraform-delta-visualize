<template>
  <v-container>
    <v-card
      v-for="resourceChange in relevantResourceChanges"
      :key="resourceChange.address"
      @click="changeSelection(resourceChange)"
      class="mx-auto ma-2"
      :variant="getVariant(resourceChange)"
    >
      <template v-slot:prepend>
        <v-icon
          :color="getColor(resourceChange.change.actions)"
          :icon="getIcon(resourceChange.change.actions)"
          :title="resourceChange.change.actions"
        />
      </template>
      <template v-slot:title>
        {{ resourceChange.name }}
      </template>
      <template v-slot:subtitle>
        {{ resourceChange.type }}
      </template>

      <template v-slot:text>{{ resourceChange.address }}</template>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ResourceChange } from "@/types/ResourceChange";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useAppStore();
const { selectedChange } = storeToRefs(store);

const relevantResourceChanges = computed(() => {
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
  if (isDangerousChange(actions)) {
    return "error";
  }
  if (isFriendlyChange(actions)) {
    return "success";
  }
  return "warning";
}

function isFriendlyChange(actions: string[]) {
  return isCreate(actions) || isRead(actions);
}

function isDangerousChange(actions: string[]) {
  return isDelete(actions) || isDeleteCreate(actions);
}

function getIcon(actions: string[]) {
  if (isDeleteCreate(actions)) {
    return "mdi mdi-swap-horizontal";
  }
  if (isDelete(actions)) {
    return "mdi mdi-delete";
  }
  if (isCreate(actions)) {
    return "mdi mdi-plus";
  }
  if (isUpdate(actions)) {
    return "mdi mdi-pencil";
  }
  if (isRead(actions)) {
    return "mdi mdi-file-search-outline";
  }
  return "mdi mdi-alert";
}

function isRead(actions: string[]) {
  return actions.includes("read");
}

function isUpdate(actions: string[]) {
  return actions.includes("update");
}

function isCreate(actions: string[]) {
  return actions.includes("create");
}

function isDelete(actions: string[]) {
  return actions.includes("delete");
}

function isDeleteCreate(actions: string[]) {
  return actions.includes("delete") && actions.includes("create");
}
</script>
