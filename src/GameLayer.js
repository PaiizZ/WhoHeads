var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.createBackground();
    this.createScoreLabelOne();
    this.createScoreLabelTwo();
    this.createScoreLabelTime();
    this.createPerson();
    this.createHammerBlue();
    this.createHammerRed();
    this.addKeyboardHandlers();
    this.person.scheduleUpdate();
    this.scheduleUpdate();
    this.sec = 0 ;
    this.secBorn = 0 ;
    this.gameTime = 120 ;
    this.hammerRedPress = false;
    this.hammerBluePress = false;
    this.numRandom = Math.floor( Math.random()*3 ) + 1;
    cc.audioEngine.playMusic( res.ThemeSong_mp3 ) ;
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

  createBackground : function( e ) {
    this.bg = new Bg();
    this.bg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.bg );
  },

  createScoreLabelOne : function( e ) {
    this.scoreLabelOne = cc.LabelTTF.create( '0', 'Arial', 50 );
    this.scoreLabelOne.setPosition( new cc.Point( 725 , 550 ) );
    this.scoreLabelOne.setFontFillColor( new cc.Color( 0 , 0 , 255 , 255) );
    this.addChild( this.scoreLabelOne );
    this.scoreLabelOne.setString( scorePlayer1 );
  },

  createScoreLabelTwo : function( e ) {
    this.scoreLabelTwo = cc.LabelTTF.create( '0', 'Arial', 50 );
    this.scoreLabelTwo.setPosition( new cc.Point( 75 , 550 ) );
    this.scoreLabelTwo.setFontFillColor( new cc.Color( 255 , 0 , 0 , 255) );
    this.addChild( this.scoreLabelTwo );
    this.scoreLabelTwo.setString( scorePlayer2 );
  },

  createScoreLabelTime : function( e ) {
    this.scoreLabelTime = cc.LabelTTF.create( '0', 'Arial', 70 );
    this.scoreLabelTime.setPosition( new cc.Point( 400 , 550 ) );
    this.scoreLabelTime.setFontFillColor( new cc.Color( 0 , 0 , 0 , 255) );
    this.addChild( this.scoreLabelTime );
    this.scoreLabelTime.setString( this.gameTime-this.sec );
  },
  
  createPerson : function( e ){
    this.person = new Person();
    this.person.setPosition( new cc.Point( screenWidth/2 , -100  ) );
    this.addChild( this.person );
  },

  createHammerBlue : function( e ){
    this.hammerBlue = new hammerBlue(this.person);
    this.hammerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight-400 ) );
    this.addChild( this.hammerBlue,3 );
  },

  createHammerRed : function( e ){
    this.hammerRed = new hammerRed(this.person,this);
    this.hammerRed.setPosition( new cc.Point( screenWidth-650 , screenHeight-400  ) );
    this.addChild( this.hammerRed ,3);
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
      this.hammerBlue.isHit = false;
    }

    if ( e == 32 && this.hammerRedPress) {
      this.hammerRed.setRotation(0);
      this.hammerRedPress = false;
      this.hammerRed.isHit = false;
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

  createNewPerson : function(){
      this.person.direction = Person.DIR.DontHit ;
      this.person.randomPerson();
      this.addChild(this.person);
      this.person.scheduleUpdate();
  },
  
  
  update: function( dt ) {
    this.scoreLabelOne.setString( scorePlayer1 );
    this.scoreLabelTwo.setString( scorePlayer2 );
    this.scoreLabelTime.setString( this.gameTime-this.sec );
    this.schedule( this.counterTime,1 );
    if (this.person.getPositionY()<=-200){ 
       this.schedule( this.counterBorn, 1  );
       this.person.unscheduleUpdate();
       console.log(""+this.numRandom);
       console.log(""+this.secBorn);
       if ( this.numRandom == this.secBorn ) {
        this.removeChild(this.person);
        console.log("111");
        this.createNewPerson();
        this.secBorn = 0 ;
        this.numRandom = Math.floor( Math.random()*3 + 1);
      }
    }
    if(this.hammerRed.showEffect){
       var effect = new Effect();
       effect.setPosition( new cc.Point( screenWidth/2 , 280 ) );
       effect.scheduleUpdate();
       this.addChild(effect , 1);
       this.hammerRed.showEffect = false;
    }
    if(this.hammerBlue.showEffect){
       var effect = new Effect();
       effect.setPosition( new cc.Point( screenWidth/2 , 280 ) );
       effect.scheduleUpdate();
       this.addChild(effect , 1);
       this.hammerBlue.showEffect = false;
    }

  },

  counterTime:function(dt){
    if (this.sec!=this.gameTime) {
      this.sec++;
    }
  },

  counterBorn:function(dt){
    this.secBorn++;
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
