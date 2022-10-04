import axios from 'axios';
import { config } from '../config';


function authorizationHeader() {
  return {
    "referrer": window.location.href.includes("&saleassist_referrer=") ? window.location.href.split("&saleassist_referrer=")[1] : window.location.href
  };
}

export function getCall({url = config.url.BASE, path = '', params = {}, onSuccess = () => {}, onFailure = () => {}}) {
  var reqConfig = {};
  reqConfig.params = params;
  reqConfig.headers = authorizationHeader();
  return axios
    .get((url + "/" + path).replace(/([^:]\/)\/+/g, "$1"), reqConfig)
    .then((response) => {onSuccess(response)})
    .catch((error) => {onFailure(error)});
}

export function getCallWithParams({url = config.url.BASE, path = '', params = {}, onSuccess = () => {}, onFailure = () => {}}) {
  var reqConfig = {}
  reqConfig.params = params;
  reqConfig.headers = authorizationHeader();
  return axios
    .get((url + "/" + path).replace(/([^:]\/)\/+/g, "$1"), reqConfig)
    .then((response) => {onSuccess(response)})
    .catch((error) => {onFailure(error)});
}

export function postCall({url = config.url.BASE, path = '', data = {}, onSuccess = () => {}, onFailure = () => {}}) {
  var reqConfig = {}
  reqConfig.headers = authorizationHeader();
  return axios
    .post((url + "/" + path).replace(/([^:]\/)\/+/g, "$1"), data, reqConfig)
    .then((response) => {onSuccess(response)})
    .catch((error) => {onFailure(error)});
}

export function deleteCall({url = config.url.BASE, path = '', onSuccess = () => {}, onFailure = () => {}}) {
  var reqConfig = {}
  reqConfig.headers = authorizationHeader();
  return axios
    .delete((url + "/" + path).replace(/([^:]\/)\/+/g, "$1"), reqConfig)
    .then((response) => {onSuccess(response)})
    .catch((error) => {onFailure(error)});
}

export function putCall({url = config.url.BASE, path = '', data = {}, onSuccess = () => {}, onFailure = () => {}}) {
  var reqConfig = {}
  reqConfig.headers = authorizationHeader();
  return axios
    .put((url + "/" + path).replace(/([^:]\/)\/+/g, "$1"), data, reqConfig)
    .then((response) => {onSuccess(response)})
    .catch((error) => {onFailure(error)});
}

export function uploadFiles({url = config.url.BASE, path = '', files = [], onSuccess = () => {}, onFailure = () => {}}) {
  var reqConfig = {}
  reqConfig.headers = authorizationHeader();
  var formData = new FormData();
  files.map((file) => (
    formData.append('files', file)
  ));
  return axios
    .post((url + "/" + path).replace(/([^:]\/)\/+/g, "$1"), formData, reqConfig)
    .then((response) => {onSuccess(response)})
    .catch((error) => {onFailure(error)});
}

export function uploadBlob({url = config.url.BASE, path = '', blob = {}, fileName = '', onSuccess = () => {}, onFailure = () => {}}) {
  var reqConfig = {}
  reqConfig.headers = authorizationHeader();
  var formData = new FormData();
  formData.append('files', blob, fileName);
  // formData.append('data', blob);
  return axios
    .post((url + "/" + path).replace(/([^:]\/)\/+/g, "$1"), formData, reqConfig)
    .then((response) => {onSuccess(response)})
    .catch((error) => {onFailure(error)});
}