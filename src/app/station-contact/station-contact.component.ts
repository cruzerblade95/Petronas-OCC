import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { StationContact } from '../.model/station_contact';
declare var $;

@Component({
  selector: 'app-station-contact',
  templateUrl: './station-contact.component.html',
  styleUrls: ['./station-contact.component.css']
})
export class StationContactComponent implements OnInit {

  dataArray: any = [];
  stationContact:  StationContact[];
  dtOptions: DataTables.Settings = {};
  selectedStationContact:  StationContact  = { id: null , site_id: null, fuel_account: null, pump_name: null, state: null, region: null, company_name: null, dealer_name: null, tel_no: null, hp_no: null};
  showContent: boolean;

  constructor(public crudService: CrudService, private chRef: ChangeDetectorRef) { 
    this.loadTableData();

    setTimeout(() => {
      $(function (){
        $('#dt').DataTable();
      });
    }, 0);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  ngOnInit(): void {
  }

  loadTableData(){
    this.crudService.readStationContact().subscribe((stationContact: StationContact[])=>{
      this.dataArray = stationContact;
      console.log(stationContact);
    });
  }

  createOrUpdateStationContact(form){
    if(this.selectedStationContact && this.selectedStationContact.id){
      form.value.id = this.selectedStationContact.id;
      this.crudService.updateStationContact(form.value).subscribe((stationContact: StationContact)=>{
        console.log("Station Contact information updated" , stationContact);
        window.location.reload();
      });
    }
    else{

      this.crudService.createStationContact(form.value).subscribe((stationContact: StationContact)=>{
        console.log("Station Contact information created, ", stationContact);
        window.location.reload();
      });
    }

}

selectStationContact(stationContact: StationContact){
  this.selectedStationContact = stationContact;
}

deleteStationContact(id){
  this.crudService.deleteStationContact(id).subscribe((stationContact: StationContact)=>{
    console.log("Site Code information deleted, ", stationContact);
    window.location.reload();
  });
}
}
