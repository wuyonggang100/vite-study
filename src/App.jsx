import { defineComponent } from 'vue';
// import '@styles/index.css'
import '@styles/test.less';
import classes from '@styles/test.module.css';

import { a } from './test.ts';
import logo from './assets/logo.png';

// import test from './test.ts?url'
import test from './test.ts?raw';
console.log('---', test);
import { name } from '../package.json';
console.log(name);

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class={`root ${classes.moduleClass}`}>
          hello vue3 {a.age}
          <img src={logo} />
        </div>
      );
    };
  }
});
