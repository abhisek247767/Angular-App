import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../User-Model/user/user.module';
import { UserService } from '../../User-Service/user.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';







@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,CommonModule,MatCardModule,MatPaginatorModule,MatPaginator,MatTableModule,MatSort,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: User[] = [];
  dataSource!: MatTableDataSource<User>;
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'gender', 'avatar', 'domain'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  @ViewChild(MatSort)
  sort!: MatSort;
  searchKey!: string;

  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
      console.log('Paginator assigned:', this.dataSource.paginator);

      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(): void {  
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  pageSize = 20; // Set the default page size

  onPageSizeChange(event: any): void {
    this.pageSize = event.pageSize;
    this.paginator.pageIndex = 0; // Reset to the first page
    console.log("hi", event.pageSize);
  }
  
  
}
