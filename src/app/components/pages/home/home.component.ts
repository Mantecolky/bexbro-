import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }[] = [
    {
      id:'1',
      titlePost:'Post one',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.`,
      imagePost:'https://picsum.photos/536/354',
    },
    {
      id:'2',
      titlePost:'Post two',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.`,
      imagePost:'https://picsum.photos/536/354',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
