import { iGoods } from './i_goods'

export interface iReduxGoodsState {
    goods: {
        basket: iGoods
        list: iGoods
    }
}