import { Plugin } from 'vite';
import Hello from './../../../../../study/typescript系列/极客 ts 实战/study-code/project-action/src/components/demo/Hello';

export { Plugin } from 'vite';
export default (enforce?: 'pre' | 'post'): Plugin => {
  return {
    name: 'test',
    config(userConfig) {
      console.log(userConfig);
      return {
        resolve: {
          alias: {
            '@aaa': '/src/styles',
          },
        },
      };
    },
    configResolved(config) {
      // console.log(config);
    },
    configureServer(server) {
      const middWare = (req, res, next) => {
        // 可以都浏览器地址栏进行拦截
        if (req.url === '/test') {
          res.end('我是test');
        } else {
          next();
        }
      };
      // 此时此中间件优先级最低，如果行为和别的中间件行为相同，就不会执行
      return () => {
        server.middlewares.use(middWare);
      };
    },
    transformIndexHtml(html) {
      // console.log('html---', html);
    },
    handleHotUpdate(ctx) {
      Object.keys(ctx).forEach((k) => {
        // console.log('ctx---', k);
      });
      ctx.server.ws.send({
        type: 'custom',
        event: 'test',
        data: {
          Hello: 'world',
        },
      });
      //   console.log('ctx---', ctx);
    },
  };
};
