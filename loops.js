// do ... while and while loops

let numOfCustomers = 2;

while (numOfCustomers > 0) {
    console.log(`WHILE: customers: ${numOfCustomers} \nHow may I help you? \n---`);
// help the customer...
    numOfCustomers = numOfCustomers - 1;
}
// versus:
do {
    console.log(`DO WHILE: customers: ${numOfCustomers} \nHow may I help you? \n---`);
// help the customer...
    numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);


let i = 0;
// a `while..true` loop would run forever, right?
while (true) {
// keep the loop going?
    if (i <= 9) {
        console.log(`WHILE TRUE: ${i}`);
        i = i + 1;
    }
// time to stop the loop!
    else {
        break;
    }
    // console.log('I\'m infinite'); // if no else with break
}
