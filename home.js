$(function(){
	//Hide initial bits
    $(".sidenav").css('visibility', 'hidden')
    $(".calc-section-main .calc-section").hide()
	
	//Side and Main Navigation Click events
    $('.sidenav .age-calc, .mainnav .age-calc').on('click', showCalculateAgeSection);
    $('.sidenav .li-calc, .mainnav .li-calc').on('click', showCalculateSupplySection);
    $('.sidenav .gm-calc, .mainnav .gm-calc').on('click', showGeometricSection);
    $('.sidenav .temp-calc, .mainnav .temp-calc').on('click', showConvertTempSection);

});

function showCalculateAgeSection(birthYear, currentYear) {
    $(".sidenav").css('visibility', 'visible');
    $(".mainnav").hide();
	$(".calc-section-main .calc-section").hide();
	$(".calc-section-main .age-calc-body").show();
	$(".age-calc-body #birth-year").val("");
    //Clear the status/result message
	$(".age-calc-body .age-calc-result").html("");
	$(".age-calc-body .age-calc-result").attr("class", "alert age-calc-result");
}

function calculateAge(birthYear, currentYear) {
    //Check if birthYear is passed-in
    if (typeof birthYear == "undefined" || birthYear == null || isNaN(birthYear) || birthYear == "") {
        //try and get the value from UI
        birthYear = $(".age-calc-body #birth-year").val();
        
        if (typeof birthYear == "undefined" || birthYear == null || isNaN(birthYear) || birthYear == "") {
            //birtYear not found. Exit function after showing error message
            $(".age-calc-body .age-calc-result").html("Please enter a valid Year of Birth and try again");
            $(".age-calc-body .age-calc-result").attr("class", "alert alert-danger age-calc-result");
            return;
        }
    }


    //Get Current year if not passed-in
    if (typeof currentYear == "undefined" || currentYear == null || currentYear == "") {
        currentYear = (new Date).getFullYear();
    }

    //Calculate Age
    var age = parseInt(currentYear) - parseInt(birthYear);
    //If your month of birth is not yet passed in this year then deduct one
   
    var probableAge = age - 1;
    $(".age-calc-body .age-calc-result").html("You are either " + probableAge + " or " + age);
    $(".age-calc-body .age-calc-result").attr("class", "alert alert-success age-calc-result");
}

//**********************************************
//  Calculate LifeTime Supply
//**********************************************
function showCalculateSupplySection(age, amountPerDay) {
	$(".sidenav").css('visibility', 'visible');
    $(".mainnav").hide();
	$(".calc-section-main .calc-section").hide();
	$(".calc-section-main .li-calc-body").show();
	$(".li-calc-body #person-age").val("");
	$(".li-calc-body #consume-per-day").val("");
    //Clear the status/result message
	$(".li-calc-body .li-calc-result").html("");
	$(".li-calc-body .li-calc-result").attr("class", "alert li-calc-result");
}

function calculateSupply(personAge, amountPerDay) {
    //Check if Age is passed-in
    if (typeof personAge == "undefined" || personAge == null || isNaN(personAge) || personAge == "") {
        //try and get the value from UI
        personAge = $(".li-calc-body #person-age").val();
        if (typeof personAge == "undefined" || personAge == null || isNaN(personAge) || personAge == "") {
            //personAge not found. Exit function after showing error message
            $(".li-calc-body .li-calc-result").html("Please enter a valid Age and try again");
            $(".li-calc-body .li-calc-result").attr("class", "alert alert-danger li-calc-result");
            return;
        }
    }

    //Check if amountPerDay is passed-in
    if (typeof amountPerDay == "undefined" || amountPerDay == null || isNaN(amountPerDay) || amountPerDay == "") {
        //try and get the value from UI
        amountPerDay = $(".li-calc-body #consume-per-day").val();
        if (typeof amountPerDay == "undefined" || amountPerDay == null || isNaN(amountPerDay) || amountPerDay == "") {
            //amountPerDay not found. Exit function after showing error message
            $(".li-calc-body .li-calc-result").html("Please enter a valid Consumption rate and try again");
            $(".li-calc-body .li-calc-result").attr("class", "alert alert-danger li-calc-result");
            return;
        }
    }

    var maxAge = 100;   //Person's Max Age
    var lifeTimeSupply = (parseFloat(amountPerDay) * 365) * (maxAge - parseFloat(personAge));
    $(".li-calc-body .li-calc-result").html("You will need " + lifeTimeSupply + " to last you until the ripe old age of 100");
    $(".li-calc-body .li-calc-result").attr("class", "alert alert-success li-calc-result");
}


//**********************************************
//  Calculate Circumference and Area
//**********************************************
function showGeometricSection() {
	$(".sidenav").css('visibility', 'visible');
    $(".mainnav").hide();
	$(".calc-section-main .calc-section").hide();
    $(".calc-section-main .gm-calc-body").show();
}

function showCircumferenceSection() {
    $(".gm-calc-body .calc-circumference").show();
    $(".gm-calc-body .calc-radius").hide();
    $(".gm-calc-body #radius-circumference").val("");
    $(".gm-calc-body #circumference").removeClass("option-unselected");
    $(".gm-calc-body #area").addClass("option-unselected");
    //Clear the status/result message
    $(".gm-calc-body .gm-calc-circumference-result").html("");
    $(".gm-calc-body .gm-calc-circumference-result").attr("class", "alert gm-calc-circumference-result");
}

function showAreaSection() {
    $(".gm-calc-body .calc-circumference").hide();
    $(".gm-calc-body .calc-radius").show();
    $(".gm-calc-body #radius-area").val("");
    $(".gm-calc-body #circumference").addClass("option-unselected");
    $(".gm-calc-body #area").removeClass("option-unselected");
    //Clear the status/result message
    $(".gm-calc-body .gm-calc-area-result").html("");
    $(".gm-calc-body .gm-calc-area-result").attr("class", "alert gm-calc-area-result");
}

function calcCircumference(radius) {
    //Formula: Circumference of a circle = 2 * 3.14159 * r
    //Check if radius is passed in
    if (typeof radius == "undefined" || radius == null || isNaN(radius) || radius == "") {
        radius = $(".gm-calc-body #radius-circumference").val();
        //If no value found on UI exit function
        if (typeof radius == "undefined" || radius == null || isNaN(radius) || radius == "") {
            $(".gm-calc-body .gm-calc-circumference-result").html("Please enter a valid Radius and try again");
            $(".gm-calc-body .gm-calc-circumference-result").attr("class", "alert alert-danger gm-calc-circumference-result");
            return;
        }
    }
    var circumference = (2 * 3.14159 * parseFloat(radius)).toFixed(2);
    $(".gm-calc-body .gm-calc-circumference-result").html("The circumference is " + circumference);
    $(".gm-calc-body .gm-calc-circumference-result").attr("class", "alert alert-success gm-calc-circumference-result");
}

function calcArea(radius) {
    //Formula: Area of a circle = 3.14159 * r * r
    //Check if radius is passed in
    if (typeof radius == "undefined" || radius == null || isNaN(radius) || radius == "") {
        radius = $(".gm-calc-body #radius-area").val();
        //If no value found on UI exit function
        if (typeof radius == "undefined" || radius == null || isNaN(radius) || radius == "") {
            $(".gm-calc-body .gm-calc-area-result").html("Please enter a valid Radius and try again");
            $(".gm-calc-body .gm-calc-area-result").attr("class", "alert alert-danger gm-calc-area-result");
            return;
        }
    }
    var area = (3.14159 * parseFloat(radius) * parseFloat(radius)).toFixed(2);
    $(".gm-calc-body .gm-calc-area-result").html("The circumference is " + area);
    $(".gm-calc-body .gm-calc-area-result").attr("class", "alert alert-success gm-calc-area-result");
}

//**********************************************
//  Convert Celsius to Fahrenheit and Vice-Versa
//**********************************************
function showConvertTempSection() {
	$(".sidenav").css('visibility', 'visible');
    $(".mainnav").hide();
	$(".calc-section-main .calc-section").hide();
    $(".calc-section-main .temp-calc-body").show();
}

function showCelsiusSection() {
    $(".temp-calc-body .cels-fahren").show();
    $(".temp-calc-body .fahren-cels").hide();
    $(".temp-calc-body #temp-celsius").val("");
    $(".temp-calc-body #celsius").removeClass("option-unselected");
    $(".temp-calc-body #fahrenheit").addClass("option-unselected");
    //Clear the status/result message
    $(".temp-calc-body .temp-celcius-result").html("");
    $(".temp-calc-body .temp-celcius-result").attr("class", "alert temp-celcius-result");
}

function showFahrenheitSection() {
    $(".temp-calc-body .cels-fahren").hide();
    $(".temp-calc-body .fahren-cels").show();
    $(".temp-calc-body #temp-fahrenheit").val("");
    $(".temp-calc-body #celsius").addClass("option-unselected");
    $(".temp-calc-body #fahrenheit").removeClass("option-unselected");
    //Clear the status/result message
    $(".temp-calc-body .temp-fahrenheit-result").html("");
    $(".temp-calc-body .temp-fahrenheit-result").attr("class", "alert temp-fahrenheit-result");
}

function celsiusToFahrenheit(celsius) {
    if (typeof celsius == "undefined" || celsius == null || isNaN(celsius) || celsius == "") {
        celsius = $(".temp-calc-body #temp-celsius").val();
        //If no value found on UI exit function
        if (typeof celsius == "undefined" || celsius == null || isNaN(celsius) || celsius == "") {
            $(".temp-calc-body .temp-celcius-result").html("Please enter a valid Celsius and try again");
            $(".temp-calc-body .temp-celcius-result").attr("class", "alert alert-danger temp-celcius-result");
            return;
        }
    }
    var celsiusToFahrenheit = (((parseFloat(celsius) * 9) / 5) + 32).toFixed(0);
    $(".temp-calc-body .temp-celcius-result").html("Celsius to Fahrenheit: " + celsius + "<sup>o</sup>C is " + celsiusToFahrenheit + "<sup>o</sup>F");
    $(".temp-calc-body .temp-celcius-result").attr("class", "alert alert-success temp-celcius-result");
}

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit == "undefined" || fahrenheit == null || isNaN(fahrenheit) || fahrenheit == "") {
        fahrenheit = $(".temp-calc-body #temp-fahrenheit").val();
        //If no value found on UI exit function
        if (typeof fahrenheit == "undefined" || fahrenheit == null || isNaN(fahrenheit) || fahrenheit == "") {
            $(".temp-calc-body .temp-fahrenheit-result").html("Please enter a valid Fahrenheit and try again");
            $(".temp-calc-body .temp-fahrenheit-result").attr("class", "alert alert-danger temp-fahrenheit-result");
            return;
        }
    }
    var FahrenheitToCelsius = ((((fahrenheit - 32)) * 5) / 9).toFixed(2);
    $(".temp-calc-body .temp-fahrenheit-result").html("Fahrenheit to Celsius: " + fahrenheit + "<sup>o</sup>F is " + FahrenheitToCelsius + "<sup>o</sup>C");
    $(".temp-calc-body .temp-fahrenheit-result").attr("class", "alert alert-success temp-fahrenheit-result");
}