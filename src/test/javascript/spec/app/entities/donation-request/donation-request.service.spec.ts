/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { DonationRequestService } from 'app/entities/donation-request/donation-request.service';
import { IDonationRequest, DonationRequest } from 'app/shared/model/donation-request.model';

describe('Service Tests', () => {
    describe('DonationRequest Service', () => {
        let injector: TestBed;
        let service: DonationRequestService;
        let httpMock: HttpTestingController;
        let elemDefault: IDonationRequest;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(DonationRequestService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new DonationRequest(0, 'AAAAAAA', currentDate, currentDate, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 0);
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        initialDate: currentDate.format(DATE_FORMAT),
                        expireDate: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a DonationRequest', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        initialDate: currentDate.format(DATE_FORMAT),
                        expireDate: currentDate.format(DATE_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        initialDate: currentDate,
                        expireDate: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new DonationRequest(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a DonationRequest', async () => {
                const returnedFromService = Object.assign(
                    {
                        type: 'BBBBBB',
                        initialDate: currentDate.format(DATE_FORMAT),
                        expireDate: currentDate.format(DATE_FORMAT),
                        condition: 'BBBBBB',
                        description: 'BBBBBB',
                        experience: 'BBBBBB',
                        numberOfVolunteers: 1
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        initialDate: currentDate,
                        expireDate: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of DonationRequest', async () => {
                const returnedFromService = Object.assign(
                    {
                        type: 'BBBBBB',
                        initialDate: currentDate.format(DATE_FORMAT),
                        expireDate: currentDate.format(DATE_FORMAT),
                        condition: 'BBBBBB',
                        description: 'BBBBBB',
                        experience: 'BBBBBB',
                        numberOfVolunteers: 1
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        initialDate: currentDate,
                        expireDate: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a DonationRequest', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
