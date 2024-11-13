<template>
  <div class="page-container">
    <div class="flex" v-if="currentScene">
      <div class="flex flex-col items-center w-1/4 p-5 mr-8">
        <DestinyPointStar />
      </div>
      <div class="container">
        <h1 class="title">To hell and back again.</h1>
        <p class="scene-text">{{ currentScene.text }}</p>
        <div class="flex justify-center">
          <div class="flex flex-col items-center w-full">
            <DicePlaceCheck
              v-if="isDiceCheck"
              class="flex m-5"
            ></DicePlaceCheck>
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
                  @click="nextScene(router, button)"
                >
                  {{ button.textButton }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button class="restart-button" @click="restart(router)">
            Вернуться в начало
          </button>
        </div>
      </div>
      <div class="enemy">
        <img v-if="isFight" :src="enemy" />
      </div>
    </div>
  </div>
  <div v-if="currentScene" class="ps-text">
    <p>P.S. Использован автоматический перевод.</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter();

if (isFight.value) isFight.value = false;

if (isDiceCheck.value) {
  isDiceCheck.value = !isDiceCheck.value;
  modifStat.value = "";
  if (profExp.value) profExp.value = !profExp.value;
}

onMounted(async () => {
  await fetchCurrentScene();
  if (adventure.value.fight[route.params.id]) {
    isFight.value = true;
  }
  updateCurrentScene(route.params.id);
});
</script>
<style>
@import "/assets/css/idStyle.css";
</style>
