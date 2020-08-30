import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { SiteCode } from '../.model/site_code';

@Component({
  selector: 'app-site-code',
  templateUrl: './site-code.component.html',
  styleUrls: ['./site-code.component.css']
})
export class SiteCodeComponent implements OnInit {

  siteCode:  SiteCode[];
  selectedSiteCode:  SiteCode  = { id: null , site_name: null, region: null, ip_address: null, email: null, cc_to: null};

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.readSiteCode().subscribe((siteCode: SiteCode[])=>{
      this.siteCode = siteCode;
      console.log(this.siteCode);
    })
  }

  createOrUpdateSiteCode(form){
    if(this.selectedSiteCode && this.selectedSiteCode.id){
      form.value.id = this.selectedSiteCode.id;
      this.crudService.updateSiteCode(form.value).subscribe((siteCode: SiteCode)=>{
        console.log("Site Code information updated" , siteCode);
      });
    }
    else{

      this.crudService.createSiteCode(form.value).subscribe((siteCode: SiteCode)=>{
        console.log("Site Code information created, ", siteCode);
      });
    }

  }

  selectSiteCode(siteCode: SiteCode){
    this.selectedSiteCode = siteCode;
  }

  deleteSiteCode(id){
    this.crudService.deleteSiteCode(id).subscribe((siteCode: SiteCode)=>{
      console.log("Site Code information deleted, ", siteCode);
    });
  }

}
