var hammerBlue = cc.Sprite.extend({
  ctor: function(Preson) {
    this._super();
    this.initWithFile( res.hummerBlue_png );
    this.setAnchorPoint(0.5,0);
    this.scheduleUpdate();
    this.setPosition(this.x,300);
    this.isHit = false;
    this.person = Preson;
  },

  update:function(){
   this.checkHit();
  },

  checkHit:function(){
    if( this.isHit && this.collsion() ){
      this.isHit = false;
      this.person.direction = Person.DIR.Hit ;
      scorePlayer1 += score ;
      score = 0 ;
    }
    this.isHit = false;
  },

  collsion:function(){
    return this.person.y >= 180;
  }

});