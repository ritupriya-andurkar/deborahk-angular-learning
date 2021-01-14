import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductListComponent } from "./products/product-list.component";
//import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule],
  declarations: [AppComponent, ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
