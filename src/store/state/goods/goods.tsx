import { iGoods } from "../../../components/good_list/types";

export function createInitialState() {
    return {
        basket: [] as iGoods,
        goods: [] as iGoods,
    }
}