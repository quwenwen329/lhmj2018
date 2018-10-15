import axios from 'axios';

const BASEURL = '/static';

const ERROR = {
  SUCCESS: { CODE: '0', MSG: '成功' },
};

axios.interceptors.response.use((response) => {
  if (response.data.code === ERROR.SUCCESS.CODE) {
    return response.data.data;
  }
  throw new Error(`服务器返回异常编号：${response.data.code}错误信息：${response.data.msg}`);
}, (err) => {
  throw new Error(err);
});

function hotList() {
  return axios.get(`${BASEURL}/api/hotlist.json`);
}

export default {
  hotList,
};
