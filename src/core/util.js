export const bruteForceTree = (array = []) => {
  let data = deepCopy(array)
  data = data.filter(father => {
    let branchArr = data.filter(child => {
      // console.log(father.id, child.parentId);
      return father.id === child.parentId
    })
    if (branchArr.length > 0) {
      father.children = branchArr
    }
    return father.parentId === 0
  })
  return data
}
export const deepCopy = obj => {
  var result = Array.isArray(obj) ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key]) // 递归复制
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}
export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}
export const localSave = (key, value) => {
  localStorage.setItem(key, value)
}
