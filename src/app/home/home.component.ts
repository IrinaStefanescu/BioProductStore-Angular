import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RegisterCategoryDTO } from '../models/Category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories : RegisterCategoryDTO [] = []
  searchText: string;

  constructor(private readonly categoryService : CategoryService) {
   }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data: RegisterCategoryDTO[]) => {
      this.categories = data;
      console.log(this.categories)
      console.log(data)
    })
  }



}
