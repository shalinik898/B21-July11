    
        var options = {
            series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
            chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#apex1"), options);
          chart.render();
        

//define a variable flag for sidebar if its open or close
let sidebarOpen=false;
let sidebar=document.getElementById("sidebar");
let sidebarClosebtn=document.getElementById("sidebarIcon");


function toggleSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar_responsive");
        sidebarOpen=true;
    }
}

//function to close the sidebar
function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar_responsive");
        sidebarOpen=false
  
    }
}
