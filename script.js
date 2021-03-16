// Get the root element
var r = document.querySelector(':root');

$(document).ready(function() {
    $('.color-choose input').on('click', function() {
        
        //changing umbrella color based on the color selected
        var umbrellaColor = $(this).attr('data-image');

        //changing screen color based on the color selected
        var screenColor = $(this).attr('umbrella-color');
        r.style.setProperty('--color', screenColor);
        console.log(screenColor);
        
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + umbrellaColor + ']').addClass('active');

        $(this).addClass('active');
    });
});

//Reading the uploaded image file from "upload logo"
$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

//uploading the image file to the target image
function imageIsLoaded(e) {
    $('.uploaded-icon').attr('src', e.target.result);
   
};

//loading animation 
document.getElementById("upload").onclick = function() {
    setTimeout(() => {
            document.getElementById("svgAnim").style.visibility = "visible";
            document.getElementById("umbrellaImage").style.visibility = "hidden";
            setTimeout(() => {
                document.getElementById("svgAnim").style.visibility = "hidden";
                document.getElementById("umbrellaImage").style.visibility = "visible";
                document.getElementById("uploaded-icon").style.visibility = "visible";
               }, 5000)
        }, 2000)
}
