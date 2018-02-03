export class Authorization {
    authorized: boolean;
    inProgress?: boolean;
    id?: string;
    error?: string;
    message?: string;

    constructor(authorized: boolean, moreFields: any) {
        Object.assign(this, moreFields);
        this.authorized = authorized;
    }
}
