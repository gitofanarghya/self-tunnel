import { deviceConstants } from '../_constants';
import { deviceServices, authServices } from '../_services';

export const deviceActions = {
    getDevices
};

function getDevices() {
    return dispatch => {
        dispatch(request());
        authServices.loginEmail("vishnu@astralpresence.in", "password")
            .then(
                refreshToken => {
                    console.log(refreshToken);
                    refreshToken = refreshToken.message;
                    var refreshToken1 = refreshToken.substring(2);
                    var refToken = refreshToken1.substring(0, refreshToken1.length - 1);
                    console.log(refreshToken, refreshToken1, refToken);
                    authServices.getAccessToken(refToken)
                        .then(
                            accessToken => {
                                accessToken = accessToken.message;
                                var accessToken1 = accessToken.substring(2);
                                var accToken = accessToken1.substring(0, accessToken1.length - 1);
                                console.log(accToken);
                                deviceServices.getDevices(accToken)
                                .then(
                                    devices => { 
                                        console.log(devices['message']);
                                        dispatch(success(devices['message']));
                                    },
                                    error => {
                                        dispatch(failure(error.toString()));
                                        console.log(error);
                                    }
                                ); 
                            }
                        )
                }
            );

    };

    function request() { return { type: deviceConstants.GET_DEVICES_REQUEST } }
    function success(devices) { return { type: deviceConstants.GET_DEVICES_SUCCESS, devices } }
    function failure(error) { return { type: deviceConstants.GET_DEVICES_FAILURE, error } }
}
