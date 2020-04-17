import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AuthService } from '../../services/auth.service';
import { NumberValueAccessor } from '@angular/forms';
import { count } from 'rxjs/operators';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  constructor(private authService:AuthService){}
  user: String;
  username: String;
  TrustedUsers: [];
  numTrusted: String;
  email: String;
  name: String;
  unlocks: Number;
  lastTime: String;
  totalUnrec = String;
  logs: Object;
  times: Number;
  Namelabels = new Array();
  Valuelabels = new Array();
  userFound = false;

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

    ngOnInit(){
      this.authService.getProfile().subscribe((profile: any) => {
        this.user = profile.user;
        this.name = this.user["name"]
        this.username = this.user["username"];
        this.TrustedUsers = this.user["TrustedUsers"];
        this.numTrusted = this.TrustedUsers.length.toString();
        this.email = this.user["email"];
        this.unlocks = this.user["unlocks"];
        this.lastTime = this.user["lastTime"];
        this.totalUnrec = this.user["totalUnrec"];
        this.logs = this.user["logs"];

        //console.log(this.logs['count']);
        this.times = this.unlocks;

        if(this.userFound == false){
          this.Namelabels.push(this.username.toString());
          this.Valuelabels.push(this.unlocks);
        }
          

        

        function addToGraph(logs){
          var logSTR = JSON.stringify(logs);
          var logobj = JSON.parse(logSTR);

          

          
          //console.log(logobj[0].count);

        }
        var logSTR = JSON.stringify(this.logs);
        var logobj = JSON.parse(logSTR);
        logobj.forEach(element => {
          this.Namelabels.push(element.name);
          this.Valuelabels.push(element.count);
          
        });
        //console.log(this.Valuelabels);
  


        this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartEmail");
      this.ctx = this.canvas.getContext("2d");
      
      //this.TrustedUsers.forEach(element => {
        
       // this.labels.push(element);
        //this.labels.push(element);
        
        
      //});
      
     
      //console.log(this.user["unlocks"]);
      
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: this.Namelabels,
          datasets: [{
            label: "Users",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#957DAD',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: this.Valuelabels
          }]
        },

        options: {

          legend: {
            display: true
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: true
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: true,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });

        
      },
      err => {
        console.log(err);
        return false;
  
      });

      
      
    }

    refresh(){
      this.ngOnInit();
    }
}
