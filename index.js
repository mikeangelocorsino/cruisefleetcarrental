//-- Log Out ---//
function sarado() {
    window.location.href = "login.html";
}

//--SignUp and LogIn --//
function signUp() {
    window.location.href = "signup.html";
}



function logIn() {
    window.location.href = "login.html";
}


//--Favorite--//
function changeContent(buttonNumber) {
    const mainImage = document.getElementById('mainImage');
    const rate = document.getElementById('rate');
    const model = document.getElementById('model');
    const mark = document.getElementById('mark');
    const year = document.getElementById('year');
    const doors = document.getElementById('doors');
    const ac = document.getElementById('ac');
    const transmission = document.getElementById('transmission');
    const fuel = document.getElementById('fuel');

    switch (buttonNumber) {
        case 1:
            mainImage.src ="Image/p1.png";
            rate.textContent = '$ 300';
            model.textContent = 'Rolls Royce';
            mark.textContent = 'Phantom';
            year.textContent = '2022';
            doors.textContent = '4';
            ac.textContent = 'Yes';
            transmission.textContent = '8-speed Automatic';
            fuel.textContent = 'Premium Unleaded';
            break;
        case 2:
            mainImage.src ="Image/p2.png";
            rate.textContent = '$ 200';
            model.textContent = 'Mercedes S550';
            mark.textContent = 'Mercedes';
            year.textContent = '2021';
            doors.textContent = '4';
            ac.textContent = 'Yes';
            transmission.textContent = '7-Speed Shifter';
            fuel.textContent = 'Premium Unleaded';
            break;
        case 3:
            mainImage.src = "Image/p4.png";
            rate.textContent = '$ 200';
            model.textContent = 'Evoque';
            mark.textContent = 'Range Rover';
            year.textContent = '2023';
            doors.textContent = '4';
            ac.textContent = 'Yes';
            transmission.textContent = '10-Speed Automatic';
            fuel.textContent = 'Premium Unleaded';
            break;
        case 4:
            mainImage.src = "Image/p3.png";
            rate.textContent = '$ 300';
            model.textContent = 'XC90 B6 Core Sport';
            mark.textContent = 'Volvo';
            year.textContent = '2023';
            doors.textContent = '4';
            ac.textContent = 'Yes';
            transmission.textContent = '8-Speed Shiftable';
            fuel.textContent = 'Premium Unleaded';
            break;
        case 5:
            mainImage.src = "Image/p6.png";
            rate.textContent = '$ 200';
            model.textContent = 'Alphard 2.5 SC';
            mark.textContent = 'Toyota';
            year.textContent = '2023';
            doors.textContent = '3';
            ac.textContent = 'Yes';
            transmission.textContent = '6-Speed Automatic';
            fuel.textContent = 'Premium Unleaded';
            break;
        case 6:
            mainImage.src = "Image/p5.png";
            rate.textContent = '$ 200';
            model.textContent = 'LM 300H';
            mark.textContent = 'Lexus';
            year.textContent = '2023';
            doors.textContent = '3';
            ac.textContent = 'Yes';
            transmission.textContent = '8-Speed Automatic';
            fuel.textContent = 'Premium Unleaded';
            break;
            

        default:
            break;
    }
}
