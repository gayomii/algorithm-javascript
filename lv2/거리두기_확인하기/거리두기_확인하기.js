function solution(places) {
  let answer = [1,1,1,1,1];

  places.forEach((place, cnt) => {
      let part = []
      place.forEach((seats, i) => {
          for(let j=0; j<seats.length; j++) {
              if(place[i][j] === 'P') {
                  const [r1, c1] = [i, j]
                  part.forEach(p => {
                      const [r2, c2] = p
                      const xDistance = Math.abs(r1 - r2)
                      const yDistance = Math.abs(c1 - c2)
                      if(xDistance + yDistance === 1) {
                          return answer[cnt] = 0
                      } else if(xDistance + yDistance === 2) {
                          if(xDistance === 0 || yDistance === 0) {
                              place[(r1+r2)/2][(c1+c2)/2] === 'O' ? answer[cnt] = 0 : ''
                          } else {
                              if(place[r1][c2] === 'O' || place[r2][c1] === 'O') return answer[cnt] = 0
                          }
                      } 
                  })
                  if(answer[cnt] !== 0) part.push([i, j])  
              }
          }
      })
  })
  
  return answer;
}