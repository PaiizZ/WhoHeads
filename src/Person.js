var Person = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.randomPerson();
		this.direction = Person.DIR.DontHit ;
	},

	update: function( dt ) {
		
		if (this.direction != Person.DIR.Hit) {
			if ( this.sec == 1){
				this.setPositionY( this.getPositionY() - 15 );
			}
			else if(this.getPositionY() >= 180) {
				this.schedule( this.counter,0.5 );
			}
		}
		else
			this.setPositionY( this.getPositionY() - 15 );
		
	},

	movePersonUp: function(dt) {
		this.setPositionY( this.getPositionY() + 15 );
		if( this.getPositionY() >= 180 ){
			this.unschedule( this.movePersonUp );
		}
	},

	counter:function(dt){
			this.sec++;
	},

	randomPerson: function(){
        this.setPositionY( 0 );
        //var num = 19 ;
		var num = Math.floor( Math.random()*20 );
		if(num == 0){
			this.initWithFile( res.whoGun_png );
			score = 2 ;
		}
		else if(num == 1){
			this.initWithFile( res.whoPeak_png );
			score = 2 ;
		}
		else if(num == 2){
			this.initWithFile( res.whoBosss_png );
			score = 2 ;
		}
		else if(num == 3){
			this.initWithFile( res.whoPeak_png );
			score = 2 ;
		}
		else if(num == 4){
			this.initWithFile( res.whoBoss_png );
			score = 2 ;
		}
		else if(num == 5){
			this.initWithFile( res.whoKanun_png );
			score = 2 ;
		}
		else if(num == 6){
			this.initWithFile( res.whoNet_png );
			score = 2 ;
		}
		else if(num == 7){
			this.initWithFile( res.whoNot_png );
			score = 2 ;
		}
		else if(num == 8){
			this.initWithFile( res.whoNut_png );
			score = 2 ;
		}
		else if(num == 9){
			this.initWithFile( res.whoPee_png );
			score = 2 ;
		}
		else if(num == 10){
			this.initWithFile( res.whoSafe_png );
			score = 2 ;
		}
		else if(num == 11){
			this.initWithFile( res.whoThird_png );
			score = 2 ;
		}
		else if(num == 12){
			this.initWithFile( res.whoTrong_png );
			score = 2 ;
		}
		else if(num == 13){
			this.initWithFile( res.whoEarng_png );
			score = -2 ;
		}
		else if(num == 14){
			this.initWithFile( res.whoMakam_png );
			score = -2 ;
		}
		else if(num == 15){
			this.initWithFile( res.whoMild_png );
			score = -2 ;
		}
		else if(num == 16){
			this.initWithFile( res.whoNuch_png );
			score = -2 ;
		}
		else if(num == 17){
			this.initWithFile( res.whoNumtan_png );
			score = -2 ;
		}
		else if(num == 18){
			this.initWithFile( res.whoPlammy_png );
			score = -2 ;
		}
		else if(num == 19){
			this.initWithFile( "res/images/haloo.png" );
			score = +2 ;
		}
		else {
			this.initWithFile( res.whoPrang_png );
			score = -2 ;
		}
		this.sec = 0 ;
		this.schedule( this.movePersonUp );
	}
});

Person.DIR = {
	DontHit : 0 ,
	Hit: 1
};