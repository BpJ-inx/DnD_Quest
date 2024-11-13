import { ref } from "vue";

const destPoints = ref(5);
const canUseDestPoints = ref(false);
const isFight = ref(false);

const openUseDestPoint = () => {
  canUseDestPoints.value = !canUseDestPoints.value;
};

const removeDestPoint = () => {
  destPoints.value -= 1;
};

const useDestPointForSuccess = () => {
  destPoints.value -= 1;
  isDiceCheck.value = false;
  canUseDestPoints.value = false;
  allSumRoll.value = Infinity;
  checkTest();
};

const restartDestPoints = () => {
  destPoints.value = 5;
};

const useDestPointInFight = (router, nextAdresss) => {
  destPoints.value -= 1;  
  isFight.value = false;
  nextScene(router, adventure.value.fight[nextAdresss]);
};

export {
  destPoints,
  removeDestPoint,
  restartDestPoints,
  canUseDestPoints,
  openUseDestPoint,
  useDestPointForSuccess,
  useDestPointInFight,
  isFight,
};
