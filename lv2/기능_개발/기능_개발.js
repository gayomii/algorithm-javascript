function solution(progresses, speeds) {
  const answer = []
  const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]))

  let max = days[0]
  let cnt = 1
  
  for(let i=1; i<days.length; i++) {
    if(max < days[i]) {
      answer.push(cnt)
      max = days[i]
      cnt = 1
    } else {
      cnt ++
    }
  }
  
  answer.push(cnt)
  
  return answer
}
