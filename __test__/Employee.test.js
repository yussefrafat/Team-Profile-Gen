// dependencies
const Employee = require('../lib/employee');


//initalize testing 

describe("Employee", () => {
    describe("Initialization", () => {
      // object should return and empty string
      it("should initiate an object", () => {
        const obj = new Employee();
        // We expect 'result' to equal object 
        expect(typeof(obj)).toEqual("object");
      });
    });

    //create test for name object
    describe("Name", () => {
      it("should create new name", () => {
        const obj = new Employee("Yussef");
        expect(obj.name).toEqual("Yussef");
      });
    });
    //create test for id object
    describe("Id", () => {
      it("should create new id", () => {
        const obj = new Employee("Yussef",12);
        expect(obj.id).toEqual(12);
      });
    });
    //create test for email object
    describe("Email", () => {
      it("should create new Email", () => {
        const obj = new Employee("Yussef",12, "yussefrafat5908@gmail.com");
        expect(obj.email).toEqual("yussefrafat5908@gmail.com");
      });
    });
    //create test for getName method
    describe("getName", () => {
      it("can return name by getName method", () => {
        const obj = new Employee("Yussef");
        expect(obj.getName()).toEqual("Yussef");
      });
    });
    //create test for getId method
    describe("getId", () => {
      it("can return id by getId method", () => {
        const obj = new Employee("Yussef", 12);
        expect(obj.getId()).toEqual(12);
      });
    });
    //create test for getEmail method
    describe("getEmail", () => {
      it("can return email by getEmail method", () => {
        const obj = new Employee("Yussef", 12, "yussefrafat5908@gmail.com");
        expect(obj.getEmail()).toEqual("billy.email@email");
      });
    });
    //create test for getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Employee";//must define role
        const obj = new Employee("Yussef", 12, "yussefrafat5908@gmail.com");
        expect(obj.getRole()).toEqual(role);
      });
    });
});