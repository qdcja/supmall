import {request} from "./request";

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
// 将我们需要的信息整合到Goods里，然后通过构造函数constructor传入值
// 下次我们使用这些数据的时候，就可以直接调用Goods里的这些title\desc等
// 商品基本信息
export class Goods {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}

// 店铺信息
export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods
	}
}
