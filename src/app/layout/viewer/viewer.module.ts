import {NgModule} from '@angular/core';
import {ViewerComponent} from './viewer.component';
import {ViewerTitleComponent} from './title/viewer-title.component';
import {ViewerBodyComponent} from './body/viewer-body.component';

@NgModule({
    declarations: [
        ViewerComponent,
        ViewerTitleComponent,
        ViewerBodyComponent,
    ],
    exports: [
        ViewerComponent,
        ViewerTitleComponent,
        ViewerBodyComponent,
    ]
})
export class ViewerModule {}