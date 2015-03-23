var GameLayer = cc.LayerColor.extend({
  init: function() {
    
    this.bg = new Bg();
    this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.bg );

    this.whoGun = new whoGun();
    this.whoGun.setPosition( new cc.Point( screenWidth/2 , screenHeight/3.5  ) );
    this.addChild( this.whoGun );



    return true;
  }






});






var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});