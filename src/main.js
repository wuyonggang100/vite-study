import { createApp } from 'vue';
import App from './App.jsx';

export function render() {
  createApp(App).mount('#app');
}

render();

import pkg from '../package.json';
console.log('pkg-----', pkg);

// const modules = import.meta.glob('./glob/*');
// Object.entries(modules).forEach(([k, v]) => {
//   v().then((module) => {
//     console.log(k, module.default);
//   });
// });

const modules = import.meta.globEager('./glob/*');
Object.entries(modules).forEach(([k, module]) => {
  console.log('k---', k);
  console.log('modules---', module.default);
});

if (import.meta.hot) {
  import.meta.hot.on('test', (val) => {
    console.log('ws---', val);
  });
  import.meta.hot.accept((newModule) => {
    newModule.render();

    // 此处如果直接使用 render() 将不会有热更新效果，因为使用的是老的 module 中的 render
    // render()
  });
}
