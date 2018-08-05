export const getList = (list) => {
    return {
        type: 'LIST_OF_EVENTS_FETCHED',
        payload: list
    }
}