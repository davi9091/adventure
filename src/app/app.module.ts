import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { ConstantsService } from './common/globals/services/constants.service';
import { GameEntityComponent } from './common/game-entity/game-entity.component';
import { ItemComponent } from './entities/item/item.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFieldComponent,
    GameFieldComponent,
    GameEntityComponent,
    ItemComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
