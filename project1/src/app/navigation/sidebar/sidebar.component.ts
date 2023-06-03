import { Component, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  toggleSideNav() {
   this.sidenav.emit();
   }

  imagePath: string = "/assets/images/user.png"

  userIconClick() {
    console.log('userClicked an image')
  }
  protected onLogin() {
    this.router.navigate(['/user', 'login'])
  }
  protected onRegister() {
    this.router.navigate(['/user', 'register'])
  }
  
}

