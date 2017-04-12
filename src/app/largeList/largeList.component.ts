import { Component,OnInit, Input } from '@angular/core';
// import { } from 

@Component({
  selector: 'large-list',
  templateUrl: './largeList.component.html',
  styleUrls: ['./largeList.component.css'],
  providers: [Input]
})
export class LargeListComponent implements OnInit {
  title = 'large list!';
  filterStr = "";
  dropOpen = false;
  @Input()
  addrObjArray: Array<Object>;

  constructor() {
      // this.addrObjArray = addrObjs;
  }

  // bind with ul-li, and search-subcomponent
    ngOnInit() {
        console.log("ngInit...");
        this.registerClick();
    }

    // all variable need stric type.
    toggleDropdown(evt:MouseEvent) {
        let dropBtn = <HTMLAnchorElement>(evt.target||evt.srcElement);
        if (!this.dropOpen && dropBtn.parentElement) {
            // parent.. add Class .open
            setTimeout(function(){
                dropBtn.parentElement.className += " open";
                console.log("menu open...");
                this.dropOpen = true;
            }, 50);            
        } else if (this.dropOpen) {
            // hide the dropMenu
            dropBtn.parentElement.className = "dropdown-container";
            this.dropOpen = false;
            console.log("menu hidden...");
        }
    }

    registerClick() {
        if (window.addEventListener) {
            document.body.addEventListener("click", this.hideDropdown);
        } else {
            // hack
        }
    }

    hideDropdown(){
        // hide the dropMenu
        let dropdownContainer = document.querySelector(".dropdown-container");
        dropdownContainer.className = "dropdown-container";
        this.dropOpen = false;
    }
}

interface AddrObj {
    name: string;
    ipv4: string;
    type: string;
}
