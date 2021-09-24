class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8
			
			}
		this.body=Bodies.circle(x,y,r,options)
		this.r = r
		World.add(world, this.body);

		console.log(this.body);

	}
	display(){
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
	    translate (pos.x,pos.y);
		rotate (angle);
		fill ("pink")
		ellipseMode(RADIUS);
		ellipse(0,0,this.r,this.r);
		pop();

			
			
	}

}

