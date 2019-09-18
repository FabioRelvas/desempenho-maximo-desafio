import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeShipmentComponent } from './volume-shipment.component';

describe('VolumeShipmentComponent', () => {
  let component: VolumeShipmentComponent;
  let fixture: ComponentFixture<VolumeShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
