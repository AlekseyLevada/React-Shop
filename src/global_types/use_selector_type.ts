import { useSelector } from 'react-redux'

/**
 * Дженерик для хука useSelector
 * T и Y - в данном случае, являются абстрактными параметрами и могуть быть 
 * чем угодно, однако мы не можем обратится к нему, как к массиву, 
 * в этом случае, нужно заменить T на T[]
 * 
 * 
 * Пример:
 * https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state
 */

export function useSelectorTyped<T, Y>(fn: (state: T) => Y) {
    return useSelector(fn)
}