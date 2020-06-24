import { TestBed } from '@angular/core/testing';
import { RentService } from './rent.service';
describe('RentService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RentService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rent.service.spec.js.map