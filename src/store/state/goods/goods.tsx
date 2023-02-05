import { iGoods } from "../../../global_types";

export function createInitialState() {
    return {
        basket: [] as iGoods,
        list: [] as iGoods,
    }
}