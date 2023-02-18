import axios from 'axios';

export function getCustomers(url, token){
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  return axios.get(url, config);
}
