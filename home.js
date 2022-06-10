function generatecat(){
    var image =document.createElement('img');
    var div= document.getElementById('flex-cat-gen'); //get access to flex box container 2
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&timestamp";//set the image source by link
    div.append(image);


}