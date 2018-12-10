var tba_rand = [218, 164, 986, 621, 817, 1000, 497, 717, 286, 791, 811, 685, 120, 159, 317, 512, 975, 322, 893, 675, 307, 745, 595, 103, 885, 241, 849, 100, 96, 93, 318, 662, 779, 463, 857, 728, 459, 460, 879, 12, 304, 808, 861, 130, 840, 882, 273, 478, 760, 572, 157, 334, 964, 693, 82, 701, 132, 383, 26, 549, 376, 832, 744, 340, 172, 501, 314, 805, 894, 728, 678, 128, 376, 720, 768, 835, 300, 843, 55, 319, 865, 202, 867, 788, 80, 64, 966, 330, 623, 196, 461, 853, 342, 884, 691, 521, 64, 437, 349, 529];
// var tba_rand = [913, 727, 15, 948, 309, 922, 753, 235, 302]
var tba = [];
var s_rand = [7, 52, 35, 85, 9, 38, 34, 59, 74, 10, 64, 97, 51, 100, 80, 79, 39, 6, 48, 4, 30, 38, 92, 58, 20, 99, 30, 22, 24, 44, 70, 68, 94, 67, 33, 26, 61, 58, 68, 42, 1, 44, 82, 37, 63, 51, 9, 71, 99, 24, 85, 18, 7, 29, 59, 50, 70, 69, 83, 45, 72, 49, 13, 33, 10, 32, 91, 34, 32, 33, 9, 99, 2, 85, 46, 28, 22, 99, 16, 16, 53, 2, 71, 47, 62, 83, 16, 9, 77, 9, 72, 87, 87, 16, 64, 82, 63, 59, 34, 97];
// var s_rand = [84, 10, 74, 53, 17, 79, 91, 67, 89, 38];
var service = [];
var arrival = [];
var end_time = 0;
var time_service_begins = [];
var time_service_ends = [];
var customer_queue = [];
var server_queue = [];
var CustomerNo;
var max_arrival_time;
var max_service_time;
function calculate() {
    // document.getElementById("tbody_id").innerHTML("");
    document.getElementById("CustomerTable").style.visibility = "visible";
    document.getElementById("resultlbl").style.visibility = "visible";
    // var CustomerNo = 10; //prompt("Enter Number of Customers");
    // var max_arrival_time = 8;
    // var max_service_time = 6;
    if(document.getElementById("customer_no").value === ""){
        CustomerNo = 10;
    } else {
        CustomerNo = document.getElementById("customer_no").value;
    }

    if(document.getElementById("arrival_minute").value === "") {
        max_arrival_time = 8;
    }
    else {
        max_arrival_time = document.getElementById("arrival_minute").value;
    }
    if(document.getElementById("service_minute").value === "") {
        max_service_time = 6;
    }   else {
        max_service_time = document.getElementById("service_minute").value;
    }





    TBA_DETERMINATION();
    console.log("Time Between Arrival: " + tba);
    S_DETERMINATION();
    console.log("Service Time: " + service);
    AT_DETERMINATION();


    console.log("Service begins: " + time_service_begins);
    console.log("Service Ends: " + time_service_ends);
    console.log("Customer Queue: " + customer_queue);
    console.log("Server Queue: " + server_queue);

    var table = document.getElementById('CustomerTable');
    for (i = 0; i < CustomerNo; i++) {
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var A = row.insertCell(0);
        var B = row.insertCell(1);
        var C = row.insertCell(2);
        var D = row.insertCell(3);
        var E = row.insertCell(4);
        var F = row.insertCell(5);
        var G = row.insertCell(6);
        var H = row.insertCell(7);
        var I = row.insertCell(8);

        A.innerHTML = i + 1;
        B.innerHTML = tba[i];
        C.innerHTML = arrival[i];
        D.innerHTML = service[i];
        E.innerHTML = time_service_begins[i];
        F.innerHTML = customer_queue[i];
        G.innerHTML = time_service_ends[i];
        H.innerHTML = service[i] + customer_queue[i];
        I.innerHTML = server_queue[i];
    }
}

function TBA_DETERMINATION() {
    tba.push(0);
    for (i = 0; i < CustomerNo - 1; i++) {
        tba.push(Math.ceil(tba_rand[i] / (1000 / max_arrival_time)));
    }
}

function S_DETERMINATION() {
    for (i = 0; i < CustomerNo; i++) {
        service.push(Math.ceil(s_rand[i] / (100 / max_service_time)));
        // console.log("Service Rand: "+s_rand[i]+" , Service: "+ service[i]);
    }
}

function AT_DETERMINATION() {
    var num = 0;
    for (i = 0; i < CustomerNo; i++) {
        num = num + tba[i];
        arrival.push(num);
    }
    console.log("Arrival: " + arrival);
    for (i = 0; i < CustomerNo; i++) {
        if (arrival[i] >= end_time) {
            time_service_begins.push(arrival[i]);
            end_time = arrival[i] + service[i];
            time_service_ends.push(end_time);
        } else {
            time_service_begins.push(end_time);
            end_time = end_time + service[i];
            time_service_ends.push(end_time);
        }
        console.log("Arrive: " + arrival[i] + ", Begin: " + time_service_begins[i] + ", Ends: " + time_service_ends[i]);
    }
    for (i = 0; i < CustomerNo; i++) {
        customer_queue.push(time_service_begins[i] - arrival[i]);
        if (i === (CustomerNo - 1)) {
            server_queue.push(0)
            break;
        }
        server_queue.push(time_service_begins[i + 1] - time_service_ends[i]);
    }
    var avg_st;
    var avg_wt;
    for(i=0, avg_st=0, avg_wt=0; i<CustomerNo; i++){
      avg_st += service[i];
      avg_wt += customer_queue[i];
    }
    avg_st = avg_st/CustomerNo;
    avg_wt = avg_wt/CustomerNo;
    document.getElementById("wt").innerHTML = avg_wt;
    document.getElementById("st").innerHTML = avg_st;

}
