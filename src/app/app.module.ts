import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeComponent } from './home/home.component';
import { MessagesFormComponent } from './messages-form/messages-form.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'contact-page', component: ContactPageComponent},
  { path: 'home', component: HomeComponent},

];




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    SliderComponent,
    SliderItemComponent,
    ContactPageComponent,
    HomeComponent,
    MessagesFormComponent,
    ContactHeaderComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
