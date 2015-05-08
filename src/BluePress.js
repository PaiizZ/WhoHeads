var BluePress = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.animationDown_png );
    this.movingAction = this.bluePressAnimation();
    this.runAction( this.movingAction );
  },

  bluePressAnimation:function(){
    var animationBluePress = new cc.Animation.create();
    animationBluePress.addSpriteFrameWithFile( res.blueDown_png );
    animationBluePress.addSpriteFrameWithFile( res.animationDown_png );
    animationBluePress.setDelayPerUnit( 0.5 );
    return cc.RepeatForever.create( cc.Animate.create( animationBluePress ) );

  } 
});