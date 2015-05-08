var Effect = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.effect_png );
        this.count = 0;
    },
    update:function(dt){
    	this.count+=dt;
    	if( this.count > 0.2 ){
    		this.removeFromParent();
    	}
    }

});