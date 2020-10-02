import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SiteCode } from  '../.model/site_code';
import { StationContact } from '../.model/station_contact';
import { Observable } from  'rxjs';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';          
const EXCEL_EXTENSION = '.xlsx';

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

  public exportAsExcelFile(json: any[], excelFileName: string): void {  
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);  
    console.log('worksheet', worksheet);  
    const workbook: XLSX.WorkBook = {  
        Sheets: {  
            'data': worksheet  
        },  
        SheetNames: ['data']  
    };  
    const excelBuffer: any = XLSX.write(workbook, {  
        bookType: 'xlsx',  
        type: 'array'  
    });  
    this.saveAsExcelFile(excelBuffer, excelFileName);  
  }

private saveAsExcelFile(buffer: any, fileName: string): void {  
    const data: Blob = new Blob([buffer], {  
        type: EXCEL_TYPE  
    });  
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + EXCEL_EXTENSION);  
  }

}
