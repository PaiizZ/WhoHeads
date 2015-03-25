var hammerBlue2 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/hammerBlue2.png' );

    },
 closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return  ( (Math.abs( myPos.y - oPos.y ) >= 153) && (Math.abs( myPos.y - oPos.y ) <=170) ) ;
    },
});
