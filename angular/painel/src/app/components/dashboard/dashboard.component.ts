import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


SwiperCore.use([Navigation]);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiperBtn!: SwiperComponent;
  @ViewChild('contentTabsRef') tabRef: ElementRef<HTMLElement> | any;


  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: false,
    loop: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

  slideNext(){
    this.swiperBtn.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiperBtn.swiperRef.slidePrev(100);
  }

  constructor() { }

  ngOnInit(): void {
  }

  tabChange(event: any){
    let target = event.target;
    //console.log(target.id, this.tabRef);
    let contents = this.tabRef.nativeElement.childNodes;
    contents.forEach((element: any) => {
      //element.classList.toggle('active');
      // console.log(target.id === element.dataset.content);
      if(target.id === element.dataset.content){
        element.classList.add('active');
      }else {
        element.classList.remove('active');
      }

    });
  }

}
