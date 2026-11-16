let day = 1;

let message = "Today's date is ";

switch (day) {
    case 1:
        message += "Sunday";
        break;
    case 2:
        message += "Monday";
        break;
    case 3:
        message += "Tuesday";
        break;
    case 4:
        message += "Wednesday";
        break;
    case 5:
        message += "Thursday";
        break;
    case 6:
        message += "Friday";
        break;
    case 7:
        message += "Saturday";
        break;
    default:
        message += "an invalid day";
}