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

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAppStore } from "../store/app";
import { RootPlan } from "../types/RootPlan";
import { ref } from "vue";

const store = useAppStore();
const router = useRouter();

const uploading = ref(false);

function onFileChange(e: any) {
  uploading.value = true;
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  storePlan(files[0] as Blob);
}

function storePlan(file: Blob) {
  let reader = new FileReader();
  reader.onload = (e: ProgressEvent<FileReader>) => {
    let json: RootPlan = {
      format_version: "",
      terraform_version: "",
      resource_changes: [],
      timestamp: "",
    };
    
    if (e.target && typeof e.target.result === "string") {
      json = JSON.parse(e.target.result) as RootPlan;
    }

    store.setRootPlan(json);
    uploading.value = false;
    router.push("/changes");
  };
  reader.readAsText(file);
}
</script>
