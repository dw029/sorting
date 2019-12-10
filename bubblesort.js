const bubbleSort = arr => {
  if (!arr.length) {
    return arr
  }
  let sorted = false

  while (sorted === false) {
    sorted = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1] && arr[i + 1]) {
        sorted = false
        let temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
  }

  return arr
}

console.log(bubbleSort([4, 3, 17, 2, 9, 1]))
