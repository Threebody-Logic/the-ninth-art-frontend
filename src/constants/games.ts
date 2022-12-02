import '@//models/game.d.ts';

// 这是测试用例

let games: GameType.Game[] = [
  {
    id: 1,
    name: '塞尔达传说: 旷野之息',
    type: "即时动作冒险",
    developer: "任天堂",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    images: [
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fq_70%2Fimages03%2F20210119%2F6ec1173b831e46bf8c164e9440c8d24b.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672575852&t=852d9a9561f1880d87b1a71136cd0834",
      "https://ts1.cn.mm.bing.net/th/id/R-C.07b3481dbb5ef312c8b3f9ce528b27e8?rik=oUzJkD1vzA0mZw&riu=http%3a%2f%2fpic.paopaoche.net%2fup%2f2017-3%2f201703081613201594877.jpg&ehk=pa%2bttutUkIvI0qCg2gZbBvOoLjpjNQ0Gj0KCNg%2bEqdY%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.502634d79296afae1efb7318465df173?rik=TkvkRbkjACnzHA&riu=http%3a%2f%2fwww.3dmgame.com%2fuploads%2fallimg%2f170707%2f361_170707100222_1.jpg&ehk=ZdcaaPxTx8PtstHCCKolsqxAS8%2bJ1SZg79reML2IxdI%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.379e0bd4e8a72dcc340ce283f401590a?rik=8fCp7J7%2fCDhF1Q&riu=http%3a%2f%2fwx4.sinaimg.cn%2flarge%2fbfae17b6ly1fbrkoq6gq2j21hc0u0e81.jpg&ehk=8CcYGN0OINm587%2fCffvcHoSOOcbj68VRY7LtV5BhQ9U%3d&risl=&pid=ImgRaw&r=0"
    ],
    tags: ["3D", "开放世界", "开放空间", "烹饪", "RPG", "解谜", "冒险"],
    saleStatus: "热卖中",
    description: "尽管该作没有塞尔达一贯的程式，但它可能是塞尔达精神的精髓所在。游戏有一个令人惊艳的美丽、互动的世界，有令人眼花缭乱的谜语和谜题，隐藏在海拉鲁大陆上的秘密没有止境。",
    introduction: "《塞尔达传说：旷野之息》是由任天堂企划制作本部与子公司Monolith Soft协力开发的开放世界动作冒险游戏，于2017年3月3日由任天堂发行。该作是《塞尔达传说》系列第15部主线作品。\n" +
      "《塞尔达传说：旷野之息》的故事发生在海拉鲁王国灭亡的100年后，曾经一场大灾难袭击了海拉鲁王国使之灭亡，主角林克在地下遗迹苏醒，追寻着不可思议的声音，开始冒险之旅。\n" +
      "该作2017年12月8日获得TGA年度游戏、最佳游戏设计和最佳动作冒险游戏；2017年12月23日获GameSpot年度最佳游戏；2018年1月5日获EDGE年度最佳游戏；2018年3月24日获得GDC最佳游戏音效奖、最佳游戏设计奖和年度游戏奖；2018年3月18日获得SXSW最佳游戏性奖、最佳游戏设计奖和年度最佳游戏。\n" +
      "2019年6月12日，任天堂公司在电子娱乐展览会展前发布会上公布了《塞尔达传说：旷野之息》续作的首个宣传片。2022年9月13日，Nintendo Switch的发布会中，该作的续作正式定名为《塞尔达传说：王国之泪》。"
  },
  {
    id: 2,
    name: '荒野大镖客: 救赎2',
    type: "开放世界RPG",
    developer: "Rockstar Studio",
    publisher: "Rockstar Studio",
    platform: ["PC", "PlayStation 5", "Xbox"],
    tags: ["3D", "开放世界", "3A", "沙盒游戏", "自由", "世界观", "故事", ""],
    saleStatus: "热卖中",
    images: [
      "https://img.3dmgame.com/uploads/allimg/170523/316-1F523102615.jpg",
      "https://img.3dmgame.com/uploads/images/news/20181003/1538534860_688080.jpg",
      "https://yxbao-img.xiazaibao2.com/photo/201805/04/3dd39ef308.jpg",
      "https://media.st.dl.eccdnx.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1656615305"
    ],
    description: '不仅有着沉浸式的游戏打法，它还有着扣人心弦的故事情节、制作精良的角色、完美无瑕的设计或让人欲罢不能的多人游戏模式。',
    introduction: '简称RDR2，是Rockstar San Diego工作室制作，Rockstar Games公司发行的一款动作冒险类开放世界游戏，为2010年该公司发行的《Red Dead Redemption》的正统续作。\n' +
      '游戏中述说亚瑟·摩根和声名狼藉的范德林德帮派的传奇故事，让玩家体验在19世纪的最后岁月里横跨美国的亡命之旅',
  },
  {
    id: 3,
    name: '塞尔达传说: 王国之泪',
    type: "即时动作冒险",
    developer: "任天堂",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    saleStatus: "待发售",
    tags: ["开放世界", "开放空间", "RPG", "解谜", "冒险", "任天堂", "3D", "第三人称"],
    images: [
      "https://img.3dmgame.com/uploads/images/news/20220914/1663104992_905883.jpg",
      "https://static.shenyou.cn/gamersky/1623816929393371.jpg"
    ],
    description: '作为一款续作，它将开放空间理论进一步完善，比《塞尔达传说：旷野之息》更进一步，实现了开放世界的又一大进步',
    introduction: "暂无"
  },
  {
    id: 4,
    name: '战神: 诸神黄昏',
    type: "开放世界动作冒险",
    developer: "圣莫妮卡工作室",
    publisher: "索尼互动娱乐",
    platform: ["PlayStation 5"],
    tags: ["动作", "3D", "冒险", "开放世界", "格斗", "中世纪"],
    saleStatus: "热卖中",
    images: [
      "https://yxbao-img.xiazaibao2.com/news/image/202207/08/0d4cf67100.jpg",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2021%2F453D8BD16452B1568F7E390F0929322F15887C4F_size298_w1280_h720.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672315751&t=abe9009c2769660fdaceb9516050bf93",
      "https://p.qpic.cn/mwegame/0/55c44cd8c0d3349fedf5059bebcc2288/"
    ],
    description: '将动作和冒险融合在一起，讲述了一个新的、令人难忘的北欧传奇，令人着迷。无可挑剔的剧本，完美的演出，精美的动作——从上到下都是华美的艺术品。游戏完整的反映了其核心主题，这也是续作应该具备的一切，尊重其传奇般的血统，但无惧突破和创新。',
    introduction: '游戏剧情承接前作《战神4》，芬布尔之冬正在肆虐。奎托斯和阿特柔斯必须探索九界各界寻找真相，阿斯加德大军也为迎接预言中的末日大战全力备战。一路上，他们将探索令人惊叹的神话景观，并面对各种各样的敌对生物、怪物和北欧诸神。诸神黄昏劫难迫近。奎托斯和阿特柔斯必须在自己和九界的安危之间进行抉择。'
  },
  {
    id: 5,
    name: '蓓优妮塔 3',
    type: "动作游戏",
    developer: "白金工作室",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    tags: ["热血", "3D", "冒险", "格斗"],
    saleStatus: "热卖中",
    images: [
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.app178.com%2Ftu%2F201501%2Fkdntxgldmpw.jpg&refer=http%3A%2F%2Fimg.app178.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672316051&t=9ba10be80210d59e5edef1e82fa9b936",
      "https://www.leiyouxi.com/wp-content/uploads/2022/07/1657794300.jpg",
      "https://ts1.cn.mm.bing.net/th/id/R-C.fcde67aff83f042fd0b6bdea5288bbc6?rik=PzIAcsV3%2blroGA&riu=http%3a%2f%2fimg1.cache.netease.com%2fcatchpic%2f1%2f1E%2f1E574FEAF39957CEE3D324B042A6D7AD.JPG&ehk=w%2f90OWM8J7y99GZQw43jf0Ue7szqD1WAHTXTSUW5gbk%3d&risl=&pid=ImgRaw&r=0"
    ],
    description: '四肢皆备有枪械的魔女，以华丽的动作让敌人俯首称臣的「蓓优妮塔」系列最新作！带着与恶魔合而为一的「恶魔变装」、随心所欲地操控魔兽的「恶魔奴隶」等崭新技能，贝优妮塔以世界各地为舞台，与新的敌人决一死战。',
    introduction: '《猎天使魔女3》（Bayonetta 3）是任天堂游戏公司出版发行的动作类游戏，白金工作室开发。\n' +
      '已确定于2022年10月28日，在NS平台发售。'
  },
  {
    id: 6,
    name: '宝可梦 : 朱紫',
    type: "角色扮演",
    developer: "Game Freak",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    tags: ["收集", "对战", "交换"],
    saleStatus: "热卖中",
    images: [
      "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2022/pokemon-scarlet-and-pokemon-violet-are-finally-here/2250x1266_EN",
      "https://img.yanlutong.com/uploadimg/ico/2022/1010/1665394822217611.jpg",
      "https://img.youxi369.com/article/contents/2022/02/28/20220228105110712.jpg"
    ],
    description: '高山、湖水、荒野、险峻的山岳地带构成了一片连绵不绝的壮阔大地。形形色色的训练家在其中冒险，磨炼宝可梦对战的本领。',
    introduction: '游戏一般划分为《宝可梦》系列、旁支系列游戏和其他游戏，其中又以《宝可梦》系列游戏更广为人知，大部分衍生作品都是基于《宝可梦》系列游戏创作的。其相关衍生产品涵盖了动画、漫画、卡牌游戏、实体产品等多个方面，已经成为了全球流行的游戏系列。'
  },
  {
    id: 7,
    name: '地平线: 西之绝境',
    type: "动作游戏",
    developer: "Guerrilla Games",
    publisher: "索尼互动娱乐",
    platform: ["PlayStation 5"],
    tags: ["格斗", "对战", "冒险", "热血"],
    saleStatus: "热卖中",
    images: [
      "https://ts1.cn.mm.bing.net/th/id/R-C.ac65cfe9c0f8e747469aa240ac691c42?rik=OPGJy4zMAtk%2fJA&riu=http%3a%2f%2fwww.93wgame.com%2fuploadfile%2f2022%2f0606%2f84ecf460d630abaaf19fb851c8b6f6b9.jpg&ehk=e1hI%2fi4mRoLu66zUnKc%2fgeS8UqSDvIwC1Xlr%2bwUIylY%3d&risl=&pid=ImgRaw&r=0",
      "https://img.3dmgame.com/uploads/images/news/20200618/1592439503_682869.jpg",
      "https://p.qpic.cn/mwegame/0/02e8e563ff0e5cdcc2108ba444bc4aa9/",
      "https://img.3dmgame.com/uploads/images/news/20210528/1622155787_570420.jpg"
    ],
  description: '机器猎人埃洛伊为了调查致命的神秘疫病而前往西方。在西方的未知险境，她将遇见陌生的新部族和更加致命的机器。在老面孔和新朋友的陪伴下，她得勇敢地在这块新疆域探索，找出拯救地球生命所需的答案。',
  introduction: '机器猎人埃洛伊为了调查致命的神秘疫病而前往西方。在西方的未知险境，她将遇见陌生的新部族和更加致命的机器。在老面孔和新朋友的陪伴下，她得勇敢地在这块新疆域探索，找出拯救地球生命所需的答案。'
  },
  {
    id: 8,
    name: '艾尔登法环',
    type: "动作游戏",
    developer: "From Software",
    publisher: "索尼互动娱乐",
    platform: ["PC", "PlayStation 5", "Xbox", ],
    tags: ["格斗", "开放世界", "角色扮演", "冒险", "热血"],
    saleStatus: "热卖中",
    images: [
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.SnuJYRfv1jj50WJhfRhY8AHaEK?pid=ImgDet&rs=1",
      "https://ts1.cn.mm.bing.net/th/id/R-C.262ecf9335991529fd423d7dd148f82c?rik=nqxddEAydinIHw&riu=http%3a%2f%2fimg3.downza.cn%2fxueyuan%2f202110%2fa3e054ba170de0c7c08f3d7a1cfbee2e.jpg&ehk=73tammXsvC5GPeXgxJzX%2bbptKnP0QRLM3%2b3Tlh8tMhI%3d&risl=&pid=ImgRaw&r=0",
      "https://img.onlinedown.net/download/202106/165222-60c86a46c57dc.jpg"
    ],
    description: '该游戏让玩家走进辽阔的场景与地下迷宫探索未知，挑战困难重重的险境，同时体验登场角色之间的利害关系谱成的群像剧。',
    introduction: '所有接受祝福的人瞳孔中都有黄金一般的光芒，但也有些人因为各种原因失去了赐福，眼中的光芒消逝。这些人就被称为褪色者，并因此被逐出交界地。\n' +
      '某天因为作为祝福核心的“艾尔登法环”被击碎，祝福受到污染的半神们为了收集法环碎片发动了一场又一场的战争，导致世界变的满目疮痍，褪色者们因为法环破碎恢复了祝福。'
  },
  {
    id: 9,
    name: '马力欧+疯狂兔子: 星耀之愿',
    type: "即时战略游戏",
    developer: "育碧游戏工作室",
    publisher: "Nintendo",
    platform: ["Nintendo Switch"],
    tags: ["策略"],
    saleStatus: "热卖中",
    images: [
      "//cdn.hommk.com/pcgame/ubi2015/img/gamezone/shake/shk_header.jpg"
    ],
    description: '玩家将用各有所长的三位英雄来打造梦之队，在结合了回合制和实时动作的创新战斗系统中使用英雄们的能力，开始一场史无前例的银河冒险！',
    introduction: '探索每一颗星球，遇见上头充满好奇心的居民，并且揭开神秘的秘密。在结合自由行动和策略回合制抉择的创新战斗系统中使用你英雄们的各种技能对付全新及熟悉敌人。控制你的英雄们冲向敌人、与盟友合作使出跳跃、躲在掩体后面……让你的回合发挥最大功效。'
  },
  {
    id: 10,
    name: '火焰纹章：Engage',
    type: "冒险游戏",
    images: [
      "https://img.3dmgame.com/uploads/images/news/20220926/1664185953_503090.jpg",
      "https://img.3dmgame.com/uploads/images/news/20220930/1664526634_256827.jpg",
      "https://img.3dmgame.com/uploads/images/news/20220914/1663122203_225986.jpg"
    ],
    developer: '任天堂',
    publisher: '任天堂',
    description: "本作主角的身份为神龙。在一千年前，随著邪龙被封印而沉眠，却突然有一天从睡眠中醒来。或许是受长年沉睡的影响，主角醒来后完全想不起关于自己的记忆。故事将从主角与代代守护著神龙的“龙之守护者”他们相遇开始。",
    introduction: "《火焰纹章Engage》的舞台为四个王国和一个圣地的世界“艾雷欧斯大陆”。一千年前，人类与邪龙之间发生了战争。人类借助异界英雄“纹章士”的力量，加上各国之间团结一致并肩作战，经历长久的战争后，最终将邪龙封印了起来。然而随著时光流逝，封印的力量逐渐衰弱，世界开始显现邪龙复活的徵兆……",
    platform: ["Nintendo Switch"],
    saleStatus: '待发售',
    tags: [
      "剧情", "RPG", "冒险"
    ],
  },
  {
    id: 11,
    name: '空洞骑士',
    type: "动作冒险",
    developer: "樱桃组",
    publisher: "樱桃组",
    platform: ["PC", "Nintendo Switch", "PlayStation 5"],
    tags: ["剧情", "RPG", "冒险"],
    saleStatus: "热卖中",
    images: [
      "https://img.3dmgame.com/uploads/images/news/20180904/1536041575_458791.jpg",
      "https://ts1.cn.mm.bing.net/th/id/R-C.0f970cf64d9694dc0f15252665f80b21?rik=fmaMOQ68vMLzDw&riu=http%3a%2f%2fwww.3dmgame.com%2fuploads%2fallimg%2f170225%2f154_170225101508_3.jpg&ehk=JcmrwCeSG1WLuSxBN4mrPZODUHYIXEXUDoLeXoNUq2w%3d&risl=&pid=ImgRaw&r=0",
      "https://www.3dmgame.com/uploads/allimg/170811/379-1FQ1141954.jpg",
    ],
    description: '游戏背景设定在一个错综复杂的地下城“空洞巢穴”，我们的英雄在这个地下王国内开始了他的历险，他需要利用自己的能力探索遗迹、消灭怪物或者和一些怪物做朋友来帮助自己。',
    introduction: '该作讲述的是一个名为德特茅斯的衰落小镇下掩埋着一个古老的废弃王国，名叫圣巢。这个王国被瘟疫所侵蚀而废弃，废弃的原因则是因为名为辐光的光之古神，她可以通过思想来传播瘟疫，被瘟疫侵蚀的虫子都会被本能所支配，失去心智。'
  },
  {
    id: 12,
    name: '精灵与萤火意志',
    type: "动作冒险",
    developer: "Moon Studios",
    publisher: "Xbox游戏工作室",
    platform: ["PC", "Xbox", "Nintendo Switch"],
    tags: ["剧情", "冒险", "艺术"],
    saleStatus: "热卖中",
    images: [
      "https://pic2.zhimg.com/v2-e79d06d3095873011905f8dc20ed9944_1440w.jpg?source=172ae18b",
      "https://img.3dmgame.com/uploads/images/news/20201209/1607482139_663203.jpg",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.Ai_pSM-vEBb8PF67bnV9gAHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    ],
    description: '本作紧张的挑战与感人剧情相辅相成，在此基础上构建的明亮而鲜艳的开放世界平台跳跃玩法，让它实现了一个精彩的回归。',
    introduction: '有一天，一个新生命诞生于尼博尔山（Nibel）纳鲁（Naru）的家中，他们为她取名为“库”（Ku），小猫头鹰“库”在奥里（Ori）跟伙伴的照顾下快乐成长。\n' +
      '然而，长大后的“库”总想着能飞起来。但是“库”一边的羽翼没有羽毛，所以飞不起来就很不开心，这时奥里跟伙伴们也开始想办法帮助小猫头鹰。\n' +
      '找到黑子之羽的奥里将其交给朋友古门（Gumo），古门帮助“库”将羽毛安装在了翅膀上使其可以飞翔。于是“库”就这样承载着奥里自由飞翔，自在快乐极了。\n' +
      '然而事故来的很快，正在自由飞翔的小猫头鹰偏偏遇上了暴风雨，翅膀上的羽毛被暴风吹离，两个伙伴不幸双双坠落，被风暴吹散开来。'
  },
  {
    id: 13,
    name: '巫师3：狂猎',
    type: "动作角色扮演",
    developer: "CD Projekt Red",
    publisher: "WB Games",
    platform: ["Xbox", "PC"],
    tags: ["格斗", "冒险", "剧情"],
    saleStatus: "热卖中",
    images: [
       "https://img.3dmgame.com/uploads/allimg/171004/369_171004223634_2.jpg",
      "https://mod.3dmgame.com/static/upload/mod/allimg/247_151115122008_1.jpg",
      "https://mod.3dmgame.com/static/upload/mod/allimg/347_170601172104_1.png"
    ],
    description: '该作承接《巫师2：国王刺客》的剧情，那些想要利用杰洛特的人已经不在了。杰洛特寻求改变自己的生活，着手于新的个人使命，而世界的秩序也在悄然改变。',
    introduction: '庞大的外表下还包含着制作组处处留心的细节。《巫师3：狂猎》为杰洛特的故事画上了一个完满的句号。虽然情节不是很有意思，但是剧情中的角色们都有血有肉。游戏的战斗非常爽快，角色扮演的体验也非常棒。这些都把《巫师3：狂猎》提升到了一个其他许多RPG无法企及的高度。'
  },
  {
    id: 14,
    name: '迷失',
    type: "冒险游戏",
    developer: " BlueTwelve Studio",
    publisher: " Annapurna Interactive",
    platform: ["PC", "PlayStation 5"],
    tags: ["冒险", "探索", "单人", "生存"],
    saleStatus: "热卖中",
    images: [
      "https://www.begeek.fr/wp-content/uploads/2021/07/Stray-2048x1155.jpg",
      "https://blog.playstation.com/tachyon/2021/07/Stray-featured-image.jpg",
      "https://gmedia.playstation.com/is/image/SIEPDC/stray-screenshot-01-ps5-en-23jun20?$native$"
    ],
    description: '一只孤身离群的流浪猫迷失在了一座被遗忘的网络城市里，它必须解开一个古老的谜团才能逃离出去，找到回家的路。',
    introduction: '一只孤身离群的流浪猫迷失了方向。它必须解开古老的谜团，才能逃离这座被长久遗忘的城市。\n' +
      '\n' +
      '《Stray》是一款以猫为主角的第三人称冒险游戏。故事发生在一座日渐衰败的赛博城市，这里有着刻画细致的霓虹闪烁的小巷，以及脏乱阴暗的下层环境。在高高低低的环境中流浪，抵御无法预见的威胁，探索这个只有平凡的机器人和危险生物的冷漠之地，并设法解开这里的谜团。\n' +
      '\n' +
      '通过一只流浪猫的眼睛看世界，以趣味性的方式与环境互动。面对异世界的奇怪居民，它需要时而隐秘，时而敏捷，时而装傻充愣，有时还要尽可能地惹人厌。\n' +
      '\n' +
      '在冒险途中，这只猫结识了一台编号为 B-12 的小型无人机。在这个新同伴的帮助下，一猫一机努力寻找出路。\n' +
      '\n' +
      '《Stray》由 BlueTwelve Studio 倾力打造。BlueTwelve Studio 是法国南部的一个小团队，成员包括一群猫和几个人类铲屎官。'
  },
  {
    id: 15,
    name: '双人成行',
    type: "动作冒险",
    developer: "Hazelight Studios",
    publisher: "Electronic Arts",
    platform: ["PC", "PlayStation 5", "Xbox"],
    tags: ["动作", "冒险", "多人"],
    saleStatus: "热卖中",
    images: [
       "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp434144195.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672565881&t=4ecb7443f477cb587383a65e5986d55c",
      "https://img.3dmgame.com/uploads/images/thumbpicfirst/20210302/1614662515_668839.jpg",
      "https://ts1.cn.mm.bing.net/th/id/R-C.f0f9205aed1dd174728f648431f9bf50?rik=t81bvHTx89Snxw&riu=http%3a%2f%2fwww.wdyxw.com.cn%2fuploads%2fallimg%2f210417%2f1106322W0-0.png&ehk=JyBCh7L2YVLO9TfrznVzTY0IiP%2fPf7eVQnQ%2bIB8I%2fDs%3d&risl=&pid=ImgRaw&r=0"
    ],
    description: '玩家在开始游戏前需要与另外一名玩家自行选择想要操纵的角色，可供操纵的角色共有2位——科迪与小梅。如果玩家在冒险途中死亡时，会在原地复活，从而继续探险。',
    introduction: '一对经常起争执、互看不顺眼的夫妻科迪与小梅，这两名人类被魔咒变成了玩偶，并且还受困于一个奇幻世界中。在爱情导师哈金博士的指示下，科迪与小梅心不甘情不愿地试图拯救他们破碎的感情，而各式各样欢乐而难缠的游戏挑战也将阻止他们恢复正常。'
  },
  {
    id: 16,
    name: '战地风云5',
    type: "射击战争",
    developer: " DICE",
    publisher: "Electronic Arts",
    platform: ["PC", "Xbox"],
    tags: ["射击", "第一人称", "军事", "多人", "动作"],
    saleStatus: "热卖中",
    images: [
      "https://www.dmfuns.com/wordpress/wp-content/uploads/2019/11/a51ff71f4134970af83ded5d9acad1c8a6865d46.jpg",
      "https://img.3dmgame.com/uploads/images/news/20181016/1539696512_832360.jpg",
      "https://www.weidown.com/d/file/xiazai/game/dxyx/2019-03-08/229a8528afefe2a22e0b5a2667b52e39.png"
    ],
    description: '适应并征服一个因失序而面目全非的近未来世界。组成小队，带上尖端武器，前往变化无常的战场，最多支持 128 名玩家，规模史无前例，让您体验史诗般的破坏感。',
    introduction: '游戏采用了寒霜引擎，展现了更强大的3D细节效果，把动画、环境破坏、光照、地图和音效提升到一个新的高度。游戏于2018年11月20日在PC、Xbox平台正式发售。'
  },
  {
    id: 17,
    name: '怪物猎人：崛起',
    type: "角色扮演",
    developer: "卡普空",
    publisher: "卡普空",
    platform: ["Nintendo Switch", "PC"],
    tags: ["动作", "大世界", "角色扮演", "格斗"],
    saleStatus: "热卖中",
    images: [
      "https://p.qpic.cn/mwegame/0/6fddb9aba4a6e17406ef0f63328a9214/",
      "https://img.3dmgame.com/uploads/images/thumbpicfirst/20210112/1610421309_721111.jpg",
      "https://img.3dmgame.com/uploads/images/news/20210119/1611014029_157870.jpg",
      "https://media.9game.cn/gamebase/2021/5/2/227048408.png"
    ],
    description: '游戏以“新动作、新原野、新怪物”为卖点，玩家将化身猎人进行狩猎，制作更强的武器装备以挑战更为强大的怪物',
    introduction: '游戏开始玩家需要进行角色及随从的创建。玩家角色装备的部分防具外观会因性别而异；不同性别有各自专属的可装备防具；防具之类的外观虽有差异，但能力不会因角色性别不同而有差别'
  },
  {
    id: 18,
    name: '星之卡比 探索发现',
    type: "动作冒险",
    developer: "HAL研究所",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    tags: ["动作","角色扮演","冒险"],
    saleStatus: "热卖中",
    images: [
      "https://ts1.cn.mm.bing.net/th/id/R-C.c12ca6ec8110f361fb681fd5fd42150e?rik=tJOI%2f7ioLCAKRQ&riu=http%3a%2f%2fi1.073img.com%2fallimg%2f220411%2f1553062255-0.jpg&ehk=i0dsNLxTHAu1yAFrf4bf1YmAhQry6BcKrhxvxzW85i0%3d&risl=&pid=ImgRaw&r=0",
      "https://p.qpic.cn/mwegame/0/c3d5752918b4cf7ce9f32f7f407cae25/",
      "https://ts1.cn.mm.bing.net/th/id/R-C.e0eca2e8323c028c4d8d88278454dc2b?rik=JwMDGrQXzVQgNw&riu=http%3a%2f%2fwww.3dmgame.com%2fuploads%2fallimg%2f180228%2f303_180228092556_2.jpg&ehk=kIRXimBUcKMmHUaUkBvzc1GtMu02GWZz9SbHs15zYv4%3d&risl=&pid=ImgRaw&r=0"
    ],
    description: '卡比来到了文明与自然融合的未知“新世界”，发现了被神秘敌人“野兽军团”捉走了的瓦豆鲁迪们。',
    introduction: '《星之卡比 探索发现》是一款如果玩家不经常带着傻笑就很难玩得下去的游戏，它是一款拥有丰富视觉效果的可爱且迷人的平台游戏，它出色的动态能力设计和不断地改变着的平台和行动都值得玩家购买。'
  },
  {
    id: 19,
    name: '异度神剑3',
    type: "RPG",
    developer: "Monolith",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    tags: ["动作", "冒险"],
    saleStatus: "热卖中",
    images: [
      "https://img.3dmgame.com/uploads/images/news/20220808/1659909916_881984.jpg",
      "https://p.qpic.cn/mwegame/0/0e3d27962f164ee12490101237962935/",
      "https://img.3dmgame.com/uploads/images/news/20200407/1586222733_934917.jpg",
      "https://img.3dmgame.com/uploads/images/news/20220711/1657505002_840085.jpg"
    ],
    description: '为了生存而战，为了战斗而生。\n' +
      '连接过去与未来，生命的故事。\n' +
      '壮阔自然环境连绵不断的世界「艾欧尼翁」。\n' +
      '由两个敌对国家「科维斯」和「安格努斯」引起的激烈斗争中，分别隶属于两国的六位少年少女。\n' +
      '为何不得不战斗……为了知道真相，向「大剑耸立的大地」前进。',
    introduction: '从《异度神剑》第一代开始的主题，以及通过系列开发的游戏系统都会集结在本作当中。  \n' +
      '2022年TGA年度游戏提名中，获得年度最佳游戏、最佳配乐、最佳RPG三项提名。 '
  },
  {
    id: 20,
    name: '斯普拉遁3',
    type: "第三人称射击游戏",
    developer: "任天堂",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    tags: ["第三人称", "射击"],
    saleStatus: "热卖中",
    images: [
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_700/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
      "https://www.leiyouxi.com/wp-content/uploads/2022/08/1661795261.jpg"
    ],
    description: '玩家在游戏中将进行4对4的团体战，并以在3分钟的时间限制内将墨汁涂抹最多面积或占地最多为目标。',
    introduction: '作的舞台位于“蛮颓地区”，那是一片烈日高照的荒芜沙漠。沙漠的中心地带是以混杂街道为主的“蛮颓镇”，许多热爱对战的鱿鱼和章鱼皆聚集于此。对“占地对战”这个特技&时尚的运动非常着迷的他们，将组成队伍来互相对战。'
  },
  {
    id: 21,
    name: '超级马力欧卡丁车8: 豪华版 ',
    type: "多人竞速",
    developer: "任天堂",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    tags: ["家庭", "派对", "竞速", "多人"],
    saleStatus: "热卖中",
    images: [
      "https://mario.nintendo.com/static/b2df5b31e1a74a11b1d9c87e4819c263/8c3c2/video-button.jpg",
      "https://ts1.cn.mm.bing.net/th/id/R-C.ce1dab5739df1ebb4803c6ee79b722b9?rik=6GPyMPS%2fkZg9yA&riu=http%3a%2f%2fwww.3dmgame.com%2fuploads%2fallimg%2f170429%2f154_170429144006_6.jpg&ehk=Zk%2fr%2bNPRGiZi5iTA%2b3QEigz9Mtf0eNBotd9MEew2Qjk%3d&risl=&pid=ImgRaw&r=0",
      "https://images.ali213.net/picfile/pic/2019/12/19/20191219104657862.jpg"
    ],
    description: '使用各式各样的有趣道具，选择包括马力欧在内的42个经典任天堂角色，自定义你的爱车，进行热闹非凡的比赛吧。',
    introduction: '在比赛中可以使用各种各样的道具扭转战局。例如，向对手发起攻击的吞食花、让赛车瞬间加速的冲刺蘑菇等等。使用时机恰当的话，就能一举反败为胜。\n' +
      '在游戏中打开智能驾驶功能，就可以保证绝对不会从赛道上跌落，即使是新玩家也能轻松体验到乐趣。'
  },
  {
    id: 22,
    name: '最终幻想VII：重制版',
    type: "角色扮演",
    developer: "Square Enix",
    publisher: "Square Enix",
    platform: ["PC", "PlayStation 5"],
    tags: ["角色扮演", "动作", "格斗"],
    saleStatus: "热卖中",
    images: [
      "https://n.sinaimg.cn/sinacn20113/600/w1920h1080/20191130/7425-ikcaceq7047502.jpg"
    ],
    description: '游戏讲述了身背毁灭剑的前神罗战士克劳德踏入魔晄都市米德加，协助“雪崩”组织成员对抗汲取星球生命精华作为能源并拥有极大权力的巨型企业“神罗”所发生的一系列故事。',
    introduction: '在米德加这个拥有八座魔晄炉的阶层都市，藉由魔晄掌握世界的巨大企业神罗公司与为了保护星球挺身而出的反神罗组织雪崩爆发激烈冲突。前神罗战士克劳德，以佣兵的身份参加雪崩的一号魔晄炉引爆作战。魔晄炉爆炸的巨响响彻第八区。陷入火海的城镇中，出现那位已故死敌飘渺的幻影。克劳德追着渴望消灭的昔日幻影，最后与她相遇。卖花女递出一朵黄花，花语是重逢。\n' +
      '这瞬间，一团黑影──命运守望者将两人包围。心念将再次于星球流转。'
  },
  {
    id: 23,
    name: '超级马力欧：奥德赛',
    type: "动作冒险",
    developer: "任天堂",
    publisher: "任天堂",
    platform: ["Nintendo Switch"],
    tags: ["动作", "冒险", "沙盒", "箱庭"],
    saleStatus: "热卖中",
    images: [
      "https://image.gcores.com/20032f9f-4a36-4d4f-92cc-d82745f9e09f.png?x-oss-process=image/resize,limit_1,m_lfit,w_1600/quality,q_90",
      "https://ts1.cn.mm.bing.net/th/id/R-C.8e74ad7db1c20719fb45e8d344815dcb?rik=oarNbS%2bwFGLRSQ&riu=http%3a%2f%2fimg01.vgtime.com%2fgame%2fcover%2f2017%2f12%2f01%2f171201152346279.jpg&ehk=tKkWZiUPGSM%2bnMTkr7W5rwepX%2fVy4UsAD2vMl3G86uE%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.9a2df17eb1cacd2710f49cddaf48218d?rik=DvMFE2F8oaECdQ&riu=http%3a%2f%2fimg01.vgtime.com%2fgame%2fcover%2f2017%2f12%2f01%2f171201152230887.jpg&ehk=KG%2fQ2xA%2brOm93HMC0YLNvnvYYYvmFJpjXmRTHC%2bv9l4%3d&risl=&pid=ImgRaw&r=0"
    ],
    description: '桃花公主又一次在马力欧面前被掳走了。酷霸王这次的目的，居然是要和桃花公主举办婚礼！？\n' +
      '为了准备举行盛大的婚礼，酷霸王把世界搅了个天翻地覆。',
    introduction: '马力欧在追踪酷霸王时的好搭档，就是变身为马力欧标志性红帽子的，帽子国居民“凯皮”。借助凯皮的强大力量，冒险如有神助！居然还能附身于敌人，并自由操纵它们……？！\n' +
      '乘坐飞船“奥德赛号”， 以“某一个”地球为舞台，前往世界之旅。收集散落于全世界的“力量之月”， 就能提升奥德赛号的动力，这样马力欧就可以飞向更多的国度了。'
  },
  {
    id: 24,
    name: '女神异闻录5 皇家版',
    type: "角色扮演",
    developer: "P社",
    publisher: "世嘉",
    platform: ["PlayStation 5", "PC", "Nintendo Switch"],
    tags: ["都市", "怪盗", "日常"],
    saleStatus: "热卖中",
    images: [
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_900/ncom/en_US/games/switch/p/persona-5-royal-switch/hero",
      "https://img.3dmgame.com/uploads/images/news/20200206/1580966353_926113.jpg",
      "https://img.3dmgame.com/uploads/images/news/20200206/1580966585_996093.jpg"
    ],
    description: '玩家在游戏中将与同样遭遇了不平等对待的伙伴们组成心之怪盗团，并通过夺取恶人磨产生欲望的秘宝来使其悔改。',
    introduction: '少年主角因某个缘由转学到“东京”的高中后，开始做起了奇异的梦。\n' +
      '——你确实是命运之“囚”啊。\n' +
      '少年被告知不久之后他就会迎来毁灭。\n' +
      '为了完成赋予他的“更生”任务，也为了将人们从邪恶欲望中拯救出来，成为怪盗的主角与各种人邂逅，结下。牵绊\n' +
      '在度过了宝贵的一年后，等待你的将是……？'
  },
];

export default games;