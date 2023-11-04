import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstacionamientoService } from 'src/app/services/estacionamiento/estacionamiento.service';
@Component({
  selector: 'app-add-estacionamiento',
  templateUrl: './add-estacionamiento.page.html',
  styleUrls: ['./add-estacionamiento.page.scss'],
})
export class AddEstacionamientoPage implements OnInit {
  formulario: FormGroup;
  constructor(private estacionamiento:EstacionamientoService) { 
    this.formulario = new FormGroup({
      name: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    })
   }

   ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.estacionamiento.addLugar(this.formulario.value);
    console.log(response);
    
  }

}
