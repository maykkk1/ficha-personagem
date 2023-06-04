import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonagemService } from 'src/app/personagem-service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  selectedType: number = 0;
  editorForm: FormGroup;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      tipo: new FormControl(0),
      campo: new FormControl(null),
      valorTxt: new FormControl(null),
      valorNum: new FormControl(null)
    });
  }

  onSubmit(){
    this.selectedType == 0 
    ? this.personagemService.editarCampoTextual(this.editorForm.controls['campo'].value, this.editorForm.controls['valorTxt'].value)
    : this.personagemService.editarCampoNumerico(this.editorForm.controls['campo'].value, this.editorForm.controls['valorNum'].value);
    this.close();
  }

  tipoChange(){
    this.selectedType = this.editorForm.controls['tipo'].value;
  }

  close(){
    this.closeModal.emit();
  }

}
