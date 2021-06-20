import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

export const PortfolioRoutes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            component: PortfolioComponent
        }
    ]
}
];
