import Swiper from 'swiper';

export default class Swipe{
    constructor(condition, settings, elem) {
        this.condition = condition;
        this.swiper = false;
        this.settings = settings;
        this.elem = elem;

    }



    swiperInit(mediaQuery) {
        if(mediaQuery.matches && this.swiper) {
            for(let elem of this.swiper) {
                elem.destroy();
            }
            this.swiper = false
            
            
        } else if(!mediaQuery.matches && !this.swiper) {
            this.swiper = new Swiper(this.elem, this.settings);
        }
    }

    checkWidth() {
        let matchMedia = window.matchMedia(this.condition);
        let elem = '.swiper';
        this.swiperInit(matchMedia);
        matchMedia.addEventListener('change', () => this.swiperInit(matchMedia, elem, this.settings))

        
    }
}


