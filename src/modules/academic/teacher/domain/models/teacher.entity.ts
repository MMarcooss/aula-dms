export class Teacher {
  id: string;
  name: string;
  email: string;
  department: string;
  birthDate: Date;
  nationality: string;
  phone: string;
  maritalStatus: string;
  
  constructor(id: string, name: string, email: string, department: string, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.department = department;
    this.birthDate = new Date();
    this.nationality = '';
    this.phone = '';
    this.maritalStatus = '';
    
  }
}