var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.bg = new Bg();
    this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.bg );

    this.whoGun = new whoGun();
    this.whoGun.setPosition( new cc.Point( screenWidth/2 , 0  ) );
    this.addChild( this.whoGun );
    
    this.hammerBlue2 = new hammerBlue2();
    this.hammerBlue2.setPosition( new cc.Point( screenWidth-250 , screenHeight/1.8  ) );

    this.hammerBlue = new hammerBlue();
    this.hammerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight/1.5  ) );
    this.addChild( this.hammerBlue );

    this.addKeyboardHandlers();

    this.whoGun.scheduleUpdate();
    this.scheduleUpdate();

//     if(cc.sys.capabilities.hasOwnProperty('mouse') ) {
//      cc.eventManager.addListener({
//        event: cc.EventListener.MOUSE,
//        onMouseDown: function(event){
//          if(event.getButton() == cc.EventMouse.BUTTON_LEFT){
//            cc.log(event.getLocationX()+","+event.getLocationY());
//          }
//        }
//      },this);
//    }

return true;
},
onKeyDown: function( e ){
 if ( e == 40 ) {
  this.addChild( this.hammerBlue2 );
  this.removeChild(this.hammerBlue);
}
},
onKeyUp: function( e ) {
  if ( e == 40 ) {
    if ( this.hammerBlue2.closeTo( this.whoGun ) ) {
      this.whoGun.hitGun();
    }
    this.removeChild(this.hammerBlue2 );
    this.addChild( this.hammerBlue );
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
      self.onKeyDown( e );
    },
    onKeyReleased: function( e ) {
      self.onKeyUp( e );
    },
  }, this);
},

update: function( dt ) {
  if (this.whoGun.getPositionY()<0) {
    this.removeChild(this.whoGun);
    this.whoGun.setDirection();
    this.addChild(this.whoGun);
    this.whoGun.scheduleUpdate();
  }
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