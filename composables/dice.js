import { ref } from "vue";

const isDiceCheck = ref(false);
const resultDiceRoll = ref("d20");
const isRolled = ref(false);
const showButtons = ref(true);
const resultNeed = ref();
const modifStat = ref();
const allSumRoll = ref();
const profExp = ref(false);
const checkTestStat = ref();

const rollD20 = () => {
  canUseDestPoints.value = false;
  isRolled.value = true;
  setTimeout(() => {
    resultDiceRoll.value = Math.floor(Math.random() * 20) + 1;
    checkTest();
  }, 1000);
};

const checkTest = () => {
  modifStat.value = JSON.parse(localStorage.getItem("characterStats"))[
    checkTestStat.value
  ][0];
  let profStat = JSON.parse(localStorage.getItem("characterStats"))[
    checkTestStat.value
  ][1];

  if (profExp.value) {
    allSumRoll.value = resultDiceRoll.value + modifStat.value + profStat;
    modifStat.value += profStat;
  } else {
    allSumRoll.value = resultDiceRoll.value + modifStat.value;
  }

  if (allSumRoll.value < resultNeed.value) {
    document.querySelector(`#buttons-1`).style.display = "flex";
    document.querySelector(`#text-1`).style.display = "flex";
  } else {
    document.querySelector(`#buttons-2`).style.display = "flex";
    document.querySelector(`#text-2`).style.display = "flex";
  }
};

export {
  rollD20,
  isDiceCheck,
  resultDiceRoll,
  isRolled,
  checkTest,
  showButtons,
  resultNeed,
  modifStat,
  allSumRoll,
  profExp,
  checkTestStat,
};
