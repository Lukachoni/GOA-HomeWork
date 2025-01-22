function getWeatherType(weatherNumber) {
    let weatherType;
    switch(weatherNumber) {
        case 1:
            weatherType = "მზიანი";
            break;
        case 2:
            weatherType = "წვიმიანი";
            break;
        case 3:
            weatherType = "მოღრუბლული";
            break;
        case 4:
            weatherType = "ქარიანი";
            break;
        default:
            weatherType = "არ არის დადგენილი";
    }
    return weatherType;
}

console.log(getWeatherType(2)); 
