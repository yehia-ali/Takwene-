import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  items: string[] = [];
  newItem: string = '';
  editingIndex: number = -1;  
  editedItem: string = '';  

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.items = this.itemService.getItems();
  }

  addItem(): void {
    if (this.newItem) {
      this.itemService.addItem(this.newItem);
      this.newItem = ''; 
      this.loadItems(); 
    }
  }

  editItem(index: number): void {
    this.editingIndex = index;
    this.editedItem = this.items[index];  
  }

  saveEditedItem(): void {
    if (this.editedItem) {
      this.itemService.updateItem(this.editingIndex, this.editedItem);
      this.cancelEdit();  
      this.loadItems();  
    }
  }

  cancelEdit(): void {
    this.editingIndex = -1;
    this.editedItem = '';
  }

  deleteItem(index: number): void {
    this.itemService.deleteItem(index);
    this.loadItems(); 
  }

}
