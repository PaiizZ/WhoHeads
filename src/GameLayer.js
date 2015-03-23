var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.bg = new Bg();
    this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.bg );

    this.whoGun = new whoGun();
    this.whoGun.setPosition( new cc.Point( screenWidth/2 , 0  ) );
    this.addChild( this.whoGun );
    

    this.hummerBlue = new hummerBlue();
    this.hummerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight/1.5  ) );
    this.addChild( this.hummerBlue );

    this.hummerBlue2 = new hummerBlue2();
    this.hummerBlue2.setPosition( new cc.Point( screenWidth-250 , screenHeight/1.8  ) );
    this.addChild( this.hummerBlue2 );

    this.addKeyboardHandlers();
this.whoGun.scheduleUpdate();
    return true;
  },
  onKeyUp: function( e ) {
    if ( e == 40 ) {
      this.whoGun.hitGun();
    }
    if ( e == 32 ) {
      this.whoGun.hitGun();
    }
  },

  addKeyboardHandlers: function() {
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,
      onKeyPressed : function( e ) {
        self.onKeyUp( e );
      },
    }, this);
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