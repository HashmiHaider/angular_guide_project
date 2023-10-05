import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  showSplash?: boolean | null;
  constructor(
    private router: Router // private resolver: ComponentFactoryResolver, // private viewContainerRef: ViewContainerRef
  ) {
    // setTimeout(() => {
    //   this.router.navigate(['login']); // Replace 'main' with your main route
    // }, 5000);
  }
  // createAndAttachComponent() {
  //   const factory = this.resolver.resolveComponentFactory(
  //     SplashScreenComponent
  //   );
  //   // const componentRef = factory.create(this.injector);
  //   // this.viewContainerRef.insert(componentRef.hostView);
  // }

  // // Detach a component
  // detachComponent(componentRef: any) {
  //   this.viewContainerRef.detach(
  //     this.viewContainerRef.indexOf(componentRef.hostView)
  //   );
  // }

  ngOnInit() {
    const firstLaunch = localStorage.getItem('firstLaunch');
    if (firstLaunch === null) {
      localStorage.setItem('firstLaunch', 'true');
      this.showSplash = true;
      setTimeout(() => {
        this.navigateToLogin();
      }, 5000);
    } else {
      this.showSplash = false;
    }
  }
  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
