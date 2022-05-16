<template>
  <default-layout>
    <div class="users">
      <h1>Users</h1>
      <div class="user" v-for="user in users" :key="user.id">
        <span>{{user.userName}}</span>
      </div>
    </div>
  </default-layout>
</template>

<script>
import './users.css'
import { ref, inject } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.js"

export default {
  name: 'Users',
  components: {
    DefaultLayout
  },
  setup() {
    const users = ref([]);
    const $axios = inject("$axios");
    let serverUrl = import.meta.env.VITE_SERVER_URL;
    const fetchUsers = () => {
      $axios.get("/users").then((response) => {
        const items = Array.from(response.data);
        items.forEach((user) => {
          users.value.push(user);
        });
      });
    };
    fetchUsers();

    return {
      users,
    };
  }
}
</script>