class Food{
    constructor(){
        var foodStock,lastFed;
        this.foodStock=20
        this.image=loadImage('Milk.png')
    }
    getFoodStock(){
        foodStock=database.ref('foodStock')
        foodStock.on('value',function(data){
foodStock=data.val();
        })
    }
    updateFoodStock(count){
        database.ref('/').update({
foodStock:count
        })
    }
    deductFood(count){
database.ref('/').update({
    foodStock:count
})
    }
    display(){
imageMode(CENTER)
    this(this.image,200,400,70,70)
 if(this.foodStock1!=0){
        for(var i=0;i<this.foodStock1;i++){
            if(i%10===0){
            x=80;
            y=y+50
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
}
}
