import { NgModule } from '@angular/core';

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    navigation: true,
    pagination: true,
    loop: true,
    slidesPerView: 'auto',
    keyboard: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
};

@NgModule({
    declarations: [],
    imports: [SwiperModule],
    exports: [SwiperModule],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
    ],
})
export class SwiperWrapperModule { }