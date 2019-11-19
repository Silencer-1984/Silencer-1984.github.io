(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{97:function(a,t,e){"use strict";e.r(t);var i=e(0),s=function(a){var t,e,i,s,c,n,p,o,v=(t="digitle",e="Reviews",i="evaluation",n="多媒体中心",p=void 0,o="迅雷远程下载",(c={}).type=s="post",c.internal=p,c.contentType="markdown",c.slug="synology-ds216j-exp",c.content=p,c.createdAt=new Date(1499742707e3),c.updatedAt=new Date(1574123529316),c.title="群晖 DS216j 半年体验报告",c.layout=s,c.date="2017-07-11 11:11:47",c.categories=[e],c.cover="http://cdn.sspai.com/2017/07/11/db02e0732a1a85cec28c109c44dafcf6.jpg",c.tags=[i,t],c.markdownHeadings=[{text:"DSM",slug:"dsm",level:3},{text:n,slug:n,level:3},{text:"Aria2",slug:"aria2",level:4},{text:o,slug:o,level:4},{text:"TimeMachine",slug:"timemachine",level:4},{text:"总结",slug:"总结",level:3}],c.excerpt="<p>今年（2017年）2月份入手了 Synology DS216j，不知不觉已经过去了半年。</p>\n",c.permalink="/synology-ds216j-exp",c.assets={},c.attributes=c,c.tagsInfo=[{name:i,permalink:"/tags/evaluation"},{name:t,permalink:"/tags/digitle"}],c.categoriesInfo=[{name:e,permalink:"/categories/reviews"}],c),d=a.options.beforeCreate||[];a.options.beforeCreate=[function(){this.$page=v}].concat(d);["layout","transition"].forEach((function(t){var e=a.options.PageComponent;e&&(a.options[t]=e[t]),void 0===a.options[t]&&(a.options[t]=v[t])})),v.slug&&(a.options.name="page-wrapper-"+v.slug.replace(/[^0-9a-z\-]/i,"-"))},c=Object(i.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("layout-manager",[e("p",[a._v("今年（2017年）2月份入手了 Synology DS216j，不知不觉已经过去了半年。")]),a._v(" "),e("p",[a._v("当初考虑使用 NAS，是因为使用了小米盒子后，开始追求离线下载的体验。我平时追美剧，理想中的场景是，每到美剧资源更新的时候，就可以下载到家里的硬盘中，再通过小米盒子观看硬盘中的视频。这样就能实现上班后到家打开电视直接看剧的需求。")]),a._v(" "),e("p",[a._v("半年以来，这台 NAS 成了我的数据中心，影视、照片、音乐、TimeMachine 都存放在两块 2TB 西数红盘上。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/718b2a59d0a9c09a724b866c22f927ff.jpg",alt:"两块 2TB 红盘"}})]),a._v(" "),e("p",[a._v("DS216j 有两个盘位。起初我在犹豫到底做 RAID0 还是 RAID1, 后来想想，我的硬盘里大部分是影音，做 RAID1 未免太浪费，倒不如做 RAID0, 然后定期把最重要的数据同步到另一块移动硬盘里。")]),a._v(" "),e("p",[a._v("在首次安装、启动、配置后，我把它放在家中的一个角落，之后就再也没有管它了，它就角落里安静地服役。即使它摆在你的房间，你也完全不会感受到他的存在。当然，如果你嫌 LED 灯太刺眼，可以在设置里关闭它。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/2097819a07c1aad10400a8fbfc7c154a.jpg",alt:""}})]),a._v(" "),e("p",[a._v("NAS 的本质只是一台低功率、持续运行的计算机。理论上自己也可以 DIY 一台 NAS，有很多人也这么做。但是为什么很多人还会选择购买群晖的解决方案，一个很重要的原因是群晖的软件生态——DSM.")]),a._v(" "),e("h3",{attrs:{id:"dsm"}},[a._v("DSM")]),a._v(" "),e("p",[a._v("DSM 是群晖 NAS 中运行的「操作系统」。这个打引号的「操作系统」指的不是我们常说的操作系统，而是一个用于组织管理 NAS 上的文件的程序。DSM 提供了一个 Web 界面，一切操作都可以在这个界面中进行。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/f1518ab10158b3896054f6b4988efa2b.png",alt:"DSM"}})]),a._v(" "),e("p",[a._v("除了 Web 界面，群晖在移动平台提供一系列的 APP，读取和操作不同类型的资源。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/39a1ff21af22b1abfc4d7e207d20bdb8.jpg",alt:"DS APP"}})]),a._v(" "),e("p",[a._v("在 Web 界面中，我一般会通过 File Station 管理我的文件，类似于 Finder.")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/aa4e91c84fd832971b1626106b418995.png",alt:"File Station"}})]),a._v(" "),e("p",[a._v("DSM 的生态在于套件中心，但实际上在我半年里的使用来看，我真正用到的套件只有那么几个。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/a13809eae2cfd8a7d8d4353bc9b1b86a.png",alt:"套件中心"}})]),a._v(" "),e("h3",{attrs:{id:"多媒体中心"}},[a._v("多媒体中心")]),a._v(" "),e("p",[a._v("作为多媒体中心，有两个最重要的要素，分别是下载资源的体验，和观看资源的体验。")]),a._v(" "),e("p",[a._v("先说下载资源的体验。DSM 本身提供 Download Station 这个套件，可以在上面添加管理下载任务，也提供电驴和迅雷离线下载的入口。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/066fdd60d15505861f33d025ff1205d4.png",alt:"Download Station"}})]),a._v(" "),e("p",[a._v("但是使用多次后，我毅然放弃了 Download Station, 原因有几个：")]),a._v(" "),e("ol",[e("li",[e("strong",[a._v("响应速度非常慢")]),a._v("。这是绕不过去的坎。由于我家使用的移动宽带给我分配的是内网 IP, 我无法通过 DDNS 在外网访问我的 NAS, 所以只能使用 DSM 提供的 Quick Connect，在群晖的服务器做一个中转。访问速度可想而知。从进入 DSM，到获取下载列表任务，再到添加任务，花费的时间非常长。")]),a._v(" "),e("li",[e("strong",[a._v("迅雷离线下载入口，只是看上去很美")]),a._v("。拉取离线下载任务列表相当耗时，添加任务还不一定成功。总的来说，我没有一次在 Download Station 里成功地通过迅雷下载。")])]),a._v(" "),e("p",[a._v("Download Station 唯一比较有用的功能是提供从 RSS Feed 中下载资源的功能，比如我只要提供一个持续更新资源地址的美剧 RSS，通过过滤器，可以自动的根据正则表达式进行对应的行为。例如当 RSS 更新有「闪电侠」三个关键字的时候自动下载。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/07317e02fe3ee6bda6e749da3c9c2b08.png",alt:"RSS Feed"}})]),a._v(" "),e("p",[a._v("但是影响下载速度和稳定性的因素是资源的质量，如果单纯使用 http 下载，有些资源恐怕从我上班到下班回家都不一定下载完。所以需要放弃 Download Station, 另辟蹊径。")]),a._v(" "),e("h4",{attrs:{id:"aria2"}},[a._v("Aria2")]),a._v(" "),e("p",[a._v("通过 ssh，我在 NAS 里跑了 Aria2, 配合像 BaiduExporter (百度盘导出任务到 Aria2) 这种插件，可以畅快地建立下载任务，临睡前把下载任务开始，一晚上能下载很多资源。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/46fb4bdfc890218014b9a2bda50d100c.png",alt:"Aria2 下载队列"}})]),a._v(" "),e("p",[a._v("但是因为没有外网 IP 的原因，在外面我就无法直接访问 Aria2 的 Web UI 添加任务，所以我需要另一种下载方式进行互补。")]),a._v(" "),e("h4",{attrs:{id:"迅雷远程下载"}},[a._v("迅雷远程下载")]),a._v(" "),e("p",[a._v("我在 NAS 又跑了一个 Xware, 通过 Xware 可以关联迅雷远程下载和 NAS. 这样既能够在外面管理下载任务，又能享受迅雷的高速通道和离线下载资源。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/011b6bca34b7b92d19bd42c2845e9e64.png",alt:"迅雷远程下载"}})]),a._v(" "),e("p",[a._v("至于观看，DSM 的 Video Station 会对文件夹中的视频进行分析，自动从多个影视 API 获取相关信息，然后整理。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/db02e0732a1a85cec28c109c44dafcf6.jpg",alt:"Video Station"}})]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/af7f299d971a58aea7c2a02a970bd934.jpg",alt:""}})]),a._v(" "),e("p",[a._v("然而我只会在使用移动设备进行观看的时候才会使用 Video Station. 因为 Web 版的 Video Station 用的是普通的 "),e("code",{pre:!0},[a._v("<video>")]),a._v(" 标签，支持的视频格式不多（DS216j 也没有转码功能），所以我一般是通过 Finder 连接 NAS，之后用本地的播放器进行播放。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/e7b32a4d8fd721e9eee963b05dd73f99.png",alt:"通过 Finder 连接 NAS"}})]),a._v(" "),e("p",[a._v("因为我有一台小米电视，所以主要的影视播放都在电视上。我一般会通过两种方式在电视上播放 NAS 的视频。")]),a._v(" "),e("p",[a._v("第一种，通过小米电视自带的「高清播放器」应用，可以连接远程的服务器，只要填写 NAS 的地址和用户名密码，就能访问里面的文件夹。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/7929682c92c56547522a1ac4a2be06fc.jpg",alt:""}})]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/c459b3916a9b4bd6cba78591b9b4b779.jpg",alt:""}})]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/69962b830439de599948bbdb13be5bb5.png",alt:"流畅播放 1080P"}})]),a._v(" "),e("p",[a._v("我一般是从文件夹里找到我要看的视频。小米电视也会自动识别出文件的影视信息，但是识别不是特别准确。")]),a._v(" "),e("p",[a._v("第二种是通过 Airplay/DLNA，移动设备上用 DS Video 选好要看的视频，然后直接 Airplay 到电视上。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/7a1f36feb76767d9064b41ed563216d3.jpg",alt:"串流"}})]),a._v(" "),e("p",[a._v("至于管理音乐的 Audio Station，对我这个音乐发烧友来说也显得尴尬。因为听音乐我更倾向于串流服务，比如 Spotify 和 网易云音乐，很少存放音乐文件，一般存放音乐文件到本地只是为了满足我对音乐的收藏欲。")]),a._v(" "),e("p",[a._v("Photo Station 做得很好，在买了 Dji Spark 以后，对图片视频存放的需求也就有所增多，因为 TF 卡的容量也有限。手机上我会常用 DS Photo 同步我比较喜欢比较重要的照片到 NAS 上。但是我没有使用增量同步的功能，因为我订阅了 iCloud 50GB 的空间，目前手机 7000 多张照片，只占用了 iCloud 26GB 多一些。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/fe1982be000622aaffd0dd79f67e76c9.png",alt:"Photo Station"}})]),a._v(" "),e("h4",{attrs:{id:"timemachine"}},[a._v("TimeMachine")]),a._v(" "),e("p",[a._v("macOS 的 TimeMachine 原生支持网络设备，所以只要在 TimeMachine 里把备份位置设定到 NAS 的文件夹后，每当我回家插上电源，就会自动备份到 NAS 上。")]),a._v(" "),e("p",[e("img",{attrs:{src:"//cdn.sspai.com/2017/07/11/acee003483973ff4d44a6bf3379589da.png",alt:"TimeMachine"}})]),a._v(" "),e("h3",{attrs:{id:"总结"}},[a._v("总结")]),a._v(" "),e("p",[a._v("NAS 极大的改善了我观看影视的体验，同时还成为了我的数据中心。以往 TimeMachine 要定期插一个移动硬盘进行备份，现在只要接上电源，无需操心。")]),a._v(" "),e("p",[a._v("DS216j 的价格很适合作为 NAS 的入门之选。然而入门 NAS 的花费不仅在于机器本身，还有硬盘的花费。同时你可能还需要把你的百兆路由扔掉，重新买一个千兆路由。")]),a._v(" "),e("p",[a._v("然而 DS216j 的配置十分尴尬，32 位的 CPU 导致你无法使用 docker 这个利器。 我安装 Aria2 和 xware 的时候，只能费尽力气找对应的编译好的包来安装的。所以如果有充足的预算，建议直接买 DS216 II+ 吧。")])])}),[],!1,null,null,null);"function"==typeof s&&s(c);t.default=c.exports}}]);