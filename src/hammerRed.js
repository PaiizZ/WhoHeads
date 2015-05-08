var hammerRed = cc.Sprite.extend({
  ctor: function(Preson) {
    this._super();
    this.changeHammer();
    this.scheduleUpdate(); 
    this.isHit = false ;
    this.person = Preson;
    this.showEffect = false;
  },

  update:function(){
    this.checkHit();
    this.changeHammer();
  },

  changeHammer:function(){
    if ( comboRed >= 5 ) {
       this.initWithFile( res.hammerRedCombo2_png );
    }
    else if ( comboRed >= 3) {
       this.initWithFile( res.hammerRedCombo1_png );
    }
    else{
       this.initWithFile( res.hammerRed_png );
    }
    this.setAnchorPoint( 0.5 , 0 );
    this.setPosition( this.x ,200 );
  },

  checkHit:function(){
    if ( this.isHit && this.collsion() ){
      if ( gender == 1 ){
        cc.audioEngine.playEffect( res.yellBoy_wav ) ;
        comboRed++;
        comboBlue = 0 ;
      }
      else{
        cc.audioEngine.playEffect( res.yellGirl_wav ) ;
        comboRed = 0 ;
      }
      this.isHit = false;
      this.person.direction = Person.DIR.Hit ;
      if ( comboRed >= 5 ) {
        scorePlayer2 += score+3 ;
      }
      else if ( comboRed >= 3 ) {
        scorePlayer2 += score+1 ;
      }
      else{
        scorePlayer2 += score ;
      }  
      
      if ( scorePlayer2 < 0 ) {
        scorePlayer2 = 0 ;
      }
      score = 0 ;
      this.showEffect = true;
    }
    this.isHit = false;
  },

  collsion:function(){
    return this.person.y >= 180;
  }

});