$("#example-table").tabulator({
  height:"300px",
  fitColumns:true,
  columns:[
    {title:"Item", field:"item",  sortable:true, width:200},
    {title:"Price", field:"price", sortable:true, sorter:"number"},
    {title:"Section", field:"section", sortable:true},
  ],
});

var sampleData= [{id:1, item:"Oli Bob", price:12, section:1, rating:1, col:"red", dob:"", car:1, lucky_no:5, cheese:"Cheader"},]

$("#example-table").tabulator("setData", sampleData);

$(window).resize(function(){
  $("#example-table").tabulator("redraw");
});
