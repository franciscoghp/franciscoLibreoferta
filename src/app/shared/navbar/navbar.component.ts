import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    searchForm: FormGroup;
    loading: boolean = false;

    // private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location,
                private element : ElementRef,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute, 
                private router: Router,
                private httpService: HttpService) {
        this.sidebarVisible = false;
        
    }

    ngOnInit() {
        
        const navbar: HTMLElement = this.element.nativeElement;
        // this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.searchForm = this.formBuilder.group({
            search: ['', Validators.required]
          });
    }
    sidebarOpen() {
        // const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            // toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    onSubmit(){
        this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 2000);

       const search = this.searchForm.value.search
       console.log(search);

        // Procedimiento para dirigirnos a la pagina de "Search"
        // y enviar el input que querenos y nos interesa
       this.httpService.setSearching(search)
       
       this.router.navigate(['/search']);
       this.httpService.getSearching();       
       
    }
}
