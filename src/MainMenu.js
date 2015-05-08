var MenuBg = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.MenuBg_png );
    },

});

var MainMenu = cc.LayerColor.extend({
  init: function() {
    this.createBackground();  
    this.createTitlename();
    this.createSlideBg();
    this.createPlayButton();
    this.createHelpButton();
    this.createCreditButton();
    this.scheduleUpdate();
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

  update: function(){
    cc.audioEngine.playMusic( res.ThemeSongMenu_mp3,true );
  },

  createPlayButton:function(){
    this.playButtonItem = new cc.MenuItemImage(
      res.playButton_png,
      res.playButtonAnimation_png,
      function () {
        this.unscheduleUpdate();
        cc.audioEngine.playEffect( res.click_mp3 );
        cc.director.runScene(new StartScene() );
        scorePlayer1 = 0 ;
        scorePlayer2 = 0 ;
        comboBlue = 0 ;
        comboRed = 0 ;
      }, this);
    this.playButton = new cc.Menu(this.playButtonItem);
    this.playButton.setPosition(screenWidth/2,(screenHeight/2)+100);
    this.addChild(this.playButton);
  },

  createHelpButton:function(){
    this.helpButtonItem = new cc.MenuItemImage(
      res.helpButton_png,
      res.helpButtonAnimation_png,
      function () {
        cc.audioEngine.playEffect( res.click_mp3 );
        cc.director.runScene( new HelpScene() );
      }, this);
    this.helpButton = new cc.Menu(this.helpButtonItem);
    this.helpButton.setPosition(screenWidth/2,(screenHeight/2));
    this.addChild(this.helpButton);
  },

  createCreditButton:function(){
    this.creditButtonItem = new cc.MenuItemImage(
      res.creditButton_png,
      res.creditButtonAnimation_png,
      function () {
        cc.audioEngine.playEffect( res.click_mp3 );
        cc.director.runScene( new CreditScene() );
      }, this);
    this.creditButton = new cc.Menu(this.creditButtonItem);
    this.creditButton.setPosition(screenWidth/2,(screenHeight/2)-100);
    this.addChild(this.creditButton);  
  }

});

var StartSceneMenu = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new MainMenu();
    layer.init();
    this.addChild( layer );
  }
});

