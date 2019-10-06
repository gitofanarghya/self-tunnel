import { routingConstants } from '../_constants';

export const routingActions = {
    setSpaceOccupier,
};

function setSpaceOccupier(occupier, selectedDevice) {
    return dispatch => {
        dispatch(success(occupier, selectedDevice));
    };
    function success(occupier, selectedDevice) { return { type: routingConstants.SET_SPACE_OCCUPIER, occupier, selectedDevice} }
}