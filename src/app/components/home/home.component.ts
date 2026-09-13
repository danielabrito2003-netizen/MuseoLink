import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/images/home/slide-1-1920x753.jpg',
      captionTitle: 'Title 1',
      captionText: 'Caption text 1'
    },
    {
      image: 'assets/images/home/slide-2-1920x753.jpg',
      captionTitle: 'Title 2',
      captionText: 'Caption text 2'
    },
    {
      image: 'assets/images/home/slide-3-1920x753.jpg',
      captionTitle: 'Title 3',
      captionText: 'Caption text 3'
    }
  ];

  currentSlide = 0;
  slideInterval: any;

  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
