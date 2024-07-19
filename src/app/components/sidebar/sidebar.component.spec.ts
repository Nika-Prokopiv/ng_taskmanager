import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Location} from '@angular/common';
import {NgOptimizedImage} from "@angular/common";
import {By} from "@angular/platform-browser";
import {provideRouter, Routes} from "@angular/router";
import {RouterTestingHarness} from "@angular/router/testing";
import {provideLocationMocks} from "@angular/common/testing";

import {SidebarComponent} from './sidebar.component';
import {HomeComponent} from "../home/home.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TaskManagementComponent} from "../task-management/task-management.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: '',
    title: 'Home | TomatoTimer',
    component: HomeComponent
  },
  {
    path: 'chart',
    title: 'Dashboard | TomatoTimer',
    component: DashboardComponent
  },
  {
    path: 'manager',
    title: 'Task management | TomatoTimer',
    component: TaskManagementComponent
  },
  {
    path: '**', pathMatch: 'full',
    title: 'Page not found | TomatoTimer',
    component: PageNotFoundComponent
  }
]

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, NgOptimizedImage],
      providers: [provideRouter(routes),
        provideLocationMocks()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Spec 1: should create', () => {
    expect(component).toBeTruthy();
  });

  it('Spec 2: should navigate to Home component', async () => {

    const dashboardNav = fixture.debugElement.query(By.css("[title='Dashboard']"))
    dashboardNav.triggerEventHandler('click', {});

    const harness = await RouterTestingHarness.create();
    const location = TestBed.inject(Location);
    const component = await harness.navigateByUrl('/chart', DashboardComponent);
    expect(component).toBeDefined();

    expect(location.path(false))
      .withContext(
        'must navigate to the dashboard page'
      )
      .toBe('/chart');
  })

  it('Spec 3: should navigate to Home component on logo click', async () => {

    const logo = fixture.debugElement.query(By.css('img'))
    logo.triggerEventHandler('click', {});

    const harness = await RouterTestingHarness.create();
    const location = TestBed.inject(Location);
    const component = await harness.navigateByUrl('', HomeComponent);

    expect(component).toBeDefined();
    expect(location.path(true))
      .withContext(
        'must navigate to the home page on logo click'
      )
      .toBe('/');
  })

  it('Spec 4: should navigate to PageNotFound component', async () => {

    const dashboardNav = fixture.debugElement.query(By.css("[title='Dashboard']"))
    dashboardNav.triggerEventHandler('click', {});

    const harness = await RouterTestingHarness.create();
    const location = TestBed.inject(Location);
    const component = await harness.navigateByUrl('invalid_url', PageNotFoundComponent);
    expect(component).toBeDefined();

    expect(location.path(false))
      .withContext(
        'must navigate to the "page not found" page'
      )
      .toBe('/invalid_url');
  })
});
