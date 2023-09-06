/* Mercedes-Benz G-Class Specifications 400d AMG Line (Diesel) 2.55 Cr*
src = https://www.cardekho.com/mercedes-benz/g-class/specs  */

const carDatasheet = {
    car: [
        {
            make: "Mercedes-Benz",
            model: "G-class",
            engineType: "400d",
            trimLevel: "AMG Line",
        },
    ],
    engineAndTransmission: [
        {
            title: "Engine Type",
            cylinderArrangement: "In-line",
            internalDesignation: "OM656",
            cylinders: [
                {
                    cylinderCount: 6,
                    valvesCylnder: 4,
                    fuelSystem: [
                        {
                            ecologicalFoot: [
                                {
                                    fuelType: "Diesel",
                                    emmisionCompliance: [
                                        {
                                            typeEmission: "BS VI 2.0",

                                            emissionComplianceDependOn: [
                                                {
                                                    drivingBehavior: true,
                                                    vehicleEfficiency: true,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: "Engine Power",
            displacementcc: 2925,
            maxPower: "325.86 bhp @3600-4200rpm",
            maxTorque: "700 Nm @1200-3200 rpm",
        },
        {
            title: "Transmission",
            transmissionType: "Automatic",
            driveType: "AWD - All Wheel Drive",
        },
    ],
    carPerformace: [
        {
            topSpeed: "210 kmph",
            acceleration: 6.4,
            zeroToHundred: 6.4,
        },
    ],
    carCapacity: [
        {
            seating: 5,
            groundClearance: 241,
            Doors: 5,
        },
    ],

    comfortConvenience: [
        {
            powerSteering: true,
            powerWindows: [
                {
                    front: true,
                    rear: true,
                },
            ],
            climate: [
                {
                    airConditioning: true,
                    heater: true,
                    automaticClimateControl: true,
                    airQualityControl: true,
                },
            ],
            additionalFeature: [
                {
                    firstAdditional: "Burmester surround sound system",
                    secondAdditional: "Widescreen cockpit",
                },
            ],
        },
    ],
};

console.log(carDatasheet.engineAndTransmission);

console.log(carDatasheet.carPerformace);

console.log(carDatasheet.carCapacity);

console.log(carDatasheet.comfortConvenience[0].powerSteering);

console.log(carDatasheet.comfortConvenience.powerWindows[1]);

console.log(carDatasheet.engineAndTransmission[0].cylinders[0].fuelSystem[0].ecologicalFoot[0].emmisionCompliance[0].emissionComplianceDependOn[0]);
