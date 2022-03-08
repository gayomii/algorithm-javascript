function solution(n) {
  let answer = ''
  
  while(n > 0) {
      const remainder = n%3
      
      remainder === 0 ? answer = '4' + answer : answer = remainder.toString() + answer
      n = Math.ceil(n/3) - 1
  }
  
  return answer
}