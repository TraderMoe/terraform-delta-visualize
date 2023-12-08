<template>
  <v-container class="mb-6">
    <v-row justify="center">
      <v-col cols="3">
        <v-row>
          <v-col cols="12"><div class="text-h2 py-2">Properties</div> </v-col>
          <v-col cols="12"
            ><div class="py-2 text-medium-emphasis">
              <v-icon>mdi mdi-calendar-clock</v-icon> Created:
              {{ formattedTimeStamp }}
            </div>
          </v-col>
          <v-col cols="12">
            
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9">
        <VariableCards />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useDate } from "vuetify/lib/framework.mjs";
import VariableCards from "@/components/properties/VariableCards.vue";

const store = useAppStore();
const date = useDate();
const { rootPlan } = storeToRefs(store);

const formattedTimeStamp = computed(() => {
  let timeStampDate = new Date(rootPlan.value.timestamp);
  return (
    date.format(timeStampDate, "keyboardDate") +
    " " +
    timeStampDate.toLocaleTimeString()
  );
});
</script>
