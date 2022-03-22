function solution(orders, course) {
  let answer = []

  course.forEach(c => {
    let courses = []
    let courseCnt = {}

    // 손님 별 코스 요리 조합 
    orders.forEach(order => {
      const menus = order.split('').sort()
      courses = [...courses, ...combination(menus, c).map(arr => arr.join(''))]
    })

    // 조합이 나온 개수
    courses.reduce((prev, cur) => {
      return courseCnt[cur] ? courseCnt[cur] += 1 : courseCnt[cur] = 1
    }, courseCnt)
    
    // 2개 이상나온 조합 중 가장 큰 값
    let max = 2
    
    Object.values(courseCnt).forEach(course => { if(max < course) max = course })
    for(const [course, cnt] of Object.entries(courseCnt)) {
      if(cnt === max) answer.push(course)
    }
  })

  return answer.sort()
}

// 조합 함수
function combination(arr, num) {
  let result = []
  if(num === 1) return arr.map(e => [e])
  
  for(let i=0; i<arr.length; i++) {
    let rest = arr.slice(i+1)
    let combinations = combination(rest, num-1)
    let combiArr = combinations.map(combi => [arr[i], ...combi])
      
    result.push(...combiArr)
  }
  return result
}
