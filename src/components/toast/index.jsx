import './index.css';
import { createApp } from 'vue';
class PopToast {
  constructor(opts) {
    const { text, img } = opts;
    this.img = img;
    this.text = text;
    this.node = null;
  }
  pop() {
    const { text, img, close } = this;
    let closeToast = close.bind(this);
    const instance = {
      render() {
        return (
          <div class="my-toast">
            <section>
              {img ? (
                <span>
                  <img src={img} alt="" srcset="" />
                </span>
              ) : null}
              <div class="text">{text}</div>
            </section>
            <span class="close-btn" onClick={closeToast}>
              关闭
            </span>
          </div>
        );
      },
    };

    this.instancee = document.createElement('div');
    createApp(instance).mount(this.instancee);
    document.body.appendChild(this.instancee);
  }
  close() {
    this.instancee.remove();
  }
}

function Toast(...args) {
  let params = args[0];
  let opts = {
    img: '',
    text: '',
  };
  if (typeof params === 'string') {
    opts.text = params;
  } else if (params.text) {
    opts.text = params.text;
    opts.img = params.img;
  }
  const toast = new PopToast(opts);
  toast.pop();
  return toast;
}

export default Toast;
