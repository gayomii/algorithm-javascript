function solution(s) {
  let answer
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  numbers.forEach((number, i) => {
      const reg = new RegExp(number, 'g')
      s = s.replace(reg, i)
  })

  answer = parseInt(s)
  return answer
}