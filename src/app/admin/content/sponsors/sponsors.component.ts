import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// State and Utility Interfaces
export interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

// Mock Service to simulate database operations
@Component({
  standalone: true,
  template: '',
})
class SponsorsService {
  private readonly mockSponsors = signal<Sponsor[]>([
    { id: 1, name: 'Sponsor A', logoUrl: 'https://placehold.co/100x50/e0e7ff/3730a3?text=Logo+A', websiteUrl: 'https://example.com/a' },
    { id: 2, name: 'Sponsor B', logoUrl: 'https://placehold.co/100x50/e0e7ff/3730a3?text=Logo+B', websiteUrl: 'https://example.com/b' },
    { id: 3, name: 'Sponsor C', logoUrl: 'https://placehold.co/100x50/e0e7ff/3730a3?text=Logo+C', websiteUrl: 'https://example.com/c' },
  ]);

  getSponsors() {
    return this.mockSponsors;
  }

  addSponsor(sponsor: Omit<Sponsor, 'id'>) {
    const newId = this.mockSponsors().length > 0 ? Math.max(...this.mockSponsors().map(s => s.id)) + 1 : 1;
    this.mockSponsors.update(sponsors => [...sponsors, { ...sponsor, id: newId }]);
  }

  updateSponsor(updatedSponsor: Sponsor) {
    this.mockSponsors.update(sponsors => sponsors.map(s => s.id === updatedSponsor.id ? updatedSponsor : s));
  }

  deleteSponsor(id: number) {
    this.mockSponsors.update(sponsors => sponsors.filter(s => s.id !== id));
  }
}

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="space-y-8 p-6 bg-white rounded-xl shadow-lg">
      <!-- Sponsors List and Add Button -->
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold text-gray-900">Manage Sponsors</h2>
        <button (click)="toggleFormVisibility()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300">
          {{ showForm() ? 'Cancel' : 'Add New Sponsor' }}
        </button>
      </div>

      <!-- Sponsors List -->
      <div *ngIf="!showForm()">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          @for (sponsor of allSponsors(); track sponsor.id) {
            <div class="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <img [src]="sponsor.logoUrl" alt="{{ sponsor.name }} Logo" class="w-24 h-12 object-contain mb-4">
              <h3 class="text-md font-semibold text-gray-800">{{ sponsor.name }}</h3>
              <div class="flex space-x-2 mt-4">
                <button (click)="editSponsor(sponsor)" class="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                  Edit
                </button>
                <button (click)="deleteSponsor(sponsor.id)" class="text-red-500 hover:text-red-700 transition-colors duration-200">
                  Delete
                </button>
              </div>
            </div>
          }
          @empty {
            <p class="text-center text-gray-500 italic col-span-full">No sponsors available. Click "Add New Sponsor" to get started.</p>
          }
        </div>
      </div>

      <!-- Add/Edit Form -->
      <div *ngIf="showForm()">
        <form [formGroup]="sponsorForm" (ngSubmit)="saveSponsor()" class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ isEditing() ? 'Edit Sponsor' : 'Add New Sponsor' }}</h3>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" formControlName="name" type="text" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div>
            <label for="logoUrl" class="block text-sm font-medium text-gray-700">Logo URL</label>
            <input id="logoUrl" formControlName="logoUrl" type="url" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div>
            <label for="websiteUrl" class="block text-sm font-medium text-gray-700">Website URL</label>
            <input id="websiteUrl" formControlName="websiteUrl" type="url" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          </div>
          <div class="flex justify-end space-x-4">
            <button type="button" (click)="toggleFormVisibility()" class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              Cancel
            </button>
            <button type="submit" [disabled]="sponsorForm.invalid" class="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-colors duration-300">
              {{ isEditing() ? 'Update Sponsor' : 'Add Sponsor' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class SponsorsComponent {
  private sponsorsService = inject(SponsorsService);
  private fb = inject(FormBuilder);

  public allSponsors = this.sponsorsService.getSponsors();
  public showForm = signal<boolean>(false);
  public isEditing = signal<boolean>(false);

  public sponsorForm = this.fb.group({
    id: [<number | null>null],
    name: ['', Validators.required],
    logoUrl: ['', [Validators.required, Validators.pattern('(https?://.*\\.(?:png|jpg|jpeg|gif|svg))')]],
    websiteUrl: ['', [Validators.required, Validators.pattern('(https?://.*)')]],
  });

  toggleFormVisibility() {
    this.showForm.update(current => !current);
    this.isEditing.set(false);
    this.sponsorForm.reset();
  }

  editSponsor(sponsor: Sponsor) {
    this.isEditing.set(true);
    this.sponsorForm.patchValue(sponsor);
    this.showForm.set(true);
  }

  saveSponsor() {
    if (this.sponsorForm.invalid) {
      return;
    }
    const sponsor = this.sponsorForm.value as Sponsor;
    if (this.isEditing()) {
      this.sponsorsService.updateSponsor(sponsor);
    } else {
      this.sponsorsService.addSponsor(sponsor);
    }
    this.toggleFormVisibility();
  }

  deleteSponsor(id: number) {
    this.sponsorsService.deleteSponsor(id);
  }
}
     