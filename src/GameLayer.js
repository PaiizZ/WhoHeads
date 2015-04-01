
var GameLayer = cc.LayerColor.extend({
    init: function() {

      this.bg = new Bg();
      this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
      this.addChild( this.bg );

      this.who = new Who();
      this.who.setPosition( new cc.Point( screenWidth/2 , 0  ) );
      this.addChild( this.who );

      this.hammerBlue2 = new hammerBlue2();
      this.hammerBlue2.setPosition( new cc.Point( screenWidth-250 , screenHeight/1.8  ) );

      this.hammerBlue = new hammerBlue();
      this.hammerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight/1.5  ) );

      this.hammerRed2 = new hammerRed2();
      this.hammerRed2.setPosition( new cc.Point( screenWidth-500 , screenHeight/1.8  ) );

      this.hammerRed = new hammerRed();
      this.hammerRed.setPosition( new cc.Point( screenWidth-650 , screenHeight/1.5  ) );

      this.addChild( this.hammerBlue );
      this.addChild( this.hammerRed );

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
        this.removeChild(this.hammerBlue);
        this.addChild( this.hammerBlue2 );
        if ( this.hammerBlue2.closeTo( this.who ) ){
          this.who.hit();
        }
      }

      if ( e == 32 ) {
       this.removeChild(this.hammerRed);
       this.addChild( this.hammerRed2 );
       if ( this.hammerRed2.closeTo( this.who ) ) {
        this.who.hit();
      }
    }
    },

    onKeyUp: function( e ) {
      if ( e == 40 ) {
        this.removeChild(this.hammerBlue2 );
        this.addChild( this.hammerBlue );
      }

      if ( e == 32 ) {
        this.removeChild(this.hammerRed2 );
        this.addChild( this.hammerRed );
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
      if (this.who.getPositionY()<0) {
        this.removeChild(this.who);
        this.who.setDirection();
        this.who.randomWho();
        this.addChild(this.who);
        this.who.scheduleUpdate();
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