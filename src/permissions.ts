export enum EPermission {
    READ_USER = 'read_user',
    UPDATE_USER = 'update_user',
    DELETE_USER = 'delete_user',
    ADD_USER = 'add_user',
    ADD_CONVENTION = 'add_convention',
    UPDATE_CONVENTION = 'update_convention',
    DELETE_CONVENTION = 'delete_convention',
    DEFAULT = 'default',
}

export interface IPermission {
    permissionId: string,
    name: string,
}

export interface IPermissionResponse {
    permissions: string[];
}

