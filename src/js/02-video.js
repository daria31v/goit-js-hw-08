
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';



    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

  
   player.on('timeupdate', throttle (settingCurrentTime, 1000));

   function settingCurrentTime (data) {
       localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
   }

   player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
   




        

