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

function notice() {
  return axios.get(`${BASEURL}/api/notice.json`);
}

function ranking() {
  return axios.get(`${BASEURL}/api/ranking.json`);
}

function hotList() {
  return axios.get(`${BASEURL}/api/hotlist.json`);
}

function overview() {
  // todo
  return axios.get(`${BASEURL}/api/hotlist.json`);
}

function video() {
  return axios.get(`${BASEURL}/api/video.json`);
}

function news() {
  return axios.get(`${BASEURL}/api/news.json`);
}

function glory() {
  // todo
  return axios.get(`${BASEURL}/api/hotlist.json`);
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
