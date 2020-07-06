    
       //background color generator
var bgGeneratorContainer = document.querySelector(".backgroundGeneratorContainer");
var colorPicked = document.querySelectorAll(".colorPicked"); //select all ".colorPicked" classes
var bgVal = document.getElementById("selectedBgVal");
var copyValue = "background: linear-gradient(90deg, #00ff00,#ff0000);";


    //initial style before picking colors                   //(direction   , color stop1           , color-stop2)
 bgGeneratorContainer.style.background = `linear-gradient(${colorPicked[0].value}deg,${colorPicked[1].value},${colorPicked[2].value})`;
 bgVal.innerHTML = bgGeneratorContainer.getAttribute("style"); 


                                            //loop through each ".colorPicked" element to be able to add an"addEventListener" to both of them
colorPicked.forEach(function(colorInput){ //since "addEventListener" can take only one selecter.                                 
        colorInput.addEventListener("change", function(){ //onChange - gets triggered when the value change.
        bgGeneratorContainer.style.background = `linear-gradient(${colorPicked[0].value}deg,${colorPicked[1].value},${colorPicked[2].value})`; //setting background color to the container with linear-gradient value of each color input values
        bgVal.innerHTML = bgGeneratorContainer.getAttribute("style"); //showing the values in the browser
        copyValue = bgGeneratorContainer.getAttribute("style"); //reassign "copyValue" variable with the latest updates
    });
});

//enabling the user to directly copy the selected color value with a single click

function copyClrBtn(){
    var $body = document.getElementsByTagName("body")[0];
    var $text = copyValue;
    var $temp = document.createElement("INPUT");
    $temp.setAttribute("value", $text);
    $body.appendChild($temp);
    $temp.select();
    $temp.setSelectionRange(0,99999)
    document.execCommand("copy");
    $body.removeChild($temp);
    alert("Copied to clipboard!");
}

function generateAndSetNewClrs(){
    var firstClrInput = colorPicked[1];
    var secondClrInput = colorPicked[2];
    var rnmNumList = [];

                        //calls "genenerateNums" function & extracts each element in the "rnmNumList" array
    firstClrInput = `rgb(${genenerateNums(),rnmNumList[0]},${genenerateNums(),rnmNumList[1]},${genenerateNums(),rnmNumList[2]})`;
    secondClrInput = `rgb(${genenerateNums(),rnmNumList[3]},${genenerateNums(),rnmNumList[4]},${genenerateNums(),rnmNumList[5]})`;

    function genenerateNums(){
            var randomNum = Math.floor((Math.random() *255)+1);
            rnmNumList.push(randomNum);
    };

    bgGeneratorContainer.style.background = `linear-gradient(${colorPicked[0].value}deg,${firstClrInput},${secondClrInput})`; //setting background color to the container with linear-gradient value of each color input values
    bgVal.innerHTML = bgGeneratorContainer.getAttribute("style"); //showing the values in the browser
    copyValue = bgGeneratorContainer.getAttribute("style");
}

