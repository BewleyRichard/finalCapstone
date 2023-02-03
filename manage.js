// Compulsory Task 1.

class Employee {
    // Add name and sales target for all employees.
    constructor(name, salesTarget){
        this.name = name;
        this.salesTarget = salesTarget;
    }
}

class Salaried extends Employee {
    // Import name and salesTarget from parent class. Add monthly salary.
    constructor(name,salesTarget, monthlySalary){
        super(name,salesTarget);
        this.monthlySalary = monthlySalary;
        // Set employee.type as Salaried.
        this.type = "Salaried";
    }

}

class Hourly extends Employee {
    // Import name and salesTarget from parent class. Add hourly rate.
    constructor(name, salesTarget, hourlyRate){
        super(name, salesTarget);
        this.hourlyRate=hourlyRate;
        // Set employee.type as Hourly.
        this.type = "Hourly";
    }

}

class Hybrid extends Employee {
    /* Import name and salesTarget from parent class. 
    Add base salary, hourly rate and number of hours contracted. */
    constructor(name,salesTarget,monthlySalary,hourlyRate,hoursContracted){
        super(name,salesTarget);
        this.monthlySalary = monthlySalary;
        this.hoursContracted = hoursContracted;
        this.hourlyRate = hourlyRate;
        // Set employee.type as Hybrid
        this.type = "Hybrid";
    }

}

function calculatePayout(employee, monthlySales, hoursWorked){

    let pay = 0;
    let formula = "";
    let additionalHours = 0;
    

    // If statements apply different code for different employee types.
    if(employee.type==="Salaried"){
        // If salaried employee exceeds sales target, multiply monthly salary by 1.1 (10% increase).
        if (monthlySales > employee.salesTarget){
            pay = employee.monthlySalary * 1.1;
            formula = "Base salary x 1.1"
        }

        // If employee does not meet sales target, pay base salary.
        else {
        pay = employee.monthlySalary;
        formula = "Base salary"
        }
        
    }


    if(employee.type==="Hourly"){
        // If hourly employee exceeds sales target, multiply hours worked by rate * 1.5.
        if (monthlySales > employee.salesTarget){
            pay = (employee.hourlyRate * 1.5 * hoursWorked);
            formula = "Hours worked x hourly rate x 1.5"
        }

        // If employee does not meet sales target, multiply hours worked by hourly rate.
        else {
        pay = (employee.hourlyRate * hoursWorked);
        formula = "Hours worked x hourly rate"
        }
    }


    if(employee.type==="Hybrid"){

        // Calculate number of hours above contract.
        if(hoursWorked > employee.hoursContracted){
            additionalHours = hoursWorked - employee.hoursContracted;
        }

        else additionalHours = 0

        /* If hybrid employee exceeds sales target, multiply hourly rate by 1.2 
        and apply to any additional hours on top of fixed monthly salary. */
        if (monthlySales > employee.salesTarget){
            pay =  (employee.monthlySalary + (employee.hourlyRate * 1.2 * additionalHours));
            formula = "Fixed salary + (additional hours x 1.2 x hourly rate)"
        }
        // If sales target not met, use normal hourly rate for any additional hours on top of fixed monthly salary.
        else {
        pay =  (employee.monthlySalary + (employee.hourlyRate  * additionalHours));
        formula = "Fixed salary + (additional hours x hourly rate)"
        }
    }

    
    // Output summary of employee information, sales performance, and pay including currency.
    return console.log(
        `Employee Name: ${employee.name} 
Employee Type: ${employee.type} 
Sales: ${monthlySales} 
Sales Target: ${employee.salesTarget} 
Hours Worked: ${hoursWorked} 
Hours Contracted (if applicable): ${employee.hoursContracted}
Additional Hours (if applicable): ${additionalHours} 
Hourly Rate (if applicable): £${employee.hourlyRate}/hour 
Payout: £${pay.toFixed(2)} 
Pay Calculation Formula: ${formula}`
        )

}

// Two instances of each kind of employee. 
let employee1 = new Salaried("Rupert", 55, 3000);
let employee2 = new Salaried("Yogi", 55, 2800);
let employee3 = new Hourly("Iorek", 70, 55);
let employee4 = new Hourly("Winnie", 65, 57);
let employee5 = new Hybrid("Paddington", 55, 1500, 43, 37);
let employee6 = new Hybrid("Baloo", 55, 1600, 45, 37);

// Display to console. 
calculatePayout(employee1, 40, 37.5)
calculatePayout(employee2, 77, 37.5)
calculatePayout(employee3,108, 77.5)
calculatePayout(employee4, 2, 55)
calculatePayout(employee5, 56, 76.5)
calculatePayout(employee6, 35, 42)

/* References. 
I utilised the following HyperionDev handouts:
"Capstone Project III - OOP"
"Introduction to OOP II - Classes"
"Introduction to OOP I: Objects and 'this" and lectures with 
the same titles viewed on 04/01/2023, 03/01/2023 and 29/12/2023 
to aid me in this task. */