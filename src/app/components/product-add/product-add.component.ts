import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../domain/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: IProduct = {
    'productId': 111,
    'productName': '',
    'productCode': '',
    'releaseDate': 'August 10, 2017',
    'description': '',
    'price': 100,
    'starRating': 2,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
  };

  constructor(private _service: ProductService, private _router: Router) { }

  ngOnInit() { }
  addProduct(): void {
      this._service.addProduct(this.product).subscribe(response =>  {
							            //  if(response.error) {
	                        //     	console.log('The user could not be added, server Error.');
                          //    }
                      // Envoyer la route pour la vue liste
                         this._router.navigate(['/list']);
                        },

                        error=> {
                       		console.log('The user could not be added, server Error.');
                       	});
      }
}
