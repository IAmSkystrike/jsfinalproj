/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text of the div with the id = "image" 
    to the alt text of the preview image 
    */
    console.log(previewPic.alt) + console.log(previewPic.src);
    document.getElementById("image").style.backgroundImage="url('" + previewPic.src + "')";
    document.getElementById("alttext").innerHTML=previewPic.alt;
}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    document.getElementById("image").style.backgroundImage="url('')";
    document.getElementById("alttext").innerHTML="Hover over a flower to learn about its cultural symbolism!";	
	}

function tabIndex(){
    console.log("Tab Index Loaded!")
    const images = document.querySelectorAll("img");
    images.forEach((img,index) => {
        img.setAttribute("tabindex", "0");
    });
}