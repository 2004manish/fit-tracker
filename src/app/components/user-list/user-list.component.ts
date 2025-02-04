import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  searchTerm: string = '';
  filterType: string = '';
  pageSize: number = 5;
  currentPage: number = 1;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userDataService.getUsers();
  }

  filterUsers(): any[] {
    return this.users
      .filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .filter(user => user.workouts.some(workout => workout.type.includes(this.filterType)));
  }

  paginateData(data: any[]): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return data.slice(start, start + this.pageSize);
  }
}
