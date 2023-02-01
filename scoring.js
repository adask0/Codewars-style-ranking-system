class User {
    constructor(){
      this.progress = 0;
      this.i = 0;
      this.arr = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]
      this.rank = this.arr[this.i]
      this.rankDiff = 0;
    }
    
    incProgress(activityRank){
      if(!this._isValidRank(activityRank)){
        throw new Error('Invalid rank value')
      }
      
      if(activityRank < 0 && this.rank < 0){
        this.rankDiff = activityRank - this.rank;
      }else if(activityRank > 0 && this.rank > 0){
        this.rankDiff = activityRank - this.rank;
      }else if(activityRank > 0 && this.rank < 0){
        this.rankDiff = activityRank - this.rank - 1;
      }else if(activityRank < 0 && this.rank > 0){
        this.rankDiff = activityRank - this.rank + 1;
      }
      
      if(this.rankDiff === -1){
        this.progress += 1;
      }else if(this.rankDiff === 0){
        this.progress += 3;
      }else if(this.rankDiff >= 1){
        this.progress += 10 * this.rankDiff * this.rankDiff;
      }
  
      while(this.progress >= 100){
        this.i++;
        this.rank = this.arr[this.i]
        this.progress -= 100
      }
  
      if(this.rank === 8){
        this.progress = 0;
      }
    }
  
    _isValidRank(rank) {
      return rank !== 0 && [...Array(17).keys()].map(i => i - 8).includes(rank);
    }
  }
  const user = new User();
  