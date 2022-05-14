<template>
  <div class="aa-jobs">
    <div class="aa-job" v-for="(job, i) in jobs" :key="i">
      <img class="aa-job__cover" :src="serverUrl + job.attributes.cover.data.attributes.url">
      <div class="aa-job__title">
        {{ job.attributes.Title }}
      </div>
      <div class="aa-job__desc">
        {{ job.attributes.Description }}
      </div>
      <div class="aa-job__cat">
        <span
          v-for="(category, j) in job.attributes.categories.data"
          :key="j"
        >
          {{ category.attributes.Title }}
          <template v-if="j !== job.attributes.categories.data.length - 1"> | </template>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  setup() {
    let serverUrl = import.meta.env.VITE_SERVER_URL

    let jobs = ref([]);
    const $axios = inject('$axios')
    const fetchJobs = () => {
      $axios.get("jobs?populate=categories,cover").then((response) => {
        const items = Array.from(response.data.data)
        items.forEach((job) => {
          jobs.value.push(job);
        });
      });
    };
    fetchJobs();

    return {
      jobs,
      serverUrl
    }
  },
};
</script>

<style>
.aa-jobs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
 
.aa-jobs .aa-job {
  margin: 1rem auto;
  padding: 0 .5rem;
  justify-content: center;
  display: flex;
  flex-flow: column;
  width: 50%;
}

.aa-job__cover {
  max-width: 300px;
  margin: .5rem auto;
}

.aa-job__title {
  font-weight: bold;
}

.aa-job__cat {
  font-style: italic;
}

</style>