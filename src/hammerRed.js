var hammerRed = cc.Sprite.extend({
  ctor: function(Preson) {
    this._super();
    this.combo = 0 ;
    this.changeHammer();
    this.scheduleUpdate(); 
    this.isHit = false ;
    this.person = Preson;
    this.showEffect = false;
    this.hammerBlue = null;

  },

  update:function(){
    this.checkHit();
    this.changeHammer();
  },

  changeHammer:function(){
    if (this.combo>=5) {
       this.initWithFile( res.hammerRedCombo2_png );
    }
    else if (this.combo>=3) {
       this.initWithFile( res.hammerRedCombo1_png );
    }
    else{
       this.initWithFile( res.hammerRed_png );
     }
     this.setAnchorPoint(0.5,0);
     this.setPosition(this.x,200);
  },

  checkHit:function(){
    if( this.isHit && this.collsion() ){
      if(this.person.numPicture<=12){
        cc.audioEngine.playEffect( res.yellBoy_wav ) ;
        this.combo++;
      }
      else{
        cc.audioEngine.playEffect( res.yellGirl_wav ) ;
        this.combo = 0 ;
      }
      this.isHit = false;
      this.person.direction = Person.DIR.Hit ;
      if (this.combo>=5) {
        scorePlayer2 += score+3 ;
      }
      else if (this.combo>=3) {
        scorePlayer2 += score+1 ;
      }
      else{
        scorePlayer2 += score ;
      }  
      this.hammerBlue.combo = 0 ;
      if ( scorePlayer2 < 0 ) {
        scorePlayer2 = 0 ;
      }
      score = 0 ;
      this.showEffect = true;
    }
    this.isHit = false;
  },

  setHammer :function(ham){
    this.hammerBlue = ham;
  },

  collsion:function(){
    return this.person.y >= 180;
  }

});