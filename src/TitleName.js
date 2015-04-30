var TitleName = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.HeadsBg_png);
    this.movingAction = this.titleAnimation();
    this.runAction(this.movingAction);
  },

  titleAnimation:function(){
    var animationTitle = new cc.Animation.create();
    animationTitle.addSpriteFrameWithFile( res.HeadsBg_png );
    animationTitle.addSpriteFrameWithFile( res.HeadsBgAnimation_png );
    animationTitle.setDelayPerUnit( 0.5 );
    return cc.RepeatForever.create( cc.Animate.create( animationTitle ) );

  } 
});