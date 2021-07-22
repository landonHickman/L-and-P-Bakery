<!-- create a bootstrap card in a container-->
<div class="container">
    <!--Bootstrap card with slider class-->
    <div id="carousel-demo" 
         class="carousel slide" 
         data-ride="carousel">
        <div class="carousel-inner">
            <div class="item">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20190709143850/1382.png">
            </div>
            <div class="item active">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20190709143904/391.png">
            </div>
        </div>
        <!--slider control for card-->
        <a class="left carousel-control"
           href="#carousel-demo"
           data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left">
          </span>
        </a>
        <a class="right carousel-control" 
           href="#carousel-demo" 
           data-slide="next">
            <span class="glyphicon glyphicon-chevron-right">
          </span>
        </a>
    </div>
</div>