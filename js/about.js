$("document").ready(function () {

    
    let bar1 = new ProgressBar.Circle("#pro1",{
        strokeWidth: 4,
        color: "#fff",
        traiWidth: 2,
        trailColor: "#000",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar1.animate(0.9);
    let bar2 = new ProgressBar.Circle("#pro2",{
        strokeWidth: 4,
        color: "#fff",
        traiWidth: 2,
        trailColor: "#000",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar2.animate(0.9);
    let bar3 = new ProgressBar.Circle("#pro3",{
        strokeWidth: 4,
        color: "#fff",
        traiWidth: 2,
        trailColor: "#000",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar3.animate(0.65);
    let bar4 = new ProgressBar.Circle("#pro4",{
        strokeWidth: 4,
        color: "#fff",
        traiWidth: 2,
        trailColor: "#000",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar4.animate(0.9);
    let bar5 = new ProgressBar.Circle("#pro5",{
        strokeWidth: 4,
        color: "#fff",
        traiWidth: 2,
        trailColor: "#000",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100) + "%")
        }
    })
    bar5.animate(0.9);

});