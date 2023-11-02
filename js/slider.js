slider_buttons = document.getElementsByClassName("slider__bar");
review1 = document.getElementsByClassName("review-box__review_1");
let margins = [0, -33.3, -66.6];

for (let i = 0; i<3; i++)
{
    slider_buttons[i].addEventListener('click', 
    function() {
            for (let button of slider_buttons)
            {
                button.classList.remove("slider__bar_active");
            }
            review1[0].style.marginLeft = String(margins[i]) + "%";
            slider_buttons[i].classList.add('slider__bar_active');
        });
}