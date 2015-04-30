var MainMenu = cc.LayerColor.extend({
  init: function() {

  this.createBackground();
  this.createTitlename();
  this.createSlideBg();
   this.createPlayButton();
    this.createHowToButton();
    this.createCreditButton();
  return true;
},
  createBackground : function() {
    this.menuBg = new MenuBg();
    this.menuBg.setPosition( new cc.Point( screenWidth/2 , screenHeight/2  ) );
    this.addChild( this.menuBg );
  },

  createTitlename : function(){
    this.titleName = new TitleName();
    this.titleName.setPosition( new cc.Point( screenWidth/2 , screenHeight-80 ) );
    this.addChild( this.titleName );
  },

  createSlideBg: function() {
  this.slideBg = new SlideBg();
  this.slideBg.setPosition( new cc.Point( 900, 100 ) );
  this.addChild( this.slideBg , 1 );
  this.slideBg.scheduleUpdate();
  },

  createPlayButton:function(){
    this.playButItem = new cc.MenuItemImage(
      res.playButton_png,
      res.playButtonAnimation_png,
      function () {
        cc.audioEngine.playEffect( res.click_mp3 );
        cc.director.runScene(new GamePlayScene() );
      }, this);
    this.playButton = new cc.Menu(this.playButItem);
    this.addChild(this.playButton);
    this.playButton.setPosition(screenWidth/2,(screenHeight/2)+100);
  },
  createHowToButton:function(){
    this.howToButItem = new cc.MenuItemImage(
      res.helpButton_png,
      res.helpButtonAnimation_png,
      function () {
        cc.audioEngine.playEffect( res.press_mp3 );
        cc.director.runScene( new HowToScene() );
      }, this);
    this.howToButton = new cc.Menu(this.howToButItem);
    this.addChild(this.howToButton);
    this.howToButton.setPosition(screenWidth/2,(screenHeight/2));
  },
  createCreditButton:function(){
    this.creditButItem = new cc.MenuItemImage(
      res.creditButton_png,
      res.creditButtonAnimation_png,
      function () {
        cc.audioEngine.playEffect( res.press_mp3 );
        cc.director.runScene( new CreditScene() );
      }, this);
    this.creditButton = new cc.Menu(this.creditButItem);
    this.addChild(this.creditButton);
    var deltaDistance = -100;
    this.creditButton.setPosition(screenWidth/2,(screenHeight/2)+deltaDistance);
  },
});

var StartSceneMenu = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new MainMenu();
    layer.init();
    this.addChild( layer );
  }
});

var GamePlayScene = cc.Scene.extend({
 onEnter: function() {
  this._super();
  var layer = new GameLayer();
  layer.init();
  this.addChild( layer );
}
});
var isPlayingSong = false;