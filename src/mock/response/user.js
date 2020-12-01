import Mock from 'mockjs'

const Random = Mock.Random

export const login = () => {
  const template = {
    'data': {
      _v: '0000000000000',
      _id: Random.zip(),
      username: 'admin',
      role: 'akljsflkj22lkj',
      authList: [
        {
          _v: 0,
          _id: Random.zip(),
          name: '个人中心',
          pid: -1,
          path: '/manager/personal',
          role: 'akljsflkj22lkj',
          gender: -1,
        },
        {
          _v: 0,
          _id: Random.zip(),
          name: '个人中心',
          pid: -1,
          path: '/manager/personal',
          role: 'akljsflkj22lkj',
          gender: -1,
        },
        {
          _v: 0,
          _id: Random.zip(),
          name: '个人中心',
          pid: -1,
          path: '/manager/personal',
          role: 'akljsflkj22lkj',
          gender: -1,
        },
        {
          _v: 0,
          _id: Random.zip(),
          name: '个人中心',
          pid: -1,
          path: '/manager/personal',
          role: 'akljsflkj22lkj',
          gender: -1,
        }
      ],
      gender: -1,
      status: 0,
      token: Random.guid()
    }
  }
  
  return Mock.mock(template)
  
}

export const validate = () => {
  const template = {
    'data': {
      _v: 0,
      _id: Random.zip(),
      username: 'admin',
      role: 'akljsflkj22lkj',
      authList: [
        {
          _v: 0,
          _id: Random.zip(),
          name: '个人中心',
          pid: -1,
          path: '/manager/personal',
          auth: 'personal',
          role: 'akljsflkj22lkj',
          gender: -1,
        },
        {
          _v: 0,
          _id: Random.zip(),
          name: '我的收藏',
          pid: -1,
          path: '/manager/personal',
          auth: 'myCollection',
          role: 'akljsflkj22lkj',
          gender: -1,
        },
        {
          _v: 0,
          _id: Random.zip(),
          name: '我的文章',
          pid: -1,
          path: '/manager/myArticle',
          auth: 'myArticle',
          role: 'akljsflkj22lkj',
          gender: -1,
        },
        {
          _v: 0,
          _id: Random.zip(),
          name: '私信消息',
          pid: -1,
          path: '/manager/privateMessage',
          auth: 'privateMessage',
          role: 'akljsflkj22lkj',
          gender: -1,
        }
      ],
      gender: -1,
      status: 0,
      token: Random.guid()
    }
  }
  
  return Mock.mock(template)
  
}
