import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostService } from './services/post.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthInterceptor } from './services/auth-interceptor.service';

import { routes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PostDetailComponent,
    PostsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  providers: [
    PostService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  // exports: [PostDetailComponent],
})
export class AppModule {}
