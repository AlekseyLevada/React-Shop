export function createExtraReducers() {
    return{
        ...getAll,
    }

    function getAll() {
        return {}
    }
}