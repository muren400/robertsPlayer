const video = document.getElementById("video");

const keyListener = (event) => {
    switch(event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            video.src = 'videos/' + event.key + '.mp4';
            break;

        case ' ':
            if (video.paused) 
                video.play(); 
              else 
              video.pause();
            break;

        case 'Escape':
            document.body.requestFullscreen();
            break;

        default:
            alert(event.key);
            break;
    }
}

video.addEventListener('keyup', keyListener);
document.body.addEventListener('keyup', keyListener);