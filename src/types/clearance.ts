export type ClearanceStatus =
    | 'Customs accepted'
    | 'Customs rejected'
    | 'Customs pending'
    | 'Customs cleared'
    | 'Customs released'
    | 'Customs hold'
    | 'Customs in transit'
    | 'Customs delivered';
export type ClearanceMOT = 'Person' | 'Truck' | 'Ship' | 'Air' | 'Train' | 'Other';

export type Clearance = {
    EntryNo: string;
    CargoControlNo: string;
    RefNo: string;
    BOLNo: string;
    Status: ClearanceStatus;
    CurrentMilestone: string;
    Date: string;
    Carrier: string;
    MOT: ClearanceMOT;
    Docs: number;
    Destination: string;
    ClientNo: string;
};
