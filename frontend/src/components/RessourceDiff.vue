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
</template>

<script lang="ts">
import { Change } from "../types/Change";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    change: {
      type: Object as () => Change,
      required: true,
    },
  },
  data: () => ({
    hideUnchangedLines: false,
    sideBySideDiff: true,
  }),
  computed: {
    before() {
      return JSON.stringify(this.change.before, null, 2);
    },
    after() {
      return JSON.stringify(this.change.after, null, 2);
    },
    mode() {
      return this.sideBySideDiff ? "split" : "unified";
    },
  },
});
</script>
