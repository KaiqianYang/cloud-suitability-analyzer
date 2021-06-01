import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {UriConstants} from 'src/app/constants/uri-constants';
import {Score} from "../model/score";
import {RunSloc} from "../model/runsloc";
import {Scores} from "../model/scores";
import {LanguagesByCodeLines} from "../model/languagesbycodelines";
import {ApisByScore} from "../model/apisbyscore";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExecutiveSummaryService {
  constructor(private http: HttpClient){
  }

  getApplicationScoresByRun(runid: number): Observable<Scores>  {
    const url =
      UriConstants.RUNS_URI +
      runid +
      '/summary/application_scores?rangeMin=0&rangeMax=10&reverse=false';
    return this.http.get<Scores>(url);
  }

  getSummaryFindingsByRun(runid: number): Observable<RunSloc>  {
    const url = UriConstants.RUNS_URI + runid + '/summary/run_slocs';
    return this.http.get<RunSloc>(url);
  }

  getLanguagesByLoc(runid: number): Observable<LanguagesByCodeLines[]> {
    const url = UriConstants.RUNS_URI + runid + '/summary/top_languages_by_codelines';
    return this.http.get<LanguagesByCodeLines[]>(url);
  }

  /* /api/runs/1/summary/top_apis_by_count */
  getApisByScore(runid: number): Observable<ApisByScore[]>{
    const url = UriConstants.RUNS_URI + + runid + '/summary/top_apis_by_score';
    return this.http.get<ApisByScore[]>(url);
  }

}

