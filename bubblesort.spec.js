describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([])
  })
  it('returns an array', function() {
    expect(Array.isArray(bubbleSort([3, 4, 1]))).toEqual(true)
  })
  it('takes an array and return that array sorted from least to greates', function() {
    expect(bubbleSort([3, 4, 1])).toEqual([1, 3, 4])
  })
})
