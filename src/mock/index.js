import Mock from 'mockjs'
import {getCaptcha} from './response/getCaptcha'
import {getSlider} from './response/getSlider'
import {login} from './response/user'


const Random = Mock.Random

Mock.mock('http://localhost:8080/getSlider', getSlider)
Mock.mock('http://localhost:8080/public/getCaptcha', getCaptcha)
Mock.mock('http://localhost:8080/user/login', login)

// 设置响应的时间
Mock.setup({
  timeout: '100-600'
})

Random.extend({
  fruit(){
    const fruit = ['apple', 'peach', 'lemon', 'orange']
    return this.pick[fruit]
  }
})

export default Mock
