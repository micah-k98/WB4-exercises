"use strict"

function getVehicleColor(vehicles, color)
{
    const vehicleBasedOnColor = [];

    for (let i = 0; i < vehicles.length; i++)
    {
        if (vehicles[i].color.toUpperCase() == color)
        {
            vehicleBasedOnColor.push(vehicles[i]);
        }
    }

    console.log(`Which vehicles are ${color}?`);
    for (let i =0; i < vehicleBasedOnColor.length; i++)
    {
        console.log(`  ${vehicleBasedOnColor[i].type}, license number: ${vehicleBasedOnColor[i].licenseNo}`);
    }
    console.log("--------------------------------------------------------");
}

function getRegistrationExpirationDate(vehicles)
{
    const vehicleWithExpiredRegistration = [];
    let currentTime = new Date();
    // currentTime = currentTime.toLocaleString();

    for (let i = 0; i < vehicles.length; i ++)
    {
        let expirationDate = vehicles[i].registrationExpires;

        if (expirationDate <= currentTime)
        {
            vehicleWithExpiredRegistration.push(vehicles[i]);
        }
    }

    console.log(`Which vehicles have registrations that are expired?`);
    for (let i = 0; i < vehicleWithExpiredRegistration.length; i ++)
    {
        console.log(`  ${vehicleWithExpiredRegistration[i].licenseNo}`);
    }
    console.log("--------------------------------------------------------");
}

function getVehicleCapacity(vehicles, capacity)
{
    const vehicleWithCapacityOf = [];

    for (let i = 0; i < vehicles.length; i++)
    {
        if (vehicles[i].capacity >= capacity)
        {
            vehicleWithCapacityOf.push(vehicles[i]);
        }
    }

    console.log(`Which vehicles that hold at least ${capacity} people?`);
    for (let i = 0; i < vehicleWithCapacityOf.length; i++)
    {
        console.log(`  ${vehicleWithCapacityOf[i].type}, license number: ${vehicleWithCapacityOf[i].licenseNo}`);
    }
    console.log("--------------------------------------------------------");
}

function getLicensePlate(vehicles, keyword)
{
    const withLicensePlateNumOf = [];

    for (let i = 0; i < vehicles.length; i++)
    {
        if (vehicles[i].licenseNo.indexOf(keyword) != -1)
        {
            withLicensePlateNumOf.push(vehicles[i]);
        }
    }

    console.log(`Which vehicles have license plates that end with ${keyword}?`);
    for (let i = 0; i < withLicensePlateNumOf.length; i++)
    {
        console.log(`  ${withLicensePlateNumOf[i].type}, license number: ${withLicensePlateNumOf[i].licenseNo}`);
    }
    console.log("--------------------------------------------------------");
}

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    },
    {
        color: "White",
        type: "SUV",
        registrationState: "AZ",
        licenseNo: "222-MIC",
        registrationExpires: new Date("6-30-2024"),
        capacity: 5
        }
];

getVehicleColor(vehicles, "RED") // Which vehicles are RED?
getRegistrationExpirationDate(vehicles); // Which vehicles have registrations that are expired?
getVehicleCapacity(vehicles, 6) // Which vehicles that hold at least 6 people?
getLicensePlate(vehicles, "222") // Which vehicles have license plates that end with "222"?

