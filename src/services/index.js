import request from 'utils/request';
const URL = 'http://localhost:3000';

export async function loaddirectories() {
  return request(`${URL}/directories`);
}
