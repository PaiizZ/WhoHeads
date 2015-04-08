var Person = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.randomPerson();
		this.direction = Person.DIR.DontHit ;
	},

	update: function( dt ) {
		
		if (this.direction != Person.DIR.Hit) {
			if ( this.sec == 2){
				this.setPositionY( this.getPositionY() - 8 );
			}
			else if(this.getPositionY() >= 180) {
				this.schedule( this.counter,1,2 );
			}
		}
		else
			this.setPositionY( this.getPositionY() - 8 );
		
	},

	movePersonUp: function(dt) {
		this.setPositionY( this.getPositionY() + 8 );
		if( this.getPositionY() >= 180 ){
			this.unschedule( this.movePersonUp );
		}
	},

	counter:function(dt){
			this.sec++;
	},

	randomPerson: function(){
        this.setPositionY( 0 );
		var num = Math.floor( Math.random()*3 );
		if(num == 0){
			this.initWithFile( 'res/images/whoGun.png' );
			score = 1 ;
		}
		else if(num == 1){
			this.initWithFile( 'res/images/whoPeak.png' );
			score = 2 ;
		}
		else {
			this.initWithFile( 'res/images/whoOat.png' );
			score = 3 ;
		}
		this.sec = 0 ;
		this.schedule( this.movePersonUp );
	}
});

Person.DIR = {
	DontHit : 0 ,
	Hit: 1
};