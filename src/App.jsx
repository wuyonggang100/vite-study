import { defineComponent } from 'vue';
// import '@styles/index.css'
import '@styles/test.less';
import classes from '@styles/test.module.css';

import { a } from './test.ts';
import logo from './assets/logo.png';

import test from './test.ts?url';
// import test from './test.ts?raw';
console.log('---', test);
import { name } from '../package.json';
console.log(name);
import Toast from './components/toast/index';
import Tree from './components/tree/index';
import data from './components/tree/data.js';
console.log(data);
export default defineComponent({
  setup() {
    const clickHandle = (node) => {
      console.log('点了---', node);
    };
    return () => {
      return (
        <div class={`root ${classes.moduleClass}`}>
          hello vue3 {a.age}
          <img src={logo} />
          我是app
          <button
            onClick={() => {
              Toast({
                img: 'https://p9-dy-ipv6.byteimg.com/avatar3.jpeg',
                text: '弹出',
              });
            }}
          >
            点我弹出
          </button>
          <Tree data={data} onClickNode={clickHandle} serachAble={true} />
        </div>
      );
    };
  },
});
