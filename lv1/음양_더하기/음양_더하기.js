function solution(absolutes, signs) {
  let answer = 123456789;
  answer = absolutes.reduce((prev, cur, idx) => signs[idx] ? prev+cur : prev+(-cur), 0)

  return answer;
}