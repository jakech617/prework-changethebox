document.getElementById("Grow").addEventListener("click", function(){
    document.getElementById("box").style.height="300px"
    document.getElementById("box").style.width="300px"
});

document.getElementById("Shrink").addEventListener("click", function (){
    document.getElementById("box").style.height="50px"
    document.getElementById("box").style.width="50px"

});

document.getElementById("Blue").addEventListener("click", function (){
    document.getElementById("box").style.backgroundColor="blue";

});

document.getElementById("Fade").addEventListener("click", function (){
    document.getElementById("box").style.opacity="0.2"

});

document.getElementById("Reset").addEventListener("click", function (){
    document.getElementById("box").style="height:150px; width:150px; background-color:black; margin:20px; opacity: 1;"

});

document.getElementById("Random Color").addEventListener("click", function (){
    
    getNewRandomColor();
    
    function getNewRandomColor()
    {
        var myArray = ['red', 'green', 'blue', 'yellow', 'orange', 'cyan', 'pink', 'purple'];    
        var rand = myArray[Math.floor(Math.random() * myArray.length)];   
        document.getElementById("box").style.backgroundColor = rand;
    }

});

document.getElementById("Random Size").addEventListener("click", function (){
    
    getNewRandomSize();

    function getNewRandomSize()
    {
        var mySizes = ['50px', '100px', '200px', '300px', '400px', '500px'];
        var rand = mySizes[Math.floor(Math.random() * mySizes.length)];
        document.getElementById("box").style.height=rand;
        document.getElementById("box").style.width=rand;
    }

});
