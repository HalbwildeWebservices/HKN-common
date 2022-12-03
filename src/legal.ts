export interface ILegal {
    legalId: string;
    privacyAcceptedAt: Date;
    privacyUpdateReq: boolean;
    termsAcceptedAt: Date;
    termsUpdateReq: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IAcceptLegal {
    acceptTerms: boolean;
    acceptPrivacy: boolean;
}