
var HelpPage = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.HelpBg_png );
    },

});

var HelpLayer = cc.LayerColor.extend({
    init: function() {
        this.createHelpPage();
        this.createBackButton();
        this.createHammerRedHelp();
        this.createHammerBlueHelp();
        this.createRedPress();
        this.createBluePress();
        return true;

    },

    createHelpPage:function(){
        this.helpPage = new HelpPage()
        this.helpPage.setPosition(screenWidth/2,screenHeight/2);
        this.addChild(this.helpPage);
    },

    createHammerRedHelp:function(){
        this.hammerRedHelp = new hammerRedHelp();
        this.hammerRedHelp.setPosition(screenWidth-650,screenHeight-100);
        this.addChild(this.hammerRedHelp);
    },

    createHammerBlueHelp:function(){
        this.hammerBlueHelp = new hammerBlueHelp();
        this.hammerBlueHelp.setPosition(screenWidth-150,screenHeight-100);
        this.addChild(this.hammerBlueHelp);
    },

    createRedPress:function(){
        this.redPress = new RedPress();
        this.redPress.setPosition(screenWidth-600,screenHeight-150);
        this.addChild(this.redPress);
    },

    createBluePress:function(){
        this.bluePress = new BluePress();
        this.bluePress.setPosition(screenWidth-200,screenHeight-150);
        this.addChild(this.bluePress);
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
    }
});

var HelpScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new HelpLayer();
        layer.init();
        this.addChild( layer );
    },
});
