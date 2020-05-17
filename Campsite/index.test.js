//DO NOT MODIFY THIS FILE
// load and execute the code from index.js in this scope
const fs = require('fs')
let code = fs.readFileSync('./index.js', 'utf8')
eval(code)

let campgrounds = [
  { number: 1, view: 'ocean', partySize: 8, isReserved: false },
  { number: 5, view: 'ocean', partySize: 4, isReserved: false },
  { number: 12, view: 'ocean', partySize: 4, isReserved: true },
  { number: 18, view: 'forest', partySize: 4, isReserved: false },
  { number: 23, view: 'forest', partySize: 4, isReserved: true }
];
let fullCampgroundData = JSON.parse(fs.readFileSync('campgrounds.json'))
let emptyData = []


// It should return the site numbers of sites that match the view and have at least that capacity
let allViews = ["forest", "ocean", "desert", "mountain", "tundra"]
let sites = (c,v,t) => c.reduce((m, s) => !s.isReserved && s.view === v && s.partySize >= t ? m.concat(s.number) : m, [])

for (let view of allViews.slice(0,3)) {
  for (let number of [4,8,12]) {
    test(findMyCampsites(campgrounds, view, number), sites(campgrounds, view, number), `(campgrounds, "${view}", ${number})`)
  }
}

for (let view of allViews) {
  for (let number of [4,8,12]) {
    test(findMyCampsites(fullCampgroundData, view, number), sites(fullCampgroundData, view, number), `(full data, "${view}", ${number})`)
  }
}

test(findMyCampsites(emptyData, 'ocean', 4), sites(emptyData, 'ocean', 4), 'empty list')

function formatExpectation(actual, expected, args) {
   return `Called with ${args}, expected: ${JSON.stringify(expected)}, got: ${JSON.stringify(actual)}`
}

function arrayEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length
    && a.every((n,i) =>
      Array.isArray(n) ? arrayEqual(n, b[i]) : n == b[i]
    )
}

function test(actual, expected, args) {
  if (arrayEqual(actual, expected)) {
    console.log(`✅\tPassed.`, formatExpectation(actual, expected, args))
  } else {
    console.log('❌\tFailed.', formatExpectation(actual, expected, args))
  }
}
