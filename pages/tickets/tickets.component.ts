import { Component, model } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../core/service/department.service';
import { Observable } from 'rxjs';
import { Department } from '../../core/models/APIModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

  deptList$: Observable<Department[] > | undefined;
  constructor(private deptServ: DepartmentService) {
    this.deptList$ = deptServ.getDeptList();
    
  }


  openTicketModel() {
   const model= document.getElementById('ticketModel');
   if (model !== null) {
    model.style.display = 'block'
   }
  }

  closeTicketModel() {
    const model= document.getElementById('ticketModel');
    if (model !== null) {
     model.style.display = 'none'
    }
   }




}
