import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../domain/product';
import {Subscription} from 'rxjs/Subscription';
import {ProductService} from '../../services/product.service';


@Component({
    templateUrl: './product-remove.component.html'
})
export class ProductRemoveComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Suppression du produit';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService,
                private _service) {
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

    removeProduct(): void {
        this._service.removeProduct(this.product).subscribe(response => {
                //  if(response.error) {
                //     	console.log('The user could not be added, server Error.');
                //    }
                // Envoyer la route pour la vue liste
                this._router.navigate(['/remove']);
            },

            error => {
                console.log('The product could not be added, server Error.');
            });
    }

    onBack(): void {
        this._router.navigate(['/list']);
    }
}
