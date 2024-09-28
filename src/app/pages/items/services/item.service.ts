import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsKey = 'items';  // Key for LocalStorage

  constructor() {
    // Initialize with saved data from LocalStorage
    const savedItems = localStorage.getItem(this.itemsKey);
    if (!savedItems) {
      this.saveItemsToLocalStorage([]);  // Initialize empty array if no data
    }
  }

  // Retrieve items from LocalStorage
  getItems(): string[] {
    return JSON.parse(localStorage.getItem(this.itemsKey) || '[]');
  }

  // Add a new item and save it to LocalStorage
  addItem(item: string): void {
    const items = this.getItems();
    items.push(item);
    this.saveItemsToLocalStorage(items);
  }

  // Update an existing item
  updateItem(index: number, newItem: string): void {
    const items = this.getItems();
    if (index >= 0 && index < items.length) {
      items[index] = newItem;
      this.saveItemsToLocalStorage(items);
    }
  }

  // Delete an item
  deleteItem(index: number): void {
    const items = this.getItems();
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      this.saveItemsToLocalStorage(items);
    }
  }

  // Save the items array to LocalStorage
  private saveItemsToLocalStorage(items: string[]): void {
    localStorage.setItem(this.itemsKey, JSON.stringify(items));
  }

}
