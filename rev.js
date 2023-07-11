const review = document.querySelectorAll(".review")

review.forEach((review, index1) => {
    review.addEventListner("click", () =>{
        console.log(index1);
    });
});