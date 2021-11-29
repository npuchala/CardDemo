var divider = document.getElementById('first');
var text =`
<div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
  <div class="card">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-5 pt-1 pb-1">
        <img src="https://hookagency.com/wp-content/webpc-passthru.php?src=https://hookagency.com/wp-content/uploads/2018/05/gradient-background.jpeg&nocache=1" class="card-img-top" alt="...">
      </div>
      <div class="col pt-1 pb-0">
        <div class="row">
          <div class="col">
            <h5 class="card-title">Card Title
            </h5>
            <h5>
              <span class="badge bg-secondary">Card Tag</span>
            </h5>
          </div>
          <div class="col d-flex justify-content-center">
            <button class="btn btn-primary" type="button">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


`;

// <div class ="col-xl-3 col-lg-4 col-md-5 col-sm-12">
// <div class ="col-auto">

for(var i = 0; i < 9; i++){
 divider.innerHTML += text;
  }
