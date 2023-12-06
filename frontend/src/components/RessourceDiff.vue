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
      <v-row justify="center">
        <v-col cols="auto">
          <div class="text-h4">{{ actionString }}</div>
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
</script>
