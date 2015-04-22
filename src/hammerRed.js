var hammerRed = cc.Sprite.extend({
  ctor: function(Preson) {
    this._super();
    this.initWithFile( res.hummerRed_png );
    this.setAnchorPoint(0.5,0);
    this.scheduleUpdate();
    this.setPosition(this.x,300);
    this.isHit = false;
    this.person = Preson;
    this.showEffect = false;
  },

  update:function(){
    this.checkHit();
  },

  checkHit:function(){
    if( this.isHit && this.collsion() ){
      if(this.person.numPicture<=12){
        cc.audioEngine.playEffect( res.yellBoy_wav ) ;
      }
      else{
        cc.audioEngine.playEffect( res.yellGirl_wav ) ;
      }
      this.isHit = false;
      this.person.direction = Person.DIR.Hit ;
      scorePlayer2 += score ;
      score = 0 ;
      this.showEffect = true;
    }
    this.isHit = false;
  },

  collsion:function(){
    return this.person.y >= 180;
  }

});