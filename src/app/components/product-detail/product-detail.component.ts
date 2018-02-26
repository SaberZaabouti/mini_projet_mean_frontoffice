import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../domain/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../../services/product.service';


@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _productService: ProductService) {
  }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(
          params => {
              let id = +params['id'];
              this.getProduct(id);
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  getProduct(id: number) {
      this._productService.getProduct(id).subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error);
  }

  onBack(): void {
      this.router.navigate(['/list']);
  }

  onRatingClicked(message: string): void {
      this.pageTitle = 'Product Detail: ' + message;
  }
}
