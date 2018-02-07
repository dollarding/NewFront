import {LOAD_BENEFITS_SUCCESS} from '../constants/actionTypes';

export function loadBenefitsSuccess(benefits) {
  return {type: LOAD_BENEFITS_SUCCESS, benefits};
}

export function loadBenefits() {
  return function (dispatch) {
    return fetch('http://52.18.224.135/coupons')
    .then(resp => resp.json())
    .then((benefits) => {
      dispatch(loadBenefitsSuccess(benefits.coupons));
    }).catch((error) => {
      throw (error);
    });
  };
}
