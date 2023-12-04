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

<script lang="ts">
import { useAppStore } from "@/store/app";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const store = useAppStore();
    const { selectedChange } = storeToRefs(store);
    return { change: selectedChange.value.change };
  },
  //TODO STILL HANDLE REACTIVITY HERE :(
  data: () => ({
    hideUnchangedLines: false,
    sideBySideDiff: true,
  }),
  computed: {
    before() {
      return JSON.stringify(this.selectedChange.before, null, 2);
    },
    after() {
      return JSON.stringify(this.selectedChange.after, null, 2);
    },
    mode() {
      return this.sideBySideDiff ? "split" : "unified";
    },
    actionString() {
      return this.selectedChange.actions.join(", ");
    },
    selectedChange() {
      return this.change;
    },
  },
});
</script>
