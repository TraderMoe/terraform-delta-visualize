<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="auto">
          <v-checkbox
            v-model="hideUnchangedLines"
            label="Hide unchanged Lines"
          ></v-checkbox>
        </v-col>
        <v-col cols="auto">
          <v-checkbox
            v-model="sideBySideDiff"
            label="Side by side diff"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <div class="text-h4">
            <v-icon
              :color="getColor(change.actions)"
              :icon="getIcon(change.actions)"
              :title="change.actions"
            /> {{ actionString }}
          </div>
        </v-col>
        <v-col cols="12">
          <Diff
            class="diff"
            :mode="mode"
            :folding="hideUnchangedLines"
            language="json"
            :prev="before"
            :current="after"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { selectedChange } = storeToRefs(store);

const change = computed(() => {
  return selectedChange.value.change;
});

const hideUnchangedLines = ref(false);
const sideBySideDiff = ref(true);
const before = computed(() => {
  return JSON.stringify(change.value.before, null, 2);
});
const after = computed(() => {
  return JSON.stringify(change.value.after, null, 2);
});
const mode = computed(() => {
  return sideBySideDiff.value ? "split" : "unified";
});
const actionString = computed(() => {
  return change.value.actions.join(", ");
});

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
