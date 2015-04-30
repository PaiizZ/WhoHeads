var hammerRedHelp = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.hamRed_png);
    this.movingAction = this.hammerRedAnimation();
    this.runAction(this.movingAction);
  },

  hammerRedAnimation:function(){
    var animationHammerRed = new cc.Animation.create();
    animationHammerRed.addSpriteFrameWithFile( res.hamRed_png );
    animationHammerRed.addSpriteFrameWithFile( res.hamRedAnimation_png );
    animationHammerRed.setDelayPerUnit( 0.5 );
    return cc.RepeatForever.create( cc.Animate.create( animationHammerRed ) );

  } 
});