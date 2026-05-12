import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { WeathersComponent } from './weathers/weathers.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path:'',component:HeaderComponent},
  { path: 'productList', component: ProductListComponent },

  { path: 'weather', component: WeathersComponent },

  {
    path: 'blog',
    loadComponent: () =>
      import('./blog-list/blog-list.component')
        .then(m => m.BlogListComponent)
  },

  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./blog-detail/blog-detail.component')
        .then(m => m.BlogDetailComponent)
  }
];
