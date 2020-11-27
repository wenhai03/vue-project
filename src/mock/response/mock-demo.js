import Mock from 'mockjs'

const Random = Mock.Random

export const getSlider = (options) => {
  const template = {
    'str|2-3': '小明',
    'name|2': 'lison',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'bool2|1-9': true, // min/(min+max)的概率  1/10
    'obj|1': { // 随机取一个，作为属性值
      a: 'aa', b: 'bb', c: 'cc'
    },
    'arr|2-4': [1, 2, 3], // 整个数组重复2-4的概率
    'arr2|2': ['a', 'b'], // 整个重复两次
    'func': () => {
      return 'this is created by function'
    },
    'reg': /[1-9][a-z]/, // 随机生成
    'email': Random.email(), // 随机生成邮箱
    'email2': Mock.mock('@email'),
    'email3': Random.email('tic.com'),
    'range': Random.range(3, 10, 2), // 相差2开始
    'date': Random.date('yyyy-MM-dd'),
    'time': Random.time('hh:mm'),
    'datetime': Random.datetime('yyyy-MM-dd a hh:mm'),
    'now': Random.now('hour', 'yyyy-MM-dd a hh:mm'),
    'img': Random.image(),
    // 'img_base64': Random.dataImage(),
    'img2': Random.image('100x200', '#00ff00', '#fff', 'png', '小明'),
    'color': Random.color(),
    'cword': Random.cword('玩送达方法', 2, 5 ), // 随机生成2到5个
    'cname': Random.cname(), // 随机名字
    'region': Random.region(),
    'province': Random.province(),
    'city': Random.city(true),
    'county': Random.county(true),
    'zip': Random.zip(), // 随机生成6位数
    'pick': Random.pick(1,2,3,4), // 随机选一
    'shuffle': Random.shuffle([11,22,33,44]), // 打乱
    'guid': Random.guid(), // 类似token
    // 'fruit': Random.fruit(),
    'fruit2': '@fruit',
  }
  
  return Mock.mock(template)
  
}

/*
export const getSlider = (options) => {
  const template = {
    'str|2-3': '小明',
    'name|2': 'lison',
    'age|+2': 18
  }
  let i = 3
  let arr = []
  while (i--){
    arr.push(template)
  }
  return Mock.mock(arr)
  
}
*/

/*
export const getSlider = (options) => {
  return {
    name: '0000000'
  }

}
*/
