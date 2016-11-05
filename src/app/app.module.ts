import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {UserComponent} from './user/user.component';
import {FilterusersPipe} from './sidebar/filterusers.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserComponent,
    FilterusersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
