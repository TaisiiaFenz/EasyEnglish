import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
    declarations: [
        TaskCardComponent
    ],
    exports: [
        TaskCardComponent
    ],
    imports: [
        CommonModule,
        AngularFirestoreModule
    ]
})
export class ShareModule { }
