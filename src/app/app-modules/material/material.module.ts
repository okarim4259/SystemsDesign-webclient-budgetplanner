import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule]
})
export class MaterialModule {}
