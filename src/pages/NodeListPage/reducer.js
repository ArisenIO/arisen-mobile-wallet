/*
 * HomeReducer
 *
 */
const initState = {
    allAsset: [],
};
export default function NodeListPageReducer (state = initState, action) {
    switch (action.type) {
        case "HOME_GETALLASSET_REDUCER":
            console.log('node list get all');
            return Object.assign({}, state, {
                "allAsset": action.data
            });
        default:
            return state;
    }
}
