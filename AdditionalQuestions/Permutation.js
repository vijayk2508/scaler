function getPermutation(str){
    let permutation=[]
    
    for(let i=0; i< str.length; i++){
      const char = str[i]
      
      const start = str.slice(0,i)
      const end = str.slice(i+1)
      const remaining = start + end
      
      const subPermutations = remaining.length <=1 ?  [remaining] : getPermutation(remaining)
      
      for(let sub of subPermutations){
        permutation.push(char + sub)
      } 
    }
    
    return permutation
  }
  
  getPermutation("abc")