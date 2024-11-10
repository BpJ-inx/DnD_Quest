<template>
  <div class="flex flex-row">
    <div v-if="currentScene" class="container">
      <h1 class="title">Выживание в подземелье</h1>
      <p class="scene-text">{{ currentScene.text }}</p>
      <div class="option-buttons">
        <button
          v-for="option in currentScene.options"
          :key="option.nextSceneId"
          class="option-button"
          @click="nextScene(option.nextScene)"
        >
          {{ option.text }}
        </button>
      </div>
      <div class="footer">
        <p>Выберите свой путь и попытайтесь выжить...</p>
        <button class="restart-button" @click="restart()">
          Вернуться в начало
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";


const adventure = ref(null);
const currentScene = ref(null);
const route = useRoute();
const router = useRouter();

const fetchCurrentScene = async () => {

  const response = await fetch("/textQuest2.json"); // simple quest
  adventure.value = await response.json();
};

const updataCurrentScene = () => {
  currentScene.value = adventure.value.scenes.find(
 
    (scene) => scene.id === Number(route.params.id) // simple quest
  );
};

const nextScene = (nextRoute) => {
  router.push(`/adventure/${nextRoute}`);
};

const restart = () => {
 
  router.push("/adventure/1"); // simple quest
};

onMounted(async () => {
  await fetchCurrentScene();
  updataCurrentScene();
});
</script>
