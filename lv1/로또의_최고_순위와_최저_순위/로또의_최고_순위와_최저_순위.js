function solution(lottos, win_nums) {
  let answer = []
  let ranking = [6, 6, 5, 4, 3, 2, 1]
  let zero_cnt = 0
  let correct_cnt = 0

  lottos.forEach(lotto => {
      if(lotto === 0) {
          zero_cnt++
      } else {
          if(win_nums.indexOf(lotto) !== -1) {
              correct_cnt++
          }
      }
  })

  answer = [ranking[correct_cnt + zero_cnt], ranking[correct_cnt]]

  return answer;
}