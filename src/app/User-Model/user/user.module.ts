import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class UserModule { }

// Define User Interface
export interface User { 
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  domain: string; // Add the domain property here
  avatar: string; // Add the avatar property here

}
