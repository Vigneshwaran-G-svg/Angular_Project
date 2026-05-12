import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListService } from '../services/product-list.service';
import { ProductList } from '../models/product-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
products: ProductList[] = [];
filteredProducts: ProductList[] = [];
  categories: any[] = [];
  selectedCategory = '';
  sortOrder = '';

  constructor(private ProductList_Services: ProductListService,  private router: Router) {}
  
  ngOnInit(): void {
   

    this.ProductList_Services.getProducts().subscribe((data)=>{
      console.log(data)
      this.products=data;
  
      this.filteredProducts = data;
this.categories = [...new Set(data.map((p: any) => p.category))];    })
  }
   applyFilter() {
    let temp = [...this.products];

    if (this.selectedCategory) {
      temp = temp.filter(p => p.category === this.selectedCategory);
    }

    if (this.sortOrder === 'low') {
      temp.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'high') {
      temp.sort((a, b) => b.price - a.price);
    }

    this.filteredProducts = temp;
  }
  goHome() {
  this.router.navigate(['']);
}
}
