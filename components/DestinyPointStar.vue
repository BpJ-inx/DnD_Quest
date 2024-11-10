<template>
  <div v-if="destPoints > 0">
    <p class="text-center mb-4 text-xl text-[#ff4c4c]">Очки судьбы</p>
    <div class="flex flex-row justify-center">
      <img
        v-for="n in destPoints"
        :key="n"
        src="/assets/image/destinyStar.svg"
      />
    </div>
  </div>
  <div v-else>
    <p class="text-center mb-4 text-xl text-[#ff4c4c]">Очки судьбы исчерпаны</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
