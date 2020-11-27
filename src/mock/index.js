import Mock from 'mockjs'
import {getSlider} from './response/getSlider'

const Random = Mock.Random

Mock.mock('http://localhost:8080/getSlider', getSlider)
// Mock.mock(/\/getSlider/, {name: '1111'})

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
