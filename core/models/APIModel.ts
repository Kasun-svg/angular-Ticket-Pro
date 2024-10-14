export interface APIResponse {
    message: string;
    result: boolean;
    data: any;
}

export class Department {
    
  deptId: number;
  deptName: string;
  deptHeadEmpId: number;
  deptHeadNeme: string;
  createdDate:  Date;
  constructor () {
    this.createdDate = new Date ();
    this.deptId =0;
    this.deptName = '';
    this.deptHeadEmpId = 0;
    this.deptHeadNeme = '';
    
  }
}

export class LoginModel {
    
  password: string;
  emailId: string;
 
  constructor () {
    this.password = '';
    this.emailId ='';
   
  }
}

export class EmployeeModel {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  deptName: string;
  gender: string;
  role: string;
  constructor() {
    this.emailId= '';
    this.contactNo= '';
    this.deptId= 0;
    this.employeeId=0;
    this.deptName='';
    this.employeeName='';
    this.gender='';
    this.password='';
    this.role='';
  }
}

export class NewTicket {
  ticketId: number;
  ticketNo: string;
  employeeId: number;
  createdDate: Date | undefined;
  expectedEndDate: Date;
  severity: string;
  deptId: number;
  completedDate: string | undefined;
  assignedTo: number;
  state: string;
  requestDetails: string;
  constructor() {
    this.assignedTo=0;
   
   this.deptId=0;
   this.employeeId=0;
   this.expectedEndDate=new Date;
   this.requestDetails= '';
   this.severity = '';
   this.state= '';
   this.ticketId=0;
   this.ticketNo='';
  }
}
