import axios from 'axios';

const BASEURL = '/static/api';
// const BASEURL = '/api';

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

function notice() {
  return axios.get(`${BASEURL}/index/notice.do`);
}

function ranking() {
  return axios.get(`${BASEURL}/index/ranking.do`);
}

function hotList() {
  return axios.get(`${BASEURL}/index/hotlist.do`);
}

function overview() {
  return axios.get(`${BASEURL}/index/overview.do`);
}

function video() {
  return axios.get(`${BASEURL}/index/video.do`);
}

function news() {
  return axios.get(`${BASEURL}/index/news.do`);
}

function glory() {
  return axios.get(`${BASEURL}/index/glory.do`);
}

export default {
  notice,
  ranking,
  hotList,
  overview,
  video,
  news,
  glory,
};
