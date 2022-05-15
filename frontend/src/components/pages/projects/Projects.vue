<template>
  <default-layout>
    <div class="projects">
      <div class="project" v-for="(job, i) in projects" :key="i">
        <img
          class="project__cover"
          :src="serverUrl + job.attributes.cover.data.attributes.url"
          :alt="job.attributes.cover.data.attributes.alternativeText"
        />
        <div class="project__title">
          {{ job.attributes.title }}
        </div>
        <div class="project__desc">
          {{ job.attributes.description }}
        </div>
        <div class="project__cat">
          <span v-for="(category, j) in job.attributes.categories.data" :key="j">
            {{ category.attributes.Title }}
            <template v-if="j !== job.attributes.categories.data.length - 1"> | </template>
          </span>
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import './projects.css'
import { ref, inject } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.js"

export default {
  name: 'Projects',
  components: {
    DefaultLayout
  },
  setup() {
    const projects = ref([]);
    const $axios = inject("$axios");
    let serverUrl = import.meta.env.VITE_SERVER_URL;
    const fetchProjects = () => {
      $axios.get("/projects?populate=categories,cover").then((response) => {
        const items = Array.from(response.data.data);
        items.forEach((job) => {
          projects.value.push(job);
        });
      });
    };
    fetchProjects();

    return {
      projects,
      serverUrl,
    };
  },
};
</script>
