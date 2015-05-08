var hammerBlueHelp = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.hamBlue_png );
    this.movingAction = this.hammerBlueAnimation();
    this.runAction( this.movingAction );
  },

  hammerBlueAnimation:function(){
    var animationHammerBlue = new cc.Animation.create();
    animationHammerBlue.addSpriteFrameWithFile( res.hamBlue_png );
    animationHammerBlue.addSpriteFrameWithFile( res.hamBlueAnimation_png );
    animationHammerBlue.setDelayPerUnit( 0.5 );
    return cc.RepeatForever.create( cc.Animate.create( animationHammerBlue ) );

  } 
});