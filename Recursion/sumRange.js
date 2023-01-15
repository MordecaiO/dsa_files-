function sumRange (num){
  // base case 
    if (num === 1) return 1 ;
  // different input
    return num + sumRange(num - 1 )
}
