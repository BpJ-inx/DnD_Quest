<template>
  <div class="flex flex-row">
    <div v-show="modifStat" class="flex items-center">{{ modifStat }} +</div>
    <button class="dice-button" @click="rollD20()" :disabled="isRolled">
      <span class="dice-text">{{ resultDiceRoll }}</span>
    </button>
    <div v-show="modifStat" class="flex items-center">= {{ allSumRoll }}</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "/assets/css/dicePlaceChackStyle.css";
</style>
