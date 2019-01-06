import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/Auth/auth.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}
}
