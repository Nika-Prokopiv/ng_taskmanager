import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgOptimizedImage} from "@angular/common";
import {SidebarComponent} from './sidebar.component';
import {provideRouter} from "@angular/router";

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, NgOptimizedImage],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
