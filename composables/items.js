import { ref } from "vue";

const item = ref();
const isItems = ref(false);

if (
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("itemStash"))
) {
  if (JSON.parse(localStorage.getItem("itemStash")).length > 0) {
    isItems.value = true;
  } else {
    isItems.value = false;
  }
}

const addItemInStash = () => {
  let stash = new Set();
  if (localStorage.getItem("itemStash")) {
    stash = new Set(JSON.parse(localStorage.getItem("itemStash")));
    stash.add(item.value);
    localStorage.setItem("itemStash", JSON.stringify([...stash]));
  } else {
    stash.add(item.value);
    localStorage.setItem("itemStash", JSON.stringify([...stash]));
  }
  isItems.value = true;
};

const removeFromStash = (itemsInBack, index, n) => {
  let stash = new Set();
  stash = new Set(JSON.parse(localStorage.getItem("itemStash")));
  stash.delete(n);
  localStorage.setItem("itemStash", JSON.stringify([...stash]));
  itemsInBack.splice(index, 1);

  if (stash.size == 0) isItems.value = false;
};

const restartStash = () => {
  isItems.value = false;
  if (typeof window !== "undefined") {
    localStorage.setItem("itemStash", JSON.stringify([]));
  }
};

export { item, addItemInStash, isItems, removeFromStash, restartStash };
