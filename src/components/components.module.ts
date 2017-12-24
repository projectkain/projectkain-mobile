import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ContentPlaceholderComponent } from './content-placeholder/content-placeholder';
import { ListContentPlaceholderComponent } from './list-content-placeholder/list-content-placeholder';
@NgModule({
	declarations: [ContentPlaceholderComponent,
    ListContentPlaceholderComponent],
	imports: [IonicModule],
	exports: [ContentPlaceholderComponent,
    ListContentPlaceholderComponent]
})
export class ComponentsModule {}
