export class Teacher {
  private readonly _id?: string;
  private _name: string;
  private _email: string;
  private _department: string;
  private _birthDate: Date;
  private _nationality: string;
  private _phone: string;
  private _maritalStatus: string;
  private readonly _createdAt?: Date;
  private readonly _updatedAt?: Date;

  private constructor(id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get id(): string | undefined {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get department(): string {
    return this._department;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  get nationality(): string {
    return this._nationality;
  }

  get phone(): string {
    return this._phone;
  }

  get maritalStatus(): string {
    return this._maritalStatus;
  }

  get createdAt(): Date | undefined {
    return this._createdAt;
  }

  get updatedAt(): Date | undefined {
    return this._updatedAt;
  }

  withName(name: string) {
    this._name = name;
    return this;
  }

  withEmail(email: string) {
    this._email = email;
    return this;
  }

  withDepartment(department: string) {
    this._department = department;
    return this;
  }

  withBirthDate(birthDate: Date) {
    this._birthDate = birthDate;
    return this;
  }

  withNationality(nationality: string) {
    this._nationality = nationality;
    return this;
  }

  withPhone(phone: string) {
    this._phone = phone;
    return this;
  }

  withMaritalStatus(maritalStatus: string) {
    this._maritalStatus = maritalStatus;
    return this;
  }

  static restore(props?: {
    id?: string;
    name: string;
    email: string;
    department: string;
    birthDate: Date;
    nationality: string;
    phone: string;
    maritalStatus: string;
    createdAt?: Date;
    updatedAt?: Date;
  }): Teacher | null {
    if (!props) return null;

    const teacher = new Teacher(props.id, props.createdAt, props.updatedAt);

    teacher._name = props.name;
    teacher._email = props.email;
    teacher._department = props.department;
    teacher._birthDate = props.birthDate;
    teacher._nationality = props.nationality;
    teacher._phone = props.phone;
    teacher._maritalStatus = props.maritalStatus;

    return teacher;
  }
}