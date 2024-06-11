export class AccReq {
  id: number = 0;
  status:
    | ' New'
    | ' PreAlloted'
    | ' Active'
    | ' Closed'
    | ' Cancelled'
    | ' Review'
    | undefined;
  statusId: number = 1;
  utsavId: number = 1;
  bookingRefNo: string = ' String';
  firstName: string = 'String ';
  middleName: string = ' String';
  lastName: string = ' String';
  gender: ' M' | ' F' | undefined;
  age: number = 0;
  fullName: string = 'String ';
  primaryMobile: string = ' String';
  isPriMobWhatsApp: number = 99999999;
  isBkpMobWhatsApp: number = 9999999;
  isLocalPhoneWhatsApp: number = 88888889;
  gentsCount: number = 0;
  ladiesCount: number = 0;
  childrenCount: number = 0;
  transportMode: string = 'String ';
  isKeepingVehicle: number = 1;
  expCheckInTime: string = ' String';
  expCheckOutTime: string = 'String ';
  createdAt: string = ' String';
  modifiedAt: string = ' String';
}
