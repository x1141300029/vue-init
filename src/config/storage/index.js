/* TODO 封装 localStorage和sessionStorage*/
const $ls = localStorage;
const $ss = sessionStorage;

// TODO 封装localStorage
export const ls = {
  get(key) {
    try {
      return JSON.parse($ls.getItem(key));
    } catch (e) {
      return $ls.getItem(key);
    }
  },
  set(key, value) {
    $ls.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    $ls.removeItem(key);
  },
  clear() {
    $ls.clear();
  }
};
// TODO 封装sessionStorage
export const ss = {
  get(key) {
    try {
      return JSON.parse($ss.getItem(key));
    } catch (e) {
      return $ss.getItem(key);
    }
  },
  set(key, value) {
    $ss.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    $ss.removeItem(key);
  },
  clear() {
    $ss.clear();
  }
};
