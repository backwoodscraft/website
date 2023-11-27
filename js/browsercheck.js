/*!
* Copyright 2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

function getBrowser(){
    var ua= navigator.userAgent;
        if(ua.includes('Safari')){
        window.location.href = "subscribe_apple.html";
        }else{
            window.location.href = "subscribe.html";
        }
};

