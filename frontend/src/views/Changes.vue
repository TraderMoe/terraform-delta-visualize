<template>
  <v-container class="mb-6">
    <v-row justify="center">
      <v-col cols="3">
        <v-row>
          <v-col cols="12"
            ><v-heading class="text-h2 py-4">Change</v-heading>
          </v-col>
          <v-col cols="12">
            <v-card
              v-for="change in relevantChanges"
              :key="change.address"
              @click="changeSelection(change)"
              class="mx-auto ma-2"
              :variant="getVariant(change)"
            >
              <template v-slot:title>
                {{ change.name }}
              </template>
              <template v-slot:subtitle>
                {{ change.address }}
              </template>

              <template v-slot:text> {{ change.type }} </template>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9">
        <ResourceDiff :change="selectedChange.change" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ResourceDiff from "@/components/RessourceDiff.vue";
import { useAppStore } from "../store/app";
import { RootPlan } from "../types/RootPlan";
import { ResourceChange } from "../types/ResourceChange";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ResourceDiff,
  },
  setup() {
    const store = useAppStore();
    const rootPlan: RootPlan = store.rootPlan;

    return {
      rootPlan,
    };
  },
  computed: {
    relevantChanges() {
      return this.rootPlan.resource_changes.filter(
        (change) => change.change.actions[0] !== "no-op"
      );
    },
  },
  data() {
    return {
      selectedChange: this.rootPlan.resource_changes[0],
    };
  },
  methods: {
    changeSelection(change: ResourceChange) {
      this.selectedChange = change;
    },
    getVariant(change: ResourceChange) {
      if (change === this.selectedChange) {
        return "outlined";
      }
      return "tonal";
    },
  },
});
</script>
