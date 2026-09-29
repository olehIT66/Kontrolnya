function TriangleArea(base = 7, height = 3) {
    const area = 0.5 * base * height;
    console.log
    return area;
}

console.log
TriangleArea(3, 6);
TriangleArea();



function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this["max tonnage"] = maxTonnage;
    this.brand = brand;
    this["country of registration"] = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function(name, yearsOfExperience, hasFamily) {
    this.captain = {
        name: name,
        "years of experience": yearsOfExperience,
        hasFamily: hasFamily
    };
    return this.captain;
};

const myBoat = new Boat("Blue", 45.5, 120, "Yamaha", "Ukraine");
myBoat.AssignCaptain("Jack Sparrow", 20, false);
console.log



class SimpleCircle {
    constructor(majorRadius) {
        this._majorRadius = Math.round(majorRadius);
    }


    set majorRadius(value) {
        this._majorRadius = Math.round(value);
    }

    get majorRadius() {
        return this._majorRadius;
    }
}

class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = Math.round(minorRadius);
    }

    static calculateArea(ellipse) {
        const a = ellipse.majorRadius;
        const b = ellipse.minorRadius;
        return Math.PI * a * b;
    }
}


const circle = new SimpleCircle(10);
console.log

circle.majorRadius = 15; 
console.log

const ellipse = new SimpleEllipse(8, 5);
console.log
console.log, SimpleEllipse.calculateArea(ellipse));


function SubGenerator(baseNumber) {
    return function(value) {
        return value - baseNumber;
    };
}

const subFive = SubGenerator(5);
const subTen = SubGenerator(10);

console.log
console.log