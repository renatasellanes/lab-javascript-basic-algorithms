// Iteration 1: Names and Input
//

const hacker1 = 'Renata Sellanes'
const hacker2 = 'Felipe Franco'
console.log (`The driver's name is ${hacker1}`)
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else if ( hacker2.length > hacker1.length ) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else ( hacker2.length === hacker1.length ) {
    console.log (`Wow, you both have equally long names, it has ${hacker2.length} characters`)
}

// Iteration 3: Loops

if ( hacker1.localeCompare(hacker2) === -1) {
    console.log ("The driver's name goes first.") }

    else if (hacker1.localeCompare(hacker2) === 1) {
    console.log ("Yo, the navigator goes first definitely")
}

else (hacker1.localeCompare(hacker2) === 0) {
    console.log ("What?! You both have the same name?")
}
