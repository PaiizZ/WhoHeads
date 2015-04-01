
var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.bg = new Bg();
    this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.bg );

    this.whoGun = new whoGun();
    this.whoGun.setPosition( new cc.Point( screenWidth/2 , 0  ) );
    this.who = this.whoGun ;
    this.addChild( this.who );
    this.whoPeak = new whoPeak();
    this.whoPeak.setPosition( new cc.Point( screenWidth/2 , 0  ) );
    this.whoOat = new whoOat();
    this.whoOat.setPosition( new cc.Point( screenWidth/2 , 0  ) );

    this.hammerBlue2 = new hammerBlue2();
    this.hammerBlue2.setPosition( new cc.Point( screenWidth-250 , screenHeight/1.8  ) );

    this.hammerBlue = new hammerBlue();
    this.hammerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight/1.5  ) );
    this.addChild( this.hammerBlue );

    this.state = GameLayer.STATES.NOT;

    this.addKeyboardHandlers();

    this.who.scheduleUpdate();
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
    if ( this.hammerBlue2.closeTo( this.who ) ) {
     this.who.hit();
   }
   this.removeChild(this.hammerBlue2 );
   this.addChild( this.hammerBlue );
 }
 if ( e == 32 ) {
  this.who.hit();
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

randomWho: function(){
  var num = Math.floor( Math.random()*3 );
  if(num == 1){
    this.who = this.whoGun ;
  }
  if(num == 2){
    this.who = this.whoPeak ;
  }
  if(num == 3){
    this.who = this.whoOat ;
  }
},
update: function( dt ) {
  if (this.state == GameLayer.STATES.NOT) {
    this.state = GameLayer.STATES.HAVE ;
    this.randomWho();
    this.addChild(this.who);
    who.scheduleUpdate();

  }
  if (this.who.getPositionY()<0) {
    this.removeChild(this.who);
    who.setDirection();
    this.state = GameLayer.STATES.NOT ;
  }
}

});
GameLayer.STATES = {
 HAVE: 1,
 NOT: 2
};
var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});