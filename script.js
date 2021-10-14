
const div = document.createElement("div")
div.className = "tablediv"
document.querySelector(".row").append(div)
const add = document.querySelector(".tablediv");
add.innerHTML = `  
                         <table class="table table-striped table-hover" id="tabledata">
                         <thead>
                         <tr>
                           <th scope="col-md-2" class="thead">First Name</th>
                           <th scope="col-md-2" class="thead">Last Name</th>
                           <th scope="col-md-2" class="thead">Address</th>
                           <th scope="col-md-2" class="thead">Pincode</th>
                           <th scope="col-md-2" class="thead">Country</th>
                           <th scope="col-md-2" class="thead">State</th>
                           <th scope="col-md-2" class="thead">Gender</th>
                           <th scope="col-md-2" class="thead">Choices of Food</th>
                          </tr>
                          </thead>
                       </table>
                       `


document.querySelector("#btnsub").onclick = storeValuesIntoTable = () => {



  for (var i = 0; i < 6; i++) {
    if ((document.querySelectorAll(".field")[i].value === "") ||
      (document.querySelector(".form-select").value === "Select a gender..")) {
      alert("Please fill up the form fields");
      return false;
    }
  }
  
  var checkboxvalues = [];
  checkboxvalues = Array.from(document.querySelectorAll(".form-check-input:checked")).map((checkbox) => checkbox.value);
  console.log(checkboxvalues)

  if (checkboxvalues.length < 2) {

    alert("Must choose 2 options");
    return false;
  }

  document.querySelector("table").innerHTML += `
                                             
                                              <tr class="uservalues">
                                               <td>${document.querySelector("#firstname").value}</td>
                                               <td>${document.querySelector("#lastname").value}</td>
                                               <td>${document.querySelector("#address").value}</td>
                                               <td>${document.querySelector("#pincode").value}</td>
                                               <td>${document.querySelector("#country").value}</td>
                                               <td>${document.querySelector("#state").value}</td>
                                               <td>${document.querySelector("#gender").value}</td>
                                               <td>${checkboxvalues}</td>
                                               </tr>`


  document.querySelector("#favfoodform").reset();
  return false;

}



