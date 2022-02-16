function solution(new_id) {
  // 1. new_id 소문자로 치환
  // 2. 사용하면 안되는 문자 제거
  // 3. .이 2개 이상이면 .하나로 치환
  new_id = new_id.toLowerCase().replace(/[^0-9a-z_\-\.]/gi,'').replace(/[.]{1,}/g, '.')

  // 4. .이 처음이나 끝에 위치하면 제거
  if(new_id[0] === '.') new_id = new_id.slice(1, new_id.length)
  if(new_id[new_id.length-1] === '.') new_id = new_id.slice(0, new_id.length-1)

  // 5. new_id가 빈문자열이면 'a'
  if(!new_id.length) new_id = 'a'

  // 6. new_id >= 16이면 앞에 15자만, 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
  if(new_id.length >= 16) {
      new_id = new_id.slice(0, 15)
      if(new_id[new_id.length-1] === '.') new_id = new_id.slice(0, new_id.length-1)
  }
  
  // 7. new_id <= 2 면 마지막 문자를 3될때까지 반복해서 끝에 붙이기
  if(new_id.length <= 2) new_id = new_id.padEnd(3, new_id[new_id.length-1])
  return new_id
}