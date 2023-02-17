import axios from 'axios';
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const express = require('express')
// const app = express()

export function getCustomers(url, token){
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  return axios.get(url, config);
}
