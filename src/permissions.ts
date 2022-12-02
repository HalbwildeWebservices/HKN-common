export enum EPermission {
    READ_USER = 'read_user',
    UPDATE_USER = 'update_user',
    DELETE_USER = 'delete_user',
    ADD_USER = 'add_user',
    ADD_EVENT = 'add_event',
    UPDATE_EVENT = 'update_event',
    DELETE_EVENT = 'delete_event',
    ADD_PERMISSION = 'add_permission',
    DELETE_PERMISSION = 'delete_permission',
    DEFAULT = 'default',
}

export interface IPermission {
    permissionId: string,
    name: string,
}

export interface IPermissionResponse {
    permissions: IPermission[];
}

