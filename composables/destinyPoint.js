import { ref } from "vue";

const destPoints = ref(5);
const canUseDestPoints = ref(false);

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

export {
  destPoints,
  removeDestPoint,
  restartDestPoints,
  canUseDestPoints,
  openUseDestPoint,
  useDestPointForSuccess,
};
