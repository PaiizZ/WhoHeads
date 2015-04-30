var GameLayer = cc.LayerColor.extend({
  init: function() {

    this.createBackground();
    this.createScoreLabelOne();
    this.createScoreLabelTwo();
    this.createScoreLabelTime();
    this.createPerson();
    this.createHammerBlue();
    this.createHammerRed();
    this.hammerBlue.setHammer(this.hammerRed);
    this.hammerRed.setHammer(this.hammerBlue);

    this.addKeyboardHandlers();
    this.person.scheduleUpdate();
    this.scheduleUpdate();
    this.sec = 0 ;
    this.secBorn = 0 ;
    this.gameTime = 10 ;
    this.hammerRedPress = false;
    this.hammerBluePress = false;
    this.numRandom = Math.floor( Math.random()*3 ) + 1;
    cc.audioEngine.playMusic( res.ThemeSong_mp3 , true ) ;
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
  this.hammerBlue.setPosition( new cc.Point( screenWidth-150 , screenHeight ) );
  this.addChild( this.hammerBlue , 1 );
},

createHammerRed : function( e ){
  this.hammerRed = new hammerRed(this.person);
  this.hammerRed.setPosition( new cc.Point( screenWidth-650 , screenHeight ) );
  this.addChild( this.hammerRed , 1);
},

createRedWin:function(){
  this.redWin = new RedWin()
  this.redWin.setPosition(screenWidth/2,screenHeight/1.5);
  this.addChild(this.redWin,2);
},

createBlueWin:function(){
  this.blueWin = new BlueWin()
  this.blueWin.setPosition(screenWidth/2,screenHeight/1.5);
  this.addChild(this.blueWin,2);
},

createDule:function(){
  this.dule = new Dule()
  this.dule.setPosition(screenWidth/2,screenHeight/1.5);
  this.addChild(this.dule,2);
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

  if ( e == 82 ) {
   cc.audioEngine.stopMusic( res.ThemeSong_mp3 ) ;
   cc.director.runScene(new StartScene());
   scorePlayer1 = 0 ;
   scorePlayer2 = 0 ;
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

createEffectRed : function(){
  var effect = new Effect();
  effect.setPosition( new cc.Point( screenWidth/2 , 280 ) );
  effect.scheduleUpdate();
  this.addChild(effect , 1);
  this.hammerRed.showEffect = false;
},

createEffectBlue : function(){
  var effect = new Effect();
  effect.setPosition( new cc.Point( screenWidth/2 , 280 ) );
  effect.scheduleUpdate();
  this.addChild(effect , 1);
  this.hammerBlue.showEffect = false;
},

createBackButton:function(){
  this.backButtonItem = new cc.MenuItemImage(
    res.backButton_png,
    res.backButtonAnimation_png,
    function () {
      cc.audioEngine.playEffect( res.click_mp3 );
      cc.director.runScene(new StartSceneMenu() );
    }, this);
  this.backButton = new cc.Menu(this.backButtonItem);
  this.backButton.setPosition(screenWidth-80,screenHeight-550);
  this.addChild(this.backButton);
},
createRetryButton:function(){
  this.retryButtonItem = new cc.MenuItemImage(
    res.retryButton_png,
    res.retryButtonAnimation_png,
    function () {
      cc.audioEngine.playEffect( res.click_mp3 );
      cc.director.runScene(new StartScene() );
      scorePlayer1 = 0 ;
      scorePlayer2 = 0 ;
    }, this);
  this.retryButton = new cc.Menu(this.retryButtonItem);
  this.retryButton.setPosition(screenWidth-180,screenHeight-550);
  this.addChild(this.retryButton);
},

update: function( dt ) {
  this.scoreLabelOne.setString( scorePlayer1 );
  this.scoreLabelTwo.setString( scorePlayer2 );
  this.scoreLabelTime.setString( this.gameTime-this.sec );
  this.schedule( this.counterTime,1 );
  if (this.person.getPositionY()<=-200){ 
   this.schedule( this.counterBorn, 1  );
   if ( this.numRandom == this.secBorn ) {
    this.removeChild(this.person);
    this.createNewPerson();
    this.secBorn = 0 ;
    this.numRandom = Math.floor( Math.random()*3 + 1);
  }
}
if(this.hammerRed.showEffect){
 this.createEffectRed();
}
if(this.hammerBlue.showEffect){
 this.createEffectBlue();
}
if ( (this.gameTime-this.sec) <= 0) {
  this.endGame();
}

},

counterTime:function(dt){
  if (this.sec!=this.gameTime) {
    this.sec++;
  }
},

counterBorn:function(dt){
  this.secBorn++;
},

createGameWin:function(){
  if (scorePlayer1>scorePlayer2) {
    this.createBlueWin();
  }
  else if(scorePlayer2>scorePlayer1){
    this.createRedWin();
  }
  else{
    this.createDule();
  }
},

endGame: function() {
  this.person.unscheduleUpdate();
  this.unscheduleUpdate();
  this.bg.setOpacity(150);
  this.person.setOpacity(150);
  this.hammerBlue.setOpacity(0);
  this.hammerRed.setOpacity(0);
  this.createBackButton();
  this.createRetryButton();
  this.createGameWin();
}

});

var RedWin = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.redWin_png );
  }
});
var BlueWin = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.blueWin_png );
  }
});
var Dule = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.dule_png );
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
