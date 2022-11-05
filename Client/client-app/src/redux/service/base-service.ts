
import http from './http-common';
import {TEntity} from '../../models/tEntity';

export class BaseService<T extends TEntity> {
    serviceUrl = ''
    constructor(url: string){
        this.serviceUrl = url
    }
    getAll() {
        return http.get<Array<T>>(this.serviceUrl);
    }
    get(id: string) {
        return http.get<T>(`${this.serviceUrl}/GetById/${id}`);
    }
    create(data: T) {
        return http.post<T>(`${this.serviceUrl}/create`, data);
    }
    update(data: T) {
        return http.post<any>(`${this.serviceUrl}/update`, data);
    }
    delete(id: any) {
        return http.delete<any>(`${this.serviceUrl}/delete/${id}`);
    }

}
