
var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.bg = new Bg();
    this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.bg );

    this.scoreLabelOne = cc.LabelTTF.create( '0', 'Arial', 50 );
    this.scoreLabelOne.setPosition( new cc.Point( 725 , 550 ) );
    this.scoreLabelOne.setFontFillColor( new cc.Color( 0 , 0 , 255 , 255) );
    this.addChild( this.scoreLabelOne );
    this.scoreLabelOne.setString( scorePlayer1 );

    this.scoreLabelTwo = cc.LabelTTF.create( '0', 'Arial', 50 );
    this.scoreLabelTwo.setPosition( new cc.Point( 75 , 550 ) );
    this.scoreLabelTwo.setFontFillColor( new cc.Color( 255 , 0 , 0 , 255) );
    this.addChild( this.scoreLabelTwo );
    this.scoreLabelTwo.setString( scorePlayer2 );

    this.scoreLabelTime = cc.LabelTTF.create( '0', 'Arial', 70 );
    this.scoreLabelTime.setPosition( new cc.Point( 400 , 550 ) );
    this.scoreLabelTime.setFontFillColor( new cc.Color( 0 , 0 , 0 , 255) );
    this.addChild( this.scoreLabelTime );
    this.scoreLabelTime.setString( this.gameTime-this.sec );

    this.person = new Person();
    this.person.setPosition( new cc.Point( screenWidth/2 , -100  ) );
    this.addChild( this.person );

    this.hammerBlue = new hammerBlue(this.person);
    this.hammerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight-400 ) );

    this.hammerRed = new hammerRed(this.person);
    this.hammerRed.setPosition( new cc.Point( screenWidth-650 , screenHeight-400  ) );

    this.addChild( this.hammerBlue,3 );
    this.addChild( this.hammerRed ,3);

    this.addKeyboardHandlers();
    this.person.scheduleUpdate();
    this.scheduleUpdate();
    this.sec = 0 ;
    this.gameTime = 120 ;
    this.hammerRedPress = false;
    this.hammerBluePress = false;
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
    if ( e == 40 && !this.hammerBluePress) {
      this.hammerBlue.setRotation(-60);
      this.hammerBluePress = true;
      this.hammerBlue.isHit = true;
    }

    if ( e == 32 && !this.hammerRedPress  ) {
      this.hammerRed.setRotation(60);
      this.hammerRedPress = true;
      this.hammerRed.isHit = true;
    }
  },

  onKeyUp: function( e ) {
    if ( e == 40 && this.hammerBluePress) {
      this.hammerBlue.setRotation(0);
      this.hammerBluePress = false;
    }

    if ( e == 32 && this.hammerRedPress) {
      this.hammerRed.setRotation(0);
      this.hammerRedPress = false;
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
    this.scoreLabelOne.setString( scorePlayer1 );
    this.scoreLabelTwo.setString( scorePlayer2 );
    this.scoreLabelTime.setString( this.gameTime-this.sec );
    this.schedule( this.counterTime,1 );
    if (this.person.getPositionY()<-200){
      this.removeChild(this.person);
      this.person.direction = Person.DIR.DontHit ;
      this.person.randomPerson();
      this.addChild(this.person);
      this.person.scheduleUpdate();
    }

  },
  counterTime:function(dt){
    if (this.sec!=this.gameTime) {
      this.sec++;
    }
  },
      // counter:function(dt){
      //   this.countMiliSec+=dt;
      //   HamerRedTimeLimit-=dt;
      //   if(this.countMiliSec>1){
      //     this.countMiliSec=0;
      //   }
      // }
    });

  var StartScene = cc.Scene.extend({
    onEnter: function() {
      this._super();
      var layer = new GameLayer();
      layer.init();
      this.addChild( layer );
    }
  });