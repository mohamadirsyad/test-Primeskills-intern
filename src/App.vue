<template>
  <div id="app">
    <CommentsTable />
  </div>
</template>

<script>
import CommentsTable from "./pages/CommentsTable.vue";

export default {
  name: "App",
  components: {
    CommentsTable,
  },
};
</script>
