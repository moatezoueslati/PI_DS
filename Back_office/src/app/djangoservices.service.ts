import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './models/ApiResponse';
import { Observable } from 'rxjs';
import { rvm } from './models/rvm';
import { bottle } from './models/bottle';
import { recompense } from './models/recompense';

@Injectable({
  providedIn: 'root'
})
export class DjangoservicesService {

  constructor(private httpClient:HttpClient) { }
  GetAllRVM():Observable<any>{
    return  this.httpClient.get<ApiResponse>("http://localhost:8000/api/rvm");
  }



  GetAllUsers():Observable<any>{
    return  this.httpClient.get<ApiResponse>("http://localhost:8000/api/user");
  }



  AddRVM(c:rvm):Observable<any>{

    return this.httpClient.post<ApiResponse>("http://localhost:8000/api/rvm",c);

  }
  DeleteRVM(id:Number):Observable<any>{
    return this.httpClient.delete("http://localhost:8000/api/rvm/"+id);
  }
  GetRVMById(id:number):Observable<any>{
    return this.httpClient.get<ApiResponse>("http://localhost:8000/api/rvm/"+id)
  }

  UpdateRVM(id:number,c:rvm):Observable<any>{
    return this.httpClient.patch<ApiResponse>("http://localhost:8000/api/rvm/"+id,c);
  }
  GetAllBottles():Observable<any>{
    return  this.httpClient.get<ApiResponse>("http://localhost:8000/api/bouteille");
  }
  GetAllRecompenses():Observable<any>{
    return  this.httpClient.get<ApiResponse>("http://localhost:8000/api/recompense");
  }
  AddBottle(c:bottle):Observable<any>{

    return this.httpClient.post<ApiResponse>("http://localhost:8000/api/bouteille",c);

  }

  DeleteBottles(id:Number):Observable<any>{
    return this.httpClient.delete("http://localhost:8000/api/bouteille/"+id);
  }
  GetBottlesyId(id:number):Observable<any>{
    return this.httpClient.get<ApiResponse>("http://localhost:8000/api/bouteille/"+id)
  }

  UpdateBottles(id:number,c:bottle):Observable<any>{
    return this.httpClient.patch<ApiResponse>("http://localhost:8000/api/bouteille/"+id,c);
  }


  AddRecompense(c:recompense):Observable<any>{

    return this.httpClient.post<ApiResponse>("http://localhost:8000/api/recompense",c);

  }

  Deleterecompense(id:Number):Observable<any>{
    return this.httpClient.delete("http://localhost:8000/api/recompense/"+id);
  }
  GetrecompenseyId(id:number):Observable<any>{
    return this.httpClient.get<ApiResponse>("http://localhost:8000/api/recompense/"+id)
  }

  Updaterecompense(id:number,c:recompense):Observable<any>{
    return this.httpClient.patch<ApiResponse>("http://localhost:8000/api/recompense/"+id,c);
  }

  GetAdminbyUsername(id:string):Observable<any>{
    return this.httpClient.get<ApiResponse>("http://localhost:8000/api/user/"+id)
  }


  loginface(path1:string,path2:string):Observable<any>{
    const body = { path1: path1, path2: path2 };
    return this.httpClient.post<ApiResponse>("http://localhost:8000/api/compare-faces/",body)
  }

 }