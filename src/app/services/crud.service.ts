import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteCode } from  '../.model/site_code';
import { StationContact } from '../.model/station_contact';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  PHP_API_SERVER = "http://localhost/petronas_api";

  constructor(private httpClient: HttpClient) { }

  
  //Site Code
  readSiteCode(): Observable<SiteCode[]>{
    return this.httpClient.get<SiteCode[]>(`${this.PHP_API_SERVER}/sc_view.php`);
  }

  createSiteCode(sitecode: SiteCode): Observable<SiteCode>{
    return this.httpClient.post<SiteCode>(`${this.PHP_API_SERVER}/sc_create.php`, sitecode);
  }

  updateSiteCode(sitecode: SiteCode){
    return this.httpClient.put<SiteCode>(`${this.PHP_API_SERVER}/sc_update.php`, sitecode);   
  }

  deleteSiteCode(id: number){
    return this.httpClient.delete<SiteCode>(`${this.PHP_API_SERVER}/sc_delete.php/?id=${id}`);
  }

  //Station Contact
  readStationContact(): Observable<StationContact[]>{
    return this.httpClient.get<StationContact[]>(`${this.PHP_API_SERVER}/scl_view.php`);
  }

  createStationContact(stationcontact: StationContact): Observable<StationContact>{
    return this.httpClient.post<StationContact>(`${this.PHP_API_SERVER}/scl_create.php`, stationcontact);
  }

  updateStationContact(stationcontact: StationContact){
    return this.httpClient.put<StationContact>(`${this.PHP_API_SERVER}/scl_update.php`, stationcontact);   
  }

  deleteStationContact(id: number){
    return this.httpClient.delete<StationContact>(`${this.PHP_API_SERVER}/scl_delete.php/?id=${id}`);
  }

}
