$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        e.preventDefault();

        let modal = new Modal();

        modal.open({
            content: $content,
            width: 800,
            height: 450,
        });
        
    });
    $('img').each(function() {
        var maxWidth = 100; 
        var maxHeight = 100;    
        var ratio = 0;  
        var width = $(this).width();   
        var height = $(this).height();  

        if(width > maxWidth){
            ratio = maxWidth / width;   
            $(this).css("width", maxWidth); 
            $(this).css("height", height * ratio);  
            height = height * ratio;   
            width = width * ratio;    
        }

        if(height > maxHeight){
            ratio = maxHeight / height; 
            $(this).css("height", maxHeight);   
            $(this).css("width", width * ratio);    
            width = width * ratio;    
            height = height * ratio;    
        }
    });
});

