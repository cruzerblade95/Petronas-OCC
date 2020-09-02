import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { SiteCode } from '../.model/site_code';
declare var $;

@Component({
  selector: 'app-site-code',
  templateUrl: './site-code.component.html',
  styleUrls: ['./site-code.component.css']
})
export class SiteCodeComponent implements OnInit {

  dataArray: any = [];
  dtOptions: DataTables.Settings = {};
  siteCode:  SiteCode[];
  selectedSiteCode:  SiteCode  = { id: null , site_name: null, region: null, ip_address: null, email: null, cc_to: null};
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
    this.crudService.readSiteCode().subscribe((siteCode: SiteCode[])=>{
      this.dataArray = siteCode;
      console.log(siteCode);
    });
  }

  createOrUpdateSiteCode(form){
    if(this.selectedSiteCode && this.selectedSiteCode.id){
      form.value.id = this.selectedSiteCode.id;
      this.crudService.updateSiteCode(form.value).subscribe((siteCode: SiteCode)=>{
        console.log("Site Code information updated" , siteCode);
        window.location.reload();
      });
    }
    else{

      this.crudService.createSiteCode(form.value).subscribe((siteCode: SiteCode)=>{
        console.log("Site Code information created, ", siteCode);
        window.location.reload();
      });
    }

  }

  selectSiteCode(siteCode: SiteCode){
    this.selectedSiteCode = siteCode;
  }

  deleteSiteCode(id){
    this.crudService.deleteSiteCode(id).subscribe((siteCode: SiteCode)=>{
      console.log("Site Code information deleted, ", siteCode);
      window.location.reload();
    });
  }

}

