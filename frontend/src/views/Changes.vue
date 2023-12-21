<template>
  <v-container class="mb-6">
    <v-row justify="center">
      <v-col :sm="12" :md="3">
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
      <v-col :sm="12" :md="9">
        <ResourceDiff :change="selectedChange.change" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import ResourceDiff from "../components/changes/RessourceDiff.vue";
import ChangeCard from "../components/changes/ChangeCards.vue";
import { useDate } from "vuetify";
import { useAppStore } from "../store/app";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const store = useAppStore();
const date = useDate();
const { rootPlan, selectedChange } = storeToRefs(store);

const relevantChanges = computed(() => {
  return rootPlan.value.resource_changes.filter(
    (change) => change.change.actions[0] !== "no-op"
  );
});
const formattedTimeStamp = computed(() => {
  let timeStampDate = new Date(rootPlan.value.timestamp);
  return (
    date.format(timeStampDate, "keyboardDate") +
    " " +
    timeStampDate.toLocaleTimeString()
  );
});
</script>
