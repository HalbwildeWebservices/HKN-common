export enum EPermission {
    READ_USER = 'read_user',
    UPDATE_USER = 'update_user',
    DELETE_USER = 'delete_user',
    ADD_USER = 'add_user',
    ADD_EVENT = 'add_event',
    UPDATE_EVENT = 'update_event',
    DELETE_EVENT = 'delete_event',
    READ_PERMISSION = 'read_permission',
    MANAGE_PERMISSION = 'manage_permission',
    DEFAULT = 'default',
}

export interface IPermission {
    permissionId: string,
    name: string,
}

export interface IPermissionResponse {
    permissions: IPermission[];
}

