import Mock from 'mockjs'


export const getCaptcha = () => {
  const template = {
    'data': {
      svg: /[1-9][a-z][1-9][a-z]/
    }
  }
  
  return Mock.mock(template)
  
}
