import Mock from 'mockjs'

const Random = Mock.Random

export const login = () => {
  const template = {
    'data': {
      _v: 0,
      _id: Random.zip(),
      username: 'admin',
      role: 'akljsflkj22lkj',
      authList: [],
      gender: -1,
      status: 0,
      token: Random.guid()
    }
  }
  
  return Mock.mock(template)
  
}
