<template>
  <div
    class="h-auto w-44 border border-gray-800 flex flex-col items-center justify-center font-sans p-4"
  >
    <h3 class="text-lg font-bold mb-2"><slot></slot></h3>

    <div class="text-2xl my-2">{{ modifier }}</div>

    <input
      v-model="inputValue"
      type="number"
      class="w-10 h-10 border border-black text-black text-center text-lg mb-4"
      placeholder="0"
      @input="updateValue"
    />

    <p class="text-sm mb-3">Спасбросок: {{ proficiency }}</p>

    <div class="flex flex-col gap-3 w-full mt-3">
      <label class="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          v-model="isProfic"
          class="text-xl"
          @change="adjustModifier(isProfic)"
        />
        <span>Владение</span>
      </label>

      <label class="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          v-model="isExp"
          class="text-xl"
          @change="adjustModifier(isExp)"
          :disabled="!isProfic"
        />
        <span>Экспертиза</span>
      </label>
    </div>
  </div>
</template>

<script setup>
const inputValue = ref(10);
const modifier = ref(0);
const slot = useSlots();
const isProfic = ref(false);
const isExp = ref(false);
const statLabel = ref(slot.default()[0].children);
const proficiency = ref(0);
const emit = defineEmits(["update:stat"]);

function updateValue() {
  modifier.value = Math.floor((inputValue.value - 10) / 2);
  emit("update:stat", {
    label: statLabel.value,
    value: modifier.value,
    saveRoll: proficiency.value,
  });
}

function adjustModifier(is) {
  if (is) {
    proficiency.value += 2;
  } else {
    proficiency.value -= 2;
    if (is == isProfic.value && isExp.value)
      (proficiency.value -= 2), (isExp.value = false);
  }

  emit("update:stat", {
    label: statLabel.value,
    value: modifier.value,
    saveRoll: proficiency.value,
  });
}
</script>

<style lang="scss" scoped></style>
