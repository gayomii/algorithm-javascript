function solution(id_list, report, k) {
  let answer = []
  let reported_cnt = {}
  let reported_ids = {}

  // 초기화
  id_list.forEach((id, idx) => {
      reported_cnt[id] = 0
      reported_ids[id] = []
      answer[idx] = 0
  })
  
  // 한 유저가 동일한 유저를 여러번 신고한 경우, 중복 제거
  const setReport = [...new Set(report)]
  
  // 유저들의 신고 횟수
  setReport.forEach(r => {
      const [reporter, reported_id] = r.split(' ')
      
      reported_cnt[reported_id] += 1
      reported_ids[reporter].push(reported_id)
  })
  
  // k번 이상 신고된 정지 유저
  const stoped_ids = Object.keys(reported_cnt).filter(v => reported_cnt[v] >= k)

  // 정지 알림 메일을 받은 횟수
  stoped_ids.forEach(stoped_id => {
      id_list.forEach((id, index) => {
          if(reported_ids[id].includes(stoped_id)) {
              answer[index] += 1
          }
      })
  })
  
  
  return answer;
}