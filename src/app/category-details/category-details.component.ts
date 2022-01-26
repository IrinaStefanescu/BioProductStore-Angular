import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterCategoryDTO } from '../models/Category.model';
import { RegisterProductDTO } from '../models/Product.model';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  public products : RegisterProductDTO [] = []


  constructor(private readonly productService : ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.productService.getAllProductsByCategoryId(String(this.route.snapshot.paramMap.get('id'))).subscribe((data: RegisterProductDTO[]) => {
      this.products = data;
      console.log(this.products)
      console.log(data)
    })
  }

}
