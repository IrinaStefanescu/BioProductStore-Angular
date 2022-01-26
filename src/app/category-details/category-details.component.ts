import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterProductDTO } from '../models/Product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  public products : RegisterProductDTO [] = []

  constructor(private readonly productService : ProductService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.productService.getAllProducts().subscribe((data: RegisterProductDTO[]) => {
      this.products = data;
      console.log(this.products)
      console.log(data)
    })
  }

}
