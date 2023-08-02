import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.getElementById('vimeo-player');
const player = new Player(video);
const VIDEO_TIME_KEY = 'videoplayer-current-time';

function getCurrTime(e) {
    localStorage.setItem(VIDEO_TIME_KEY, e.seconds);
}

player.on('timeupdate', throttle(getCurrTime, 1000));

const stopPlayer = localStorage.getItem(VIDEO_TIME_KEY);

player.setCurrentTime(stopPlayer || 0);

