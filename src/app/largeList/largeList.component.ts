import { Component,OnInit, Input } from '@angular/core';
// import { } from 

const CURSOR_RANGE = 1000;

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
  filteredAddrObjs: Array<Object>;
  cursor = 0;
  dropMenu: Element = null;
  selected: Object = {"name": "to be selected."};
  options: Array<Object> = this.addrObjArray;

  constructor() {
      // this.addrObjArray = addrObjs;
  }

  // bind with ul-li, and search-subcomponent
    ngOnInit() {
        console.log("ngInit...");
        this.dropMenu = document.querySelector(".dropdown-menu");
        this.registerClick();
        // filter 1000 elements to fill in dropMenu.
        this.filterAO();
    }

    // fill dropMenu depend on the index range..
    filterAO() {
        try {
            if (this.cursor < 0 || this.cursor > this.addrObjArray.length -1001) return;
            this.filteredAddrObjs = this.addrObjArray.slice(this.cursor, this.cursor+CURSOR_RANGE);
            console.log("filtering addrobjs to promote performance..");
        } catch (error) {
            console.error(error);
        }
    }
    
    // keyUp listener.
    searchAO(evt: KeyboardEvent) {
        if (this.filterStr.length === 0) {
            this.cursor = 0;
            this.filterAO();
            return;
        }
        try {
            let tempAOs = [];
            for(let j = 0; j < this.addrObjArray.length; j ++) {
                let curAO: AddrObj = <AddrObj>this.addrObjArray[j];
                if (curAO.name.indexOf(this.filterStr) > -1) {
                    tempAOs.push(curAO);
                }
            }
            this.filteredAddrObjs = tempAOs;
            this.openDropdown();
            console.warn("search keyword is: " + this.filterStr, " search res num: " + tempAOs.length);
        } catch (error) {
            console.error("something happen when search AO");
        }
    }

    // selectAO by click AO list-item.
    selectAO(evt: Event, ao: AddrObj) {
        if (ao) {
            this.selected = ao;
            console.warn("selected AO: " + ao.name);
            return;
        } else {
            console.warn("NOT selected AO.........");
        }
    }

    throttle(func: Function, interv: number) {
        setTimeout(function(){
            let executing = true;
            let func2call = func;
            // if cooled down.. execute.
            if (!executing) {
                setTimeout(function(){
                    func2call();
                    executing = false;         
                }, interv)
            }        
        }, interv)
    }

    // to listen scroll on dropMenu, in order to filter new AO... throttle must be applied to this..
    scrollListener(evt: MouseWheelEvent) {
        if (1) {
            // cooling time 300ms for scrollListener.
            this.throttle(this.loadMoreAO, 300);
        } else {
            console.error("can not find dropMenu !!");
        }
    }

    // if function called as eventListener !! `this` means the Element which trigger evt ??
    loadMoreAO() {
        console.warn("when handling wheel evt, `this` means " + this);
        if ((this.dropMenu.scrollHeight - this.dropMenu.scrollTop) < 211 && this.cursor < (this.addrObjArray.length - 1001)) {
            // scroll to next page.
            this.cursor += CURSOR_RANGE;
            this.filterAO();
        } else if (this.dropMenu.scrollTop < 1 && this.cursor > CURSOR_RANGE) {
            this.cursor -= CURSOR_RANGE;
            this.filterAO();
        } else {
            console.warn("Nothing happened when check scrollTop: " + this.dropMenu.scrollTop);
        }
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
            // this is special, in listener(evt: event) `this` indicate what??
        } else {
            // hack
        }
    }

    openDropdown() {
        if (this.dropMenu && this.dropMenu.parentElement) {
            let dropContainer = this.dropMenu.parentElement;
            dropContainer.className += " open";
            this.dropOpen = true;
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
