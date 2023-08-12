import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddOrEditProductComponent } from './add-or-edit-product/add-or-edit-product.component';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  loading = false;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['title', 'image', 'category', 'description', 'price', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private apiService: ApiService,private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.dataSource.paginator = this.paginator;
  }

  loadProducts(): void {
    this.loading = true;
    this.apiService.getProducts().subscribe(products => {
      this.loading = false;
      this.dataSource.data = products;
    });
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(AddOrEditProductComponent, {
      width: '400px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.apiService.addProduct(result).subscribe( {
          next: () => {
          this.loadProducts();
          this.toastrService.success( `Product added successfully`,'Success');
        },
        error: () => {
          this.loading = false;
          this.toastrService.error( `Error adding product`,'Faild!');
        }}
        );
      }
    });
  }

  editProduct(product: any): void {
    const dialogRef = this.dialog.open(AddOrEditProductComponent, {
      width: '400px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.apiService.updateProduct(result, product.id).subscribe({
          next: () => {
          this.loadProducts();
          this.toastrService.success( `Product Edited successfully`,'Success');
        },
        error: () => {
          this.loading = false;
          this.toastrService.error( `Error Editing product`,'Faild!');
        }});
      }
    });
  }


  deleteProduct(product: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this product?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.apiService.deleteProduct(product.id).subscribe({
          next: () => {
          this.loadProducts();
          this.toastrService.success( `Product deleted successfully`,'Success');
        },
        error: () => {
          this.loading = false;
          this.toastrService.error( `Error deleting product`,'Faild!');
        }}
        );
      }
    });
  }

}
