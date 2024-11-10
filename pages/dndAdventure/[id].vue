<template>
  <div class="flex" v-if="currentScene">
    <div class="flex flex-col items-center w-1/4 p-5 mr-8">
      <DestinyPointStar />
    </div>

    <div class="container">
      <h1 class="title">To hell and back again.</h1>
      <p class="scene-text">{{ currentScene.text }}</p>
      <div class="flex justify-center">
        <div class="flex flex-col items-center w-full">
          <DicePlaceCheck v-if="isDiceCheck" class="flex m-5"></DicePlaceCheck>
          <div class="flex gap-7 flex-col w-full">
            <p
              class="scene-text hidden"
              v-for="option in currentScene.options"
              :id="'text-' + option.id"
            >
              {{ option.text }}
            </p>
            <div
              v-show="showButtons"
              class="flex flex-col gap-7 justify-center w-full"
              v-for="option in currentScene.options"
              :id="'buttons-' + option.id"
            >
              <button
                v-for="button in option.buttons"
                class="option-button gap-7"
                @click="nextScene(button)"
              >
                {{ button.textButton }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <button class="restart-button" @click="restart()">
          Вернуться в начало
        </button>
      </div>
    </div>
  </div>
  <div v-if="currentScene" class="flex text-sm mt-3">
    <p>P.S. Использован автоматический перевод.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const adventure = ref(null);
const currentScene = ref(null);
const route = useRoute();
const router = useRouter();

if (isDiceCheck.value) {
  isDiceCheck.value = !isDiceCheck.value;
  modifStat.value = "";
  if (profExp.value) profExp.value = !profExp.value;
}

const fetchCurrentScene = async () => {
  const response = await fetch("/textQuest.json"); // dnd quest
  adventure.value = await response.json();
};

const updateCurrentScene = () => {
  currentScene.value = adventure.value.scenes.find(
    (scene) => String(scene.id) === route.params.id // dnd quest
  );

  if (currentScene.value.checkTest) {
    isDiceCheck.value = !isDiceCheck.value;
    resultNeed.value = currentScene.value.checkTest;
    showButtons.value = !showButtons.value;
    checkTestStat.value = currentScene.value.checkTestStat;
    if (currentScene.value.saveCheck) profExp.value = !profExp.value;
  }
};

const nextScene = (nextRoute) => {
  if (nextRoute.removeDestinyPoint) removeDestPoint();
  router.push(`/dndAdventure/${nextRoute.nextScene}`);
  if (isRolled.value) isRolled.value = !isRolled.value;
  resultDiceRoll.value = "d20";
  if (!showButtons.value) showButtons.value = !showButtons.value;
};

const restart = () => {
  restartDestPoints();
  router.push("/"); // dnd quest
};

onMounted(async () => {
  await fetchCurrentScene();
  updateCurrentScene();
});
</script>
