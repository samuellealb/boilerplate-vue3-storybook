<template>
  <default-layout>
    <div class="users">
      <h1>Users</h1>
      <button @click="fetchUsers()">Get users</button>
      <div class="user" v-for="user in users" :key="user.id">
        <div>{{user.id}}</div>
        <div>{{user.userName}}</div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import './users.css'
import { ref } from "vue";
import { getAxios } from '@/utils/get-axios.js'
import DefaultLayout from "@/layouts/DefaultLayout.js"

export default {
  name: 'Users',
  components: {
    DefaultLayout
  },
  setup() {
    const users = ref([]);
    const $axios = getAxios();
    const fetchUsers = () => {
      $axios.get("/users").then((response) => {
        const items = Array.from(response.data);
        items.forEach((user) => {
          users.value.push(user);
        });
      });
    };
    // fetchUsers();

    return {
      users,
      fetchUsers
    };
  }
}
</script>