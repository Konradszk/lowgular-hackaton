import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {MarsColonistsModel} from "../models/mars-colonists.model";

@Injectable()
export class MarsColonistsInMemoryStorage{
  private readonly _marsColonistsSubject: BehaviorSubject<MarsColonistsModel[]> = new BehaviorSubject<MarsColonistsModel[]>([]);

  get(): Observable<MarsColonistsModel[]>{
    return this._marsColonistsSubject.asObservable();
  }

  set(marsColonists: MarsColonistsModel[]): Observable<void>{
    return of(this._marsColonistsSubject.next([...this._marsColonistsSubject.value, ...marsColonists])).pipe(map(() => void 0));
  }


}
