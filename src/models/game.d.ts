declare namespace GameType {
  type GamePlatform = 'Nintendo Switch' | 'PC' | 'PlayStation 5' | 'Xbox';
  interface Game {
    id: number,                                     // 到数据库时自动分配的id
    name: string,                                   // 游戏名
    images: string[],                               // 游戏图片地址
    type: string,                                   // 游戏类型
    platform?: GamePlatform[],                      // 游戏发售平台(可能多平台)
    description?: string,                           // 游戏简短描述
    introduction?: string,
    tags?: string[]// 游戏详细介绍
    lowestConfig?: GameConfigInfo | undefined,      // 最低配置要求
    recommendConfig?: GameConfigInfo | undefined,   // 推荐配置要求
    saleStatus?: '待发售' | '热卖中' | '已下架' | undefined,
    developer?: string,                             // 开发商
    publisher?: string,                             // 发行商
  }

  /**
   * 游戏配置要求(如果有PC端， 若无则不写)
   */
  interface GameConfigInfo {
    CPU?: string,     // CPU要求
    GPU?: string,     // GPU|显卡 要求,
    disk?: string     // 硬盘空间
    memory?: string   // 内存要求
  }

}