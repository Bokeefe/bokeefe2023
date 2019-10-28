import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { ContentContainerComponent } from './content-container/content-container.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SectionComponent, ContentContainerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatMenuModule, MatIconModule, MatButtonModule],
  exports: [ContentContainerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
