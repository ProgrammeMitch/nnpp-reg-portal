import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-nnpp',
  templateUrl: './reg-nnpp.component.html',
  styleUrls: ['./reg-nnpp.component.scss']
})
export class RegNnppComponent {
  State = ['FCT']
  Gender = ['male', 'female'];
  Amac = ['Abuja', 'Bwari', 'Kuje', 'Gwagwalada', 'Robuchi'];
  Ward = [1,2]
  Polling = ['Unit1', 'Unit2'];
  Station = ['Garki', 'Wuse', 'Gwagwalada'];
  Party = ['APC', 'PDP', 'LP']
}
