<template>
  <v-file-input
    clearable
    variant="outlined"
    class="full-width"
    label="plan.json"
    accept=".json"
    @change="onFileChange"
    :loading="uploading"
  ></v-file-input>
</template>

<script lang="ts">
import { useAppStore } from "../store/app";
import { RootPlan } from "../types/RootPlan";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useAppStore();
    return { store };
  },
  computed: {},
  data() {
    return {
      uploading: false,
    };
  },
  methods: {
    onFileChange(e: any) {
      this.uploading = true;
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.storePlan(files[0] as Blob);
    },
    storePlan(file: Blob) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let json = JSON.parse(e.target.result) as RootPlan;
        this.store.setRootPlan(json);
        this.uploading = false;
        this.$router.push("/changes");
      };
      reader.readAsText(file);
    },
  },
});
</script>
