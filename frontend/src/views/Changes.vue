<template>
  <v-container class="mb-6">
    <v-row justify="center">
      <v-col cols="3">
        <v-row>
          <v-col cols="12"><div class="text-h2 py-2">Change</div> </v-col>
          <v-col cols="12"
            ><div class="py-2 text-medium-emphasis">
              <v-icon>mdi mdi-calendar-clock</v-icon> Created:
              {{ formattedTimeStamp }}
            </div>
          </v-col>
          <v-col cols="12">
            <ChangeCard :relevant-changes="relevantChanges" />
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
import ResourceDiff from "../components/RessourceDiff.vue";
import ChangeCard from "../components/ChangeCards.vue";
import { useDate } from "vuetify";
import { useAppStore } from "../store/app";
import { RootPlan } from "../types/RootPlan";
import { ResourceChange } from "../types/ResourceChange";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ResourceDiff,
    ChangeCard,
  },
  setup() {
    const store = useAppStore();
    const date = useDate();
    const rootPlan: RootPlan = store.rootPlan;
    const selectedChange: ResourceChange = store.selectedChange;
    return {
      rootPlan,
      date,
      store,
      selectedChange,
    };
  },
  computed: {
    relevantChanges() {
      return this.rootPlan.resource_changes.filter(
        (change) => change.change.actions[0] !== "no-op"
      );
    },
    formattedTimeStamp() {
      let timeStampDate = new Date(this.rootPlan.timestamp);
      return (
        this.date.format(timeStampDate, "keyboardDate") +
        " " +
        timeStampDate.toLocaleTimeString()
      );
    },
  },
});
</script>
