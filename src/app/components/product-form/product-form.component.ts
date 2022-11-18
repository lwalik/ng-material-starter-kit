import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });

  constructor(private _productsService: ProductsService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productsService.create({
      title: productForm.value.title,
      price: productForm.value.price,
      description: productForm.value.description,
      image: productForm.value.image,
      category: productForm.value.category
    }).subscribe();
  }
}
