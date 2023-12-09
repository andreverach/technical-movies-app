import { Component } from '@angular/core';
import { MOVIES_DATA } from './shared/constants/movies.data';
import { MoviesDto } from './shared/interfaces/movie.dto';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies: MoviesDto[] = MOVIES_DATA.movies;
  genres: string[] = MOVIES_DATA.genres;
  formFilter!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  buildForm(){
    this.formFilter = this.formBuilder.group({
      name: ['', []],
      description: ['', []],
      genre: ['', []],
    });
  }
  
  get contrlNameField(){
    return this.formFilter.get('name');
  }
  get contrlDescriptionField(){
    return this.formFilter.get('description');
  }

  trackByFn(index: number): number{
    return index;
  }  
}
