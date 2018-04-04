import {NgModule} from '@angular/core';

import {CaptchaModule} from 'primeng/primeng';

@NgModule({
    imports: [CaptchaModule],
    exports: [CaptchaModule],
})
export class PrimeNgModule {}