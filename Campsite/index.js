// the same data subset as before - no need to modify it
let campgrounds = [
  { number: 1, view: 'ocean', partySize: 8, isReserved: false },
  { number: 5, view: 'ocean', partySize: 4, isReserved: false },
  { number: 12, view: 'ocean', partySize: 4, isReserved: true },
  { number: 18, view: 'forest', partySize: 4, isReserved: false },
  { number: 23, view: 'forest', partySize: 4, isReserved: true }
]

// Prompt: write function findMyCampsites
function findMyCampsites(campground, funcView, funcPartySize) {
  let matchingSites = [];
  for (let i = 0; i < campground.length;i++){
    if (campground[i].isReserved === false && campground[i].partySize >= funcPartySize && campground[i].view == funcView) {
      matchingSites.push(campground[i].number);
    }
  }
  return matchingSites;
};

// This is to run the tests. You can ignore it but don't delete it!
require('./index.test.js'); (void 0);
