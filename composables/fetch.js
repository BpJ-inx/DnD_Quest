import { ref } from "vue";

const adventure = ref(null);
const currentScene = ref(null);

const fetchCurrentScene = async () => {
  const response = await fetch("/textQuest.json"); // dnd quest
  adventure.value = await response.json();
};

const updateCurrentScene = (routeID) => {
  currentScene.value = adventure.value.scenes.find(
    (scene) => String(scene.id) === routeID // dnd quest
  );

  if (currentScene.value.checkTest) {
    isDiceCheck.value = !isDiceCheck.value;
    openUseDestPoint();
    resultNeed.value = currentScene.value.checkTest;
    showButtons.value = !showButtons.value;
    checkTestStat.value = currentScene.value.checkTestStat;
    if (currentScene.value.saveCheck) profExp.value = !profExp.value;
  }
};

const nextScene = (router, nextRoute) => {
  if (nextRoute.removeDestinyPoint) removeDestPoint();
  router.push(`/dndAdventure/${nextRoute.nextScene}`);
  if (isRolled.value) isRolled.value = !isRolled.value;
  resultDiceRoll.value = "d20";
  if (!showButtons.value) showButtons.value = !showButtons.value;
};

const restart = (router) => {
  restartDestPoints();
  router.push("/"); // dnd quest
};

export {
  adventure,
  currentScene,
  fetchCurrentScene,
  updateCurrentScene,
  nextScene,
  restart,
};
