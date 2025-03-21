// Dates in JS

let currentDate = new Date();
console.log(currentDate); // output : 2025-03-21T09:58:01.201Z
 // 2025 => year
 // 03 => month march
 // 21 => date
 // 09 => hour
 // 58 => minute
 // 01 => second
 // 201 => millisecond
 // Z => timezone
 // UTC+5:30
 // IST
 // utc => universal time coordinate

 // by default the new date gives time in UTC - ISO format

 // if u r in india use +5:30
 // if u r in usa use -5:30

 let date1 = new Date().toDateString();
 console.log(date1); // fri mar 21 2025

 let date2 = new Date().toLocaleDateString();
 console.log(date2); // 21/03/2025

 let date3 = new Date().toLocaleString();
 console.log(date3); // 21/03/2025, 9:58:01

 let date4 = new Date().toString();
 console.log(date4); // Fri Mar 21 2025 09:58:01 GMT

 // to get time in your Time zone
 let date5 = new Date().toLocaleString('en-IN', {timeZone: 'Asia/K
    olkata'});
    console.log(date5); // 21/03/2025, 2:28:01
    

    // Parameters of Date
    // 1. year
    // 2. month
    // 3. date
    // 4. hour
    // 5. minute
    // 6. second
    // 7. millisecond
    // 8. timezone
    // 9. UTC
    // 10. ISO
    // 11. locale
    // 12. options
    
    // 13. locale options
    // 14. time zone options
    // 15. date options
    // 16. time options
    // 17. number options
    
