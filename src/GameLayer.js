var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.bg = new Bg();
    this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.bg );

    this.whoGun = new whoGun();
    this.whoGun.setPosition( new cc.Point( screenWidth/2 , screenHeight/3.5  ) );
    this.addChild( this.whoGun );


 this.hummerBlue = new hummerBlue();
    this.hummerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight/1.5  ) );
    this.addChild( this.hummerBlue );

this.hummerBlue2 = new hummerBlue2();
    this.hummerBlue2.setPosition( new cc.Point( screenWidth-250 , screenHeight/1.8  ) );
    this.addChild( this.hummerBlue2 );

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