class Bob{
	constructor(x,y,bool){
    
	
        this.bool=bool
        var options={
            isStatic:this.bool,
			
        };
		this.x=x;
		this.y=y;
		this.r=40
		
		this.body=Bodies.circle(this.x, this.y, this.r/2,options)
		
    
		
		World.add(world, this.body)
		

	}
    update(){
        var pos=this.body.position;
        Matter.Body.applyForce(this.body,pos,{x:0,y:-0.1})
            
        
    }
	
	display()
	{
			var pos=this.body.position;
			var angle= this.body.angle
			

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(angle)
			ellipse(0,0,this.r,this.r)
			pop()

    }

}
