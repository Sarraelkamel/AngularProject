import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticlesComponent } from './articles/articles.component';
import { articles } from './Core/articles';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path : 'products', component : ProductsComponent},
  {path : 'offre-emploi', component : OffresEmploiComponent},
  {path : 'articles', component : ArticlesComponent},
  {path : 'AddProduct', component : AddProductComponent},
  {path : 'form', component : TemplateDrivenFormComponent},
  {path : 'todo', component : TodoListComponent},
  {path : 'update/:product', component : UpdateProductComponent},
  {path:'', redirectTo:'products', pathMatch : 'full'},
  {path: '**', component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
