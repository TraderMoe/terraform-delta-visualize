<template>
  <v-navigation-drawer expand-on-hover rail width="350" permanent>

    <v-list>
      <v-list-item
        title="Terraform Delta Visualizer"
        prepend-icon="mdi mdi-vector-difference"
        subtitle="Visualize your Terraform plan"
      />
    </v-list>

    <v-divider class="pb-10" />

    <v-list-item
      :to="navigationItem.path"
      link
      v-for="navigationItem in getItems()"
      :title="getTitle(navigationItem)"
      :key="getTitle(navigationItem)"
      :prepend-icon="getIcon(navigationItem)"
    ></v-list-item>

    <template v-slot:append>
      <v-list-item>
          <v-list-item-title class="title"><UploadPlan class="mt-3"/></v-list-item-title>
      </v-list-item>
      <v-divider/>
      <v-list-item class="mb-5 mt-5" prepend-icon="mdi mdi mdi-github" title="GitHub" link target="_blank" href="https://github.com/TraderMoe/terraform-delta-visualize">
      </v-list-item>
    </template>

  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import UploadPlan from "@/components/UploadPlan.vue";
import router from "@/router";

//methods
const getItems = () => {
  return router.options.routes.filter(
    (route: any) => route.hideInDrawer !== true && route.children !== undefined
  );
};
const getTitle = (navigationItem: any) => {
  return navigationItem.children[0].name ?? "";
};
const getIcon = (navigationItem: any) => {
  return navigationItem.children[0].icon ?? "";
};
</script>
