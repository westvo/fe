import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoomTypeTemplateComponent } from './create/create.component';
import { DeleteRoomTypeTemplateComponent } from './delete/delete.component';
import { RoomTypeTemplateService } from './room-type-template.service';

@Component({
  selector: 'app-room-type-template',
  templateUrl: './room-type-template.component.html',
  styleUrls: ['./room-type-template.component.scss']
})
export class RoomTypeTemplateComponent implements OnInit {

  constructor(private service: RoomTypeTemplateService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    //get table properties
    this.service.getProperties().subscribe((res: any) => {
      // change column display
      this.properties = res.data.properties;
      this.columnsToDisplay = Object.keys(res.data.properties);
      this.columnsToDisplay.push('action');
    })
   
    this.getHotels();
  }

  getHotels() {
 // set datasource
 this.service.all().subscribe((res: any) => {
  this.dataSource = res.data;
})
  }

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateRoomTypeTemplateComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');

      this.getHotels();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteRoomTypeTemplateComponent, {
      width: '550px',
      data: {properties: this.properties, dataSource}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');

      this.getHotels();
    });
  }
}