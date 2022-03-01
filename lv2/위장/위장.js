function solution(clothes) {
  let answer = 1
  let numberOfClothes = {}
  
  clothes.forEach(c => {
    const kind = c[1]
    if(Object.keys(numberOfClothes).includes(kind)) {
      numberOfClothes[kind] += 1
    } else {
      numberOfClothes[kind] = 1
    }
  })
  
  let numbers = Object.values(numberOfClothes)
  const numberOfCase = numbers.map(number => number+1)
  answer = numberOfCase.reduce((prev, num) => num*prev, answer)
  answer -= 1
  
  return answer
}