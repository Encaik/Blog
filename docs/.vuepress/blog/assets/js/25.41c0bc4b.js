(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{539:function(v,_,i){"use strict";i.r(_);var t=i(18),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"地图-gis-类型应用开发总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#地图-gis-类型应用开发总结"}},[v._v("#")]),v._v(" 地图 GIS 类型应用开发总结")]),v._v(" "),i("h2",{attrs:{id:"地图在-web-中的存在方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#地图在-web-中的存在方式"}},[v._v("#")]),v._v(" 地图在 web 中的存在方式")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("高德、百度及 Mapbox 等地图 Api 服务——偏重于地图服务")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/1.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("echart.js、D3.js 及 Antv L7 等可视化库——偏重于数据展示")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/2.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("Cesium.js——偏重于实现 3D 的地球")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/3.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("Three.js——脱离地图，纯 3D")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/4.png",alt:"img"}})])])]),v._v(" "),i("h2",{attrs:{id:"地球坐标系-地理坐标系"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#地球坐标系-地理坐标系"}},[v._v("#")]),v._v(" 地球坐标系——地理坐标系")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("WGS84 坐标系")]),v._v(" "),i("p",[v._v("一种国际上采用的地理坐标系。坐标原点为地球质心，其地心空间直角坐标系的 Z 轴指向 BIH （国际时间服务机构）1984.O 定义的协议地球极（CTP）方向，X 轴指向 BIH 1984.0 的零子午面和 CTP 赤道的交点，Y 轴与 Z 轴、X 轴垂直构成右手坐标系，称为 1984 年世界大地坐标系统。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/5.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("GCJ-02（火星坐标系）")]),v._v(" "),i("p",[v._v("国家保密插件，也叫做加密插件或者加偏或者 SM 模组，其实就是对真实坐标系统进行人为的加偏处理，按照几行代码的算法，将真实的坐标加密成虚假的坐标，而这个加偏并不是线性的加偏，所以各地的偏移情况都会有所不同。而加密后的坐标也常被人称为火星坐标系统。")]),v._v(" "),i("p",[v._v("目前使用火星坐标系的地图商:")]),v._v(" "),i("ul",[i("li",[v._v("腾讯搜搜地图")]),v._v(" "),i("li",[v._v("搜狐搜狗地图")]),v._v(" "),i("li",[v._v("阿里云地图")]),v._v(" "),i("li",[v._v("高德 MapABC 地图")]),v._v(" "),i("li",[v._v("灵图 51ditu 地图")])])]),v._v(" "),i("li",[i("p",[v._v("BD-09（百度坐标系统）")]),v._v(" "),i("p",[v._v("百度坐标对火星坐标系进行了一次加密,形成了百度坐标系.")]),v._v(" "),i("p",[v._v("目前使用百度坐标系的地图商:")]),v._v(" "),i("ul",[i("li",[v._v("百度 Baidu 地图")])])])]),v._v(" "),i("h2",{attrs:{id:"地球坐标系-投影坐标系"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#地球坐标系-投影坐标系"}},[v._v("#")]),v._v(" 地球坐标系——投影坐标系")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("Equal-Earth")]),v._v(" "),i("p",[v._v("Equal Earth 投影是一种新的等面积伪圆柱投影，投影后的世界地图纬线是平行直线，经线间隔相等，高宽比 1：2.05458，极线是赤道长度的 0.59247 倍，形状近似于鼓形，视觉上更接近人对地球的感觉。与以往常见世界地图上国家间错误的面积比例关系不同，该地图展示了世界各个国家的真实面积，更便于人们对世界各国国土面积的正确认知。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/6.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("等距柱状投影")]),v._v(" "),i("p",[v._v("将球形的经度和纬度坐标，直接投影到水平和垂直坐标的一格，这个网格的高度大约为宽的两倍。因此从赤道到两极，横向拉伸不断加剧，南北两个极点被拉伸成了扁平的网格在整个上部和下部边缘。 Equirectangular 可以现实整个水平和竖直的 360 全景。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/7.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("墨卡托")]),v._v(" "),i("p",[v._v("墨卡托(Mercator)投影，又名“等角正轴圆柱投影”，荷兰地图学家墨卡托（Mercator）在 1569 年拟定，假设地球被围在一个中空的圆柱里，其赤道与圆柱相接触，然后再假想地球中心有一盏灯，把球面上的图形投影到圆柱体上，再把圆柱体展开，这就是一幅标准纬线为零度（即赤道）的“墨卡托投影”绘制出的世界地图。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/8.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("web 墨卡托（伪墨卡托）")]),v._v(" "),i("p",[v._v("以整个世界范围，赤道作为标准纬线，本初子午线作为中央经线，两者交点为坐标原点，向东向北为正，向西向南为负。为了方便实现一级地图在长度上一分为二，也就是在高一级精度上用 4 张切片地图显示，最好将 xy 轴显示的取值范围统一，为此 Y 轴的取值范围也限定在[-20037508.3427892,20037508.3427892]之间。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/9.png",alt:"img"}})])])]),v._v(" "),i("h2",{attrs:{id:"地图数据服务及格式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#地图数据服务及格式"}},[v._v("#")]),v._v(" 地图数据服务及格式")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("wms")]),v._v(" "),i("p",[v._v("Web Map Service，网络地图服务，它是利用具有地理空间位置信息的数据制作地图，其中将地图定义为地理数据的可视化表现，能够根据用户的请求，返回相应的地图，包括 PNG、GIF、JPEG 等栅格形式，或者 SVG 或者 WEB CGM 等矢量形式。WMS 支持 HTTP 协议，所支持的操作是由 URL 决定的。")])]),v._v(" "),i("li",[i("p",[v._v("wfs")]),v._v(" "),i("p",[v._v("网络要素服务（WFS）支持用户在分布式的环境下通过 HTTP 对地理要素进行插入，更新，删除，检索和发现服务。该服务根据 HTTP 客户请求返回要素级的 GML(Geography Markup Language、地理标识语言)数据，并提供对要素的增加、修改、删除等事务操作，是对 Web 地图服务的进一步深入。WFS 通过 OGC Filter 构造查询条件，支持基于空间几何关系的查询，基于属性域的查询，当然还包括基于空间关系和属性域的共同查询。")])]),v._v(" "),i("li",[i("p",[v._v("tms")]),v._v(" "),i("p",[v._v("切片地图服务（TMS）定义了一些操作，这些操作允许用户访问切片地图。WMTS 可能是 OGC 首个支持 RESTful 访问的服务标准。")])]),v._v(" "),i("li",[i("p",[v._v("geojson")]),v._v(" "),i("p",[v._v("GeoJson 是用于描述地理空间信息的数据格式。GeoJSON 不是一种新的格式，其语法规范是符合 JSON 格式的，只不过对其名称进行了规范，专门用于表示地理信息。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/10.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("topojson")]),v._v(" "),i("p",[v._v("TopoJSON 是 GeoJSON 按拓扑学编码后的扩展形式，是由 D3 的作者 Mike Bostock 制定的。相比 GeoJSON 直接使用 Polygon、Point 之类的几何体来表示图形的方法，TopoJSON 中的每一个几何体都是通过将共享边（被称为 arcs）整合后组成的。TopoJSON 消除了冗余，文件大小缩小了 80%，因为：边界线只记录一次（省界线为例）。地理坐标使用整数，不使用浮点数。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/blog/gis/11.png",alt:"img"}})])]),v._v(" "),i("li",[i("p",[v._v("glTF")]),v._v(" "),i("p",[v._v("glTF 格式本质上是一个 JSON 文件。这一文件描述了整个 3D 场景的内容。它包含了对场景结构进行描述的场景图。场景中的 3D 对象通过场景结点引用网格进行定义。材质定义了 3D 对象的外观，动画定义了 3D 对象的变换操作(比如选择、平移操作)。蒙皮定义了 3D 对象如何进行骨骼变换，相机定义了渲染程序的视锥体设置。")])]),v._v(" "),i("li",[i("p",[v._v("3dTiles")]),v._v(" "),i("p",[v._v("3D Tiles 是在 glTF 的基础上，加入了分层 LOD 的结构后得到的产品，专门为大量地理 3D 数据流式传输和海量渲染而设计的一种格式，是目前大火的开源 WebGL 框架 Cesium 的御用格式。根据实际体验，3D Tiles 和二维地图中的瓦片组织非常相似，在网络中查看 3D 模型的话，3DTiles 的效果还是很不错的。")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);