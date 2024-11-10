import { ref } from "vue";

const startQuest = (router) => {
  saveToLocalStorage();
  router.push("/dndAdventure/A1");
};

const stats = ref({
  СИЛА: [0, 0],
  ЛОВКОСТЬ: [0, 0],
  ТЕЛОСЛОЖЕНИЕ: [0, 0],
  ИНТЕЛЛЕКТ: [0, 0],
  МУДРОСТЬ: [0, 0],
  ХАРИЗМА: [0, 0],
});

function updateStat({ label, value, saveRoll }) {
  stats.value[label] = [value, saveRoll];
}

function saveToLocalStorage() {
  localStorage.setItem("characterStats", JSON.stringify(stats.value));
}

export { startQuest, updateStat, stats };
