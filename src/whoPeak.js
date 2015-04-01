var whoPeak = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/whoPeak.png' );

	},
	update: function( dt ) {
		if (this.direction != whoPeak.DIR.Hit) {
			if(this.getPositionY() == 180) {
				this.setPositionY( this.getPositionY()  );
			}
			else
				this.setPositionY( this.getPositionY() + 2 );
		}
		else
			this.setPositionY( this.getPositionY() - 2 );
	},
	hit: function() {
		this.direction = whoPeak.DIR.Hit ;
		
	},
	setDirection: function(dt) {
		this.direction = whoPeak.DIR.DontHit ;
	}

});

whoPeak.DIR = {
	DontHit : 0 ,
	Hit: 1
};