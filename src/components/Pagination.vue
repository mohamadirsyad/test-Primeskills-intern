<template>
  <div class="mt-4 flex justify-between">
    <button
      @click="changePage(page - 1)"
      :disabled="page === 1"
      class="p-2 bg-blue-500 text-white rounded"
    >
      Previous
    </button>
    <span>{{ page }} / {{ totalPages }}</span>
    <button
      @click="changePage(page + 1)"
      :disabled="page === totalPages"
      class="p-2 bg-blue-500 text-white rounded"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.$emit("update:page", newPage);
      }
    },
  },
};
</script>
