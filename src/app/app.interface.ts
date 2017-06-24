export interface AllocationGridInterface {
    requestId: string;
    projectName: string;
    type: string;
    status: string;
    requestedSeats: number;
    preferredBay: string;
    leadershipApproval: string;
    comments: string;
    process: string;
}

export interface Res {
    statusCode: number;
    msg: string;
    results: any;
}
