import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// PrimeNG Modules
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';

// My Components
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import { PortfolioRoutes } from './portfolio.routing';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PortfolioRoutes),
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        MessagesModule,
        MessageModule,
        TooltipModule,
        DialogModule,
        DropdownModule
    ],
    declarations: [PortfolioComponent],
    providers: [MessageService]
})
export class PortfolioModule {
}
