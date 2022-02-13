function solution(s) {
  let answer = []
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const regex = new RegExp(/[0-9]/);
  
  let currentStr = ''
  
  for(i in s) {
      if(regex.test(s[i])) {
          answer.push(s[i])
      } else {
          currentStr += s[i]
          const engNum = numbers.indexOf(currentStr)
          if(engNum !== -1) {
              answer.push(engNum)
              currentStr = ''
          }
      }
  }

  answer = parseInt(answer.join(''))
  
  return answer;
}