function solution(n) {
  let answer = 0
  let oneCnt = 0
  
  oneCnt = findOneCnt(n)
  answer = n+1
  
  for(let i=answer; i<10000000; i++) {
      let nextNum = i
      let cnt = findOneCnt(nextNum)
      
      if(cnt === oneCnt) {
          answer = i
          break
      }
  }
  
  return answer
}

function findOneCnt(num) {
  let cnt = 0
  
  while(num>0) {
      if(num%2) cnt++
      num = parseInt(num/2)
  }
  
  return cnt
}