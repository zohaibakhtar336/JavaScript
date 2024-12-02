// Current Date and Time
let myDate = new Date();
console.log("Full Date and Time:", myDate.toString());
console.log("Date (Readable):", myDate.toDateString());
console.log("Locale Date and Time:", myDate.toLocaleString());
console.log("Type of myDate:", typeof myDate);

// Created Dates
let myCreatedDate1 = new Date(2024, 0, 23); // January 24, 2023
let myCreatedDate2 = new Date(2024, 0, 23, 5, 3); // January 23, 2024, 05:03:00
let myCreatedDate3 = new Date("2024-01-14"); // January 14, 2024
let myCreatedDate4 = new Date("01-14-2024"); // January 14, 2024
console.log("Custom Date 1:", myCreatedDate1.toLocaleString());
console.log("Custom Date 2:", myCreatedDate2.toLocaleString());
console.log("Custom Date 3:", myCreatedDate3.toLocaleString());
console.log("Custom Date 4:", myCreatedDate4.toLocaleString());

// Timestamp and Epoch Time
let myTimeStamp = Date.now();
console.log("Current Timestamp (ms since Jan 1, 1980):", myTimeStamp);
console.log("Custom Date Timestamp:", myCreatedDate3.getTime());
console.log("Current Timestamp in Seconds:", Math.floor(Date.now() / 1000));

// Extracting Date and Time Components
let newDate = new Date();
console.log("Month (1-12):", newDate.getMonth() + 1); // 0-indexed
console.log("Day of Week (0-Sunday to 6-Saturday):", newDate.getDay());
console.log("Date of Month:", newDate.getDate());
console.log("Year:", newDate.getFullYear());
console.log("Hours:", newDate.getHours());
console.log("Minutes:", newDate.getMinutes());
console.log("Seconds:", newDate.getSeconds());
console.log("Milliseconds:", newDate.getMilliseconds());

// Weekday Name
console.log("Weekday (Full):", newDate.toLocaleString('default', { weekday: "long" }));
console.log("Weekday (Short):", newDate.toLocaleString('default', { weekday: "short" }));

// Month Name
console.log("Month Name (Full):", newDate.toLocaleString('default', { month: "long" }));
console.log("Month Name (Short):", newDate.toLocaleString('default', { month: "short" }));

// Formatting Dates
console.log("Formatted Date:", newDate.toLocaleDateString('en-US'));
console.log("Formatted Time:", newDate.toLocaleTimeString('en-US'));
console.log("ISO String:", newDate.toISOString());
console.log("UTC String:", newDate.toUTCString());

// Adding/Subtracting Time
let addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
console.log("Date after 10 days:", addDays(newDate, 10).toLocaleString());
console.log("Date 10 days ago:", addDays(newDate, -10).toLocaleString());

// Comparing Dates
let date1 = new Date("2024-01-01");
let date2 = new Date("2023-12-25");
if (date1 > date2) {
    console.log(`${date1.toDateString()} is after ${date2.toDateString()}`);
} else if (date1 < date2) {
    console.log(`${date1.toDateString()} is before ${date2.toDateString()}`);
} else {
    console.log(`${date1.toDateString()} is the same as ${date2.toDateString()}`);
}

// Timezones
console.log("Locale Timezone Offset (minutes):", newDate.getTimezoneOffset());

// Time Difference
let diffMs = date1 - date2;
let diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("Difference in Days:", Math.round(diffDays));