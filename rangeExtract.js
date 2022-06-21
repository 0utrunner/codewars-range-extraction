exports.extract = function solution(list){
    let range = []
    let start = []
    let check = []
    let amount = []
    let end = []
    
    while (list.length > 0){
      start = list.shift()
      check = start
      while(check + 1 == list[0]){
        amount.push(check)
        check = list.shift()
      }
      amount.push(check)
      end = check
      if(amount.length > 2){
        range.push(`${start}-${end}`)
      } else {
        range.push(...amount)
      }
      amount = []
    }
     return range.toString()
   }