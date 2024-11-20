<template>
  <div v-if="isItems">
    <h2 class="text-center text-xl text-[#ff4c4c] mb-4">Инвентарь:</h2>
    <div
      v-for="n in itemsInBack"
      :key="n"
      class="bg-[#1d1d1d] p-4 rounded-lg mb-4"
    >
      <h3 class="text-center text-lg text-[#ff4c4c] font-semibold mb-2">
        {{ allItems[n].itemName }}
      </h3>
      <p class="text-center text-sm text-[#9e9e9e] mb-2">
        {{ allItems[n].itemTags }}
      </p>
      <p class="text-sm text-white">{{ allItems[n].itemDesc }}</p>
      <div class="flex justify-end">
        <button
          class="bg-[#555555] text-[#f1f1f1] px-3 py-1 rounded-md text-sm hover:bg-[#444444] transition-colors"
          @click="removeFromStash(itemsInBack,index,n)"
        >
          Убрать
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const itemsInBack = ref();
itemsInBack.value = JSON.parse(localStorage.getItem("itemStash"));
</script>

<style lang="scss" scoped></style>
