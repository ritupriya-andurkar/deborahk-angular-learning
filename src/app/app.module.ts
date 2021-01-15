import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductListComponent } from "./products/product-list.component";
import { convertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
//import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacesPipe,
    StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
