var RedPress = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.animationDown_png);
    this.movingAction = this.redPressAnimation();
    this.runAction(this.movingAction);
  },

  redPressAnimation:function(){
    var animationRedPress = new cc.Animation.create();
    animationRedPress.addSpriteFrameWithFile( res.redDown_png );
    animationRedPress.addSpriteFrameWithFile( res.animationDown_png );
    animationRedPress.setDelayPerUnit( 0.5 );
    return cc.RepeatForever.create( cc.Animate.create( animationRedPress ) );

  } 
});