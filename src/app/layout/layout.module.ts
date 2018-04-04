import {NgModule} from '@angular/core';

import {ViewerModule} from './viewer/viewer.module';

@NgModule({
    imports:[
        ViewerModule,
    ],
    exports: [
        ViewerModule,
    ]
})
export class LayoutModule {}