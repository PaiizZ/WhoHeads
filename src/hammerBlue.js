var hammerBlue = cc.Sprite.extend({
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
    if( comboBlue >= 5 ) {
       this.initWithFile( res.hammerBlueCombo2_png );
    }
    else if( comboBlue >= 3 ) {
       this.initWithFile( res.hammerBlueCombo1_png );
    }
    else{
       this.initWithFile( res.hammerBlue_png );
     }
    this.setAnchorPoint( 0.5 , 0 );
    this.setPosition( this.x , 200 );
  },

  checkHit:function(){
    if( this.isHit && this.collsion() ){
      if( gender == 1 ){
        cc.audioEngine.playEffect( res.yellBoy_wav ) ;
        comboBlue++;
        comboRed = 0 ;
      }
      else{
        cc.audioEngine.playEffect( res.yellGirl_wav ) ;
        comboBlue = 0 ;
      }
      this.isHit = false;
      this.person.direction = Person.DIR.Hit ;
      if( comboBlue >= 5 ) {
        scorePlayer1 += score+3 ;
      }
      else if ( comboBlue >= 3 ) {
        scorePlayer1 += score+1 ; 
      }
      else{
        scorePlayer1 += score ; 
      }  
      
      if ( scorePlayer1 < 0 ) {
        scorePlayer1 = 0 ;
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