import {LOAD_BENEFITS_SUCCESS, SEND_REQUEST_RESULT} from '../constants/actionTypes';
import * as Urls from '../constants/apiUrls';
import * as Requests from '../constants/postRequests';
import axios from 'axios';

export function SMSRequestResult(smsSent) {
  return {type: SEND_REQUEST_RESULT, smsSent};
}

export function loadBenefitsSuccess(benefits) {
  return {type: LOAD_BENEFITS_SUCCESS, benefits};
}


export function loadBenefits() {
  return function (dispatch) {
    return fetch(Urls.GET_ALL_BENEFITS)
    .then(resp => resp.json())
    .then((benefits) => {
      dispatch(loadBenefitsSuccess(benefits.coupons));
    }).catch((error) => {
      throw (error);
    });
  };
}


export function sendSMS(phoneNumber, couponCode, benefitId) {
  return function(dispatch){
    Requests.SEND_SMS_BODY.to = phoneNumber;
    Requests.SEND_SMS_BODY.text = "here is your benefit- http://dollarding/shared/" + benefitId + 
    "\n coupon code- " + couponCode;
    
    return axios.post(Urls.SEND_SMS,Requests.SEND_SMS_BODY)
    .then(res => {
      if (res.ok){
        return dispatch(SMSRequestResult(true));
      }
    })
    .catch(err => {
        console.log(err);
        return dispatch(SMSRequestResult(false));
      });
    };
}

export function sendEmail(mailAdress, benefitId, benefitName) {
  return function(dispatch){
    const benefitLink = "http://dollarding/shared/" + benefitId;
    const mailBody = Requests.SEND_EMAIL_BODY(mailAdress, benefitName, benefitLink);
    return axios.post(Urls.SEND_EMAIL, mailBody)
    .then(res => {
      if (res.ok){
        return dispatch(SMSRequestResult(true));
      }
      })
    .catch(error => {
      console.log(error);
      return dispatch(SMSRequestResult(true));
    });
  };
}