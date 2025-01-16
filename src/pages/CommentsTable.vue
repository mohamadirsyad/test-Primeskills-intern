<template>
  <div class="container mx-auto p-4">
    <!-- Search Bar Component at the top -->
    <SearchBar v-model="searchQuery" />

    <!-- Table -->
    <table class="min-w-full border-collapse mt-4">
      <thead>
        <tr>
          <th class="border p-2">No</th>
          <th class="border p-2">Title</th>
          <th class="border p-2">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in paginatedComments" :key="comment.id">
          <td class="border p-2">{{ comment.id }}</td>
          <td class="border p-2">{{ comment.title }}</td>
          <td class="border p-2">{{ comment.body }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Component at the bottom -->
    <Pagination
      :page="page"
      :totalPages="totalPages"
      @update:page="changePage"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import SearchBar from "../components/SearchBar.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "CommentsTable",
  components: {
    SearchBar,
    Pagination,
  },
  setup() {
    const comments = ref([]); // To store fetched data
    const searchQuery = ref(""); // Store search query
    const page = ref(1); // Current page
    const itemsPerPage = 10; // Items per page

    // Fetch data from API on component mount
    onMounted(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      comments.value = await response.json();
    });

    // Filter comments based on the search query
    const filteredComments = computed(() => {
      return comments.value.filter((comment) => {
        const searchTerm = searchQuery.value.toLowerCase();
        return (
          comment.title.toLowerCase().includes(searchTerm) ||
          comment.body.toLowerCase().includes(searchTerm)
        );
      });
    });

    // Calculate the total number of pages
    const totalPages = computed(() => {
      return Math.ceil(filteredComments.value.length / itemsPerPage);
    });

    // Get the comments for the current page
    const paginatedComments = computed(() => {
      const startIndex = (page.value - 1) * itemsPerPage;
      const endIndex = page.value * itemsPerPage;
      return filteredComments.value.slice(startIndex, endIndex);
    });

    // Change the current page
    const changePage = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages.value) {
        page.value = newPage;
      }
    };

    return {
      comments,
      searchQuery,
      page,
      totalPages,
      paginatedComments,
      changePage,
    };
  },
};
</script>
