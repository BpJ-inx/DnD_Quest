import { ref } from "vue";

const destPoints = ref(5);

const removeDestPoint = () => {
  destPoints.value -= 1;
};

const restartDestPoints = () => {
  destPoints.value = 5;
};

export { destPoints, removeDestPoint, restartDestPoints };
