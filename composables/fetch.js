import { ref } from "vue";

const adventure = ref(null);
const currentScene = ref(null);
const enemy = ref("");
const allItems = ref();

const fetchCurrentScene = async () => {
  const response = await fetch("/textQuest.json"); // dnd quest
  adventure.value = await response.json();
  allItems.value = adventure.value.items;
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
  if (currentScene.value.enemy) {
    enemy.value = currentScene.value.enemy;
    console.log(enemy.value);
  }
};

const nextScene = (router, nextRoute) => {
  if (nextRoute.removeDestinyPoint) removeDestPoint();
  router.push(`/dndAdventure/${nextRoute.nextScene}`);
  if (isRolled.value) isRolled.value = !isRolled.value;
  resultDiceRoll.value = "d20";
  if (!showButtons.value) showButtons.value = !showButtons.value;
  if (isFight.value) isFight.value = false;

  if (nextRoute.item || nextRoute.item == 0) {
    item.value = nextRoute.item;
    // console.log(item.value);

    addItemInStash();
  }
};

const restart = (router) => {
  restartDestPoints();
  if (isFight.value) isFight.value = false;
  router.push("/"); // dnd quest
};

export {
  adventure,
  currentScene,
  fetchCurrentScene,
  updateCurrentScene,
  nextScene,
  restart,
  enemy,
  allItems,
};
