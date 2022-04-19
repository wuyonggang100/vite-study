let node = [
  {
    id: '1', // 节点ID
    text: 'hello world-1', // 节点展示文案
    children: [
      {
        // 节点子元素
        id: '1-1',
        text: 'hello world 1-1',
        children: [
          {
            id: '1-1-1', // 节点ID
            text: 'hello world 1-1-1', // 节点展示文案
            children: [
              {
                // 节点子元素
                id: '1-1-1-1',
                text: 'hello world 1-1-1-1',
                children: [],
              },
              {
                // 节点子元素
                id: '1-1-1-2',
                text: 'hello world 1-1-1-2',
                children: [],
              },
              {
                // 节点子元素
                id: '1-1-1-3',
                text: 'hello world 1-1-1-3',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    text: 'hello world-2',
  },
];

export default node;
