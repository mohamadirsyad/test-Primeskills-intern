<template>
  <div class="mb-4">
    <input
      v-model="query"
      type="text"
      placeholder="Search title atau body...."
      class="p-2 border border-gray-300 rounded w-full"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      query: this.modelValue, // Bind query to modelValue
    };
  },
  watch: {
    query(newQuery) {
      this.$emit("update:modelValue", newQuery); // Emit query to parent via update:modelValue
    },
  },
};
</script>
