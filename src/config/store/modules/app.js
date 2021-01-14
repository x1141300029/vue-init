import {ls as $ls} from "../../storage";
import {
  APPISIOS,
} from "../type";

const state = {
  isiOS: $ls.get(APPISIOS) || false,
};

const mutations = {
  SETISIOS(state) {
    let u = navigator.userAgent;
    state.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    $ls.set(APPISIOS,state.isiOS);
  },
};
const actions = {
  setIsIos({commit}, data) {
    commit("SETISIOS", data)
  },
};
export default {
  actions,
  mutations,
  state
}
