import actionTypes from './action-types';



//  this is just a mock up for now

export function updateProfile(profile){
    return(
        {
            action: actionTypes.UPDATE_PROFILE,
            payload: profile
        }
    )
}