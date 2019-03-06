import { Request } from './request'

class IndexModel extends Request {
  // 模拟获取抽奖类型
  test () {
    return this.getData({
      url:'/api/meituan/header/searchHotWords.json',
      params: {
        appkey: 'qq578850593_1551837415007'
      }
    })
  }
  // 抽奖接口
  // getDrawLottery(prizeId, drawNum) {
  //   return this.getData({
  //     url: '/lotteryWinner/drawLottery',
  //     params: {
  //       prizeId: prizeId, // 奖品id
  //       drawNum:  drawNum// 抽奖人数
  //     }
  //   })
  // }
}

export { IndexModel }
