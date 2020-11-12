import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>Copyright &copy; Your Website</small>
    </div>
  </footer>`,
  styles: ['h1 { font-weight: normal; }'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
