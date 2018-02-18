/*
I like to go shooting. I made a few objects here including some of the
guns I take to various matches. After I spelled out the important information
about the guns in the object I created a simple else if statement to help me
determine which gun is best suited to the distance I will be shooting
*/

const longRange = {
  make: "Savage",
  model: "Model 11",
  caliber: ".308 Winchester",
  optics: true,
  opticsInfo: "Nightforce 3x9",
  maxEffDistance: 1000
}
// this is an object. place a comma after each paramater except the last

const midRange = {
  make: "Colt",
  model: "M4 Carbine 6920",
  caliber: "5.56x45mm NATO",
  optics: true,
  opticsInfo: "Aimpoint M68 CCO",
  maxEffDistance: 500
}

const shortRange = {
  make: "Sig Sauer",
  model: "TacOps Carry Model 1911",
  caliber: "45 ACP",
  optics: false,
  opticsInfo: null,
  maxEffDistance: 100
}
console.log(midRange.make) // prints "Colt"

// now lets make an else if statement to identify which option to use at a given distance.

const distance = 1000
if (distance > 500) {
  console.log(`At this distance you should use the ${longRange.make} ${longRange.model}.`)
  } else if (distance > 100) {
  console.log(`At this distance you should use the ${midRange.make} ${midRange.model}`.)
  }  else {
    console.log(`At this distance you should probably use the ${shortRange.make} ${shortRange.model}.`)
}
