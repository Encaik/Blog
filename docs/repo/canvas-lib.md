# 基于 Canvas 开发一款交互式画布引擎

## 起始！想搞啥

本人对可视化以及网页搞音乐这种花活很感兴趣，所以之前闲下来想看看别人的源码库，研究一下别人是如何实现一个 webgl 可视化引擎的。看着看着突然就觉得，别人的库为什么这么设计，类为什么这么定义，对于我来说就是硬灌，我只知道他们能写出一个成熟引擎，很厉害，学就是了。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ccb03f27814e487c92bdc37d0db191b1~tplv-k3u1fbpfcp-watermark.image?)

源码越看到后面就觉得这也太庞大复杂了，俗话说得好，罗马不是一天建成的，所以我把库退回到最开始提交的时候看最起始的版本，这应该不会很庞大复杂了吧。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0feb64ecb28e45f7bc3fe8f3887020df~tplv-k3u1fbpfcp-watermark.image?)

然后悲剧的是，我发现其实刚开始也已经是个比较完整的引擎了，这时候我就打算自己先写一个试试，这样对遇到的问题啥的都印象更深刻，对模块的设计也有更清晰的认识。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c42bacfe736a46f9a1eb9caa3fa8f8fd~tplv-k3u1fbpfcp-watermark.image?)

## 开整！起项目

起手那肯定牌面是要有的，虽然我不一定能写出多个项目库，但我要用可以管理多个项目的 lerna 来开始项目。（其实是顺便学习怎么使用 learn 了）

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/477408f860104c83b1b49981d7459d0d~tplv-k3u1fbpfcp-watermark.image?)

创建好项目后，创建一个项目叫@canvas-lib/core，我宣布这就是核心代码库了，然后再起一个模块叫 test，写成啥样总是要页面上引入跑一跑才能有数的。这样子项目的基本结构就确定了：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fc41f7cbe9d47e1a9fa32a795c3cb08~tplv-k3u1fbpfcp-watermark.image?)

## 模块！搞起来

接下来要设计核心库的模块了，这部分其实耗费了好几天的时间，因为最基础的设计都是一变再变，到目前为止有以下模块构成：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72945c1890f74ecbaa65a8e59e0b4d48~tplv-k3u1fbpfcp-watermark.image?)

### Engine

引擎模块是整个项目的起点，基本主要的类都从这里开始初始化。当然主要是 Canvas 画布模块和用来存储画布上物体的 Scene 场景模块了，还有一个尚不成熟的事件模块的分发器和一个比较简单的单纯由 raf 实现的渲染模块。

```ts
export class Engine {
  public scene: Scene;
  public canvas: Canvas;
  public dispatcher: EventDispatch;

  constructor(container: string, canvasOptions?: CanvasOptions) {
    this.initEngine(container, canvasOptions);
  }

  initEngine(container: string, canvasOptions?: CanvasOptions) {
    this.scene = new Scene();
    this.canvas = new Canvas(container, this.scene, canvasOptions);
    new Render(this);
    this.dispatcher = new EventDispatch();
    new Behavior(this);
  }

  on(type: EventType, fn: (event: Event) => void) {
    this.dispatcher.on(new Event(type, this, {}), fn);
  }

  off(type: EventType, fn: (event: Event) => void) {
    this.dispatcher.off(type, fn);
  }
}
```

### Canvas

canvas 计划中是有默认配置的，不过目前还没加，所以 options 是可选，但代码里不存在就直接 return 了。

```ts
public initCanvas(container: string, options?: CanvasOptions) {
        if (!container) return;
        this._canvas = document.getElementById(container) as HTMLCanvasElement;
        this._ctx = this._canvas.getContext("2d");
        if (options) {
            if (options.width) this._canvas.width = options.width;
            if (options.height) this._canvas.height = options.height;
            if (options.bgColor) {
                this._ctx.fillStyle = options.bgColor.hex;
                this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
            }
        }
        return this;
    }
```

### Scene

场景这块是一个比较简单的数据来管理，之后应该会丰富一下内容，方便成组来管理图形。

```ts
export class Scene {
  public entityList: Array<Entity>;

  constructor() {
    this.initScene();
  }

  initScene() {
    this.entityList = [];
    return this;
  }

  add(entity: Entity) {
    this.entityList.push(entity);
  }

  remove(id: string | number | symbol) {
    const idx = this.entityList.findIndex((entity: Entity) => entity.id === id);
    const len = this.entityList.length;
    const temp = this.entityList[len - 1];
    this.entityList[idx] = temp;
    this.entityList.pop();
  }

  getContainsShapes(point: Point) {
    const shapes = [];
    this.entityList.forEach(entity => {
      if (entity.isContains(point)) {
        shapes.push(entity);
      }
    });
    return shapes;
  }
}
```

### EventDispatch

事件这块也是简单的实现了一个基础，然后其他地方写出个什么事件就给事件类型加个什么事件。这一块也是所有模块里反复修改最多的，因为一开始对事件管理这块的逻辑不熟悉，导致设计的比较混乱，最后用的时候很臃肿繁杂，后来简化了一下才是目前的效果。

```ts
export class EventDispatch {
  private _events: any;
  private _listener: Listener;

  constructor() {
    this._events = Object.create(null);
    this._listener = new Listener();
  }

  on(event: Event, fn: (event: Event) => void) {
    if (this._events[event.type]) {
      this._events[event.type].push({
        fn,
        event
      });
    } else {
      this._events[event.type] = [
        {
          fn,
          event
        }
      ];
      this._listener.addEventListener(event.type, this.mouseEvent.bind(this));
    }
  }

  off(type: EventType, fn: (event: Event) => void) {
    if (this._events[type]) {
      const idx = this._events[type].findIndex(i => i.fn === fn);
      const len = this._events[type].length;
      if (len < 2 && idx < 1) {
        delete this._events[type];
        this._listener.removeEventListener(type, this.mouseEvent.bind(this));
      } else {
        this._events[type][idx] = this._events[type][len - 1];
        this._events[type].pop();
      }
    }
  }

  dispatch(type: string, data: any) {
    if (this._events[type]) {
      this._events[type].forEach(_event => {
        _event.event.data = { ..._event.event.data, ...data };
        _event.fn(_event.event);
      });
    }
  }

  mouseEvent(event: MouseEvent) {
    this.dispatch(<EventType>event.type, { event });
  }
}
```

## 继续！搞下去

目前只是做一个起始的小结，算是搭好了基础框架，可以以此为基础先横向丰富内容，然后纵向扩充。我在问别人模块设计的意见或者功能的设计的时候，别人问我，我最终想要做成什么样子，要以结果为导向。但是我说我不知道，我从开始做就只是想要学习，没有什么具体的目标，我觉得我这或许是以学习为导向，想到什么就做什么。虽然这样比较乱，会想起一出是一出，但是我感觉，这才是我喜欢的前端，可以想做什么做什么，兴趣所在，就是正确的。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3598bd8bb044914a8c5d33ab006e1c9~tplv-k3u1fbpfcp-watermark.image?)
