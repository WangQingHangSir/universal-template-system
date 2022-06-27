// 检测数据类型
const getDataType = (data) => {
  const dataType = Object.prototype.toString.call(data)
  const mapType = {
    '[object Function]': 'function',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Undefined]': 'undefind',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp',
    '[object Null]': 'null',
    '[object Boolean]': 'boolean'
  }
  return mapType[dataType]
}
const deepCopy = (data) => {
  let obj = null
  const str = getDataType(data)
  if (str === 'array') {
    obj = []
    for (let i = 0; i < data.length; i++) {
      obj.push(deepCopy(data[i]))
    }
  } else if (str === 'object') {
    obj = {}
    for (const i in data) {
      obj[i] = deepCopy(data[i])
    }
  } else {
    return data
  }
  return obj
}
export default {
  deepCopy
}
