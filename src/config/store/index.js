import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters';

Vue.use(Vuex);
//获取modules文件夹下的所有文件
const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules
}, {});

export default new Vuex.Store({
  getters,
  modules
});
