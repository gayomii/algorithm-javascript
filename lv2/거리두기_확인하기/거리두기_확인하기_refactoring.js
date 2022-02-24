function solution(places) {
  let answer = places.map(place => checkKeepDistance(place))
  
  return answer;
}

function checkKeepDistance(place) {
  let part = []
  let result = 1

  place.forEach((seats, i) => {
    for(let j=0; j<seats.length; j++) {
      if(place[i][j] === 'P') {
        const [r1, c1] = [i, j]
        part.forEach(p => {
          const [r2, c2] = p
          const xDistance = calculateDistance(r1, r2)
          const yDistance = calculateDistance(c1, c2)

          if(xDistance + yDistance === 1){ 
            return result = 0
          } else if(xDistance + yDistance === 2) {
            if(xDistance === 0 || yDistance === 0) {
              const x = (r1+r2)/2
              const y = (c1+c2)/2
              if(checkEmptySeat(place, x, y)) return result = 0
            } else {
              if(checkEmptySeat(place, r1, c2) || checkEmptySeat(place, r2, c1)) return result = 0
            }  
          }
        })
        if(result) part.push([i, j])  
      }
    }
  })
  return result
}

function calculateDistance(x, y) {
  return Math.abs(x - y)
}

function checkEmptySeat(place, i, j) {
  return (place[i][j] === 'O')
}