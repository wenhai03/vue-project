import Mock from 'mockjs'

const Random = Mock.Random

export const getSlider = (options) => {
  const template = {
    'data': [
      {'_id': Random.zip(), 'url': 'http://www.javascriptpeixun.cn/files/system/2018/09-18/111926eb7fd8309596.png?version=8.3.6'},
      {'_id': Random.zip(), 'url': 'http://www.javascriptpeixun.cn/files/system/2018/09-21/115355363dbc278291.png?version=8.3.6'},
      {'_id': Random.zip(), 'url': 'http://www.javascriptpeixun.cn/files/system/2018/09-21/1154091603c0186386.png?version=8.3.6'},
    ]
  }
  
  return Mock.mock(template)
  
}

