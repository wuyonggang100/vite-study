import { inject, provide, ref, computed } from 'vue';

const getLeft = (depth) => {
  return 15 * depth + 'px';
};
const getIconStyle = (expand) => {
  return {
    position: 'absolute',
    width: '10px',
    height: '10px',
    overflow: 'hidden',
    marginTop: '6px',
    background: '#666',
  };
};

const expandStyle = {
  height: 'auto',
  overflow: '',
};
const unExpandStyle = {
  height: 0,
  overflow: 'hidden',
};

const TreeNode = {
  props: {
    depth: {
      type: Number,
      default: 0,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    serachAble: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click-node'],
  setup(props, ctx) {
    const { data, depth, serachAble } = props;
    let keywords = ref('');
    let clickNodeHandle = () => {};
    const clickNode = (node) => {
      if (depth > 0) {
        clickNodeHandle(node);
      } else {
        ctx.emit('click-node', node);
      }
    };

    if (!depth) {
      provide('clickNode', clickNode);
      provide(
        'keywords',
        computed(() => keywords),
      );
    }
    if (depth > 0) {
      clickNodeHandle = inject('clickNode');
      keywords = inject('keywords');
    }

    let expand = ref(false);
    const toggleExpand = () => {
      expand.value = !expand.value;
    };

    const matchStyle = (keywords, text) => {
      return (keywords.value || keywords) === text
        ? {
            background: 'yellow',
          }
        : {};
    };

    return () => {
      let children;
      if (Array.isArray(data)) {
        children = data;
      } else {
        children = data.children;
      }
      return (
        <div>
          {depth === 0 && serachAble ? <input vModel={keywords.value} /> : null}

          <div style="position:relative">
            {/* 文字描述和图标 */}
            {data.text ? (
              <div
                style="padding-left:20px"
                onClick={() => {
                  toggleExpand(data);
                }}
              >
                {(data.children || []).length > 0 ? (
                  <span
                    style={{
                      ...getIconStyle(expand.value),
                      left: getLeft(depth),
                    }}
                  ></span>
                ) : null}

                {/* title */}
                <span
                  style={{
                    ...matchStyle(keywords.value, data.text),
                    paddingLeft: getLeft(depth),
                  }}
                  onClick={() => {
                    clickNode({
                      ...data,
                      depth: depth,
                    });
                  }}
                >
                  {data.text}
                </span>
              </div>
            ) : null}
            {/* children */}
            <div
              style={
                depth === 0 ? {} : expand.value ? expandStyle : unExpandStyle
              }
            >
              {(children || []).length
                ? children.map((node) => (
                    <TreeNode depth={depth + 1} data={node} />
                  ))
                : null}
            </div>
          </div>
        </div>
      );
    };
  },
};

export default TreeNode;
