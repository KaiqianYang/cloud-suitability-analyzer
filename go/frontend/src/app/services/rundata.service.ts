import { Injectable } from '@angular/core';
import {UriConstants} from "../constants/uri-constants";
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {ApiDetailedUsage} from "../model/apidetailedusage";
import {AppApiUsage} from "../model/appapiusage";
import {AppRuleScore} from "../model/apprulescore";
import {ApiSummary} from "../model/apisummary";
import {Annotation} from "../model/annotation";
import {ThirdPartyLibsUsage} from "../model/thirdpartylibsusage";
import {Findings} from "../model/findings";
import {RuleMetric} from "../model/rulemetric";
import {RunIndex} from "../model/runindex";
import {Sloc} from "../model/sloc";

@Injectable({
  providedIn: 'root'
})
export class RundataService {

  constructor(private http: HttpClient) { }

  getApiDetailedUsage(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/data/api_detailed_usage';
    return this.http.get<ApiDetailedUsage[]>(url);
  };
  /* /api/runs/1/data/app_api_usage */
  getApiByAppUsage(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/data/app_api_usage';
    return this.http.get<AppApiUsage>(url);
  };
  /* /api/runs/1/data/rule_detailed_score */
  getRuleByAppUsage(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/data/app_rule_score';
    return this.http.get<AppRuleScore>(url);
  }
  /* /api/runs/1/data/api_summary */
  getApiSummaryUsage(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/data/api_summary';
    return this.http.get<ApiSummary[]>(url);
  };
  /* /api/runs/:runid/data/sloc */
  getSourceCodeData(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/data/sloc';
    return this.http.get<Sloc[]>(url);
  };
  /*/api/runs/:runid/data/annotations */
  getAnnotationData(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/data/annotations';
    return this.http.get<Annotation[]>(url);
  };
  /* /api/runs/:runid/data/thirdParty */
  getThirdPartyData(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/data/thirdParty';
    return this.http.get<ThirdPartyLibsUsage[]>(url);
  };
  /* /api/runs/:runid/findings */
  getRunFindings(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/findings';
    return this.http.get<Findings[]>(url);
  };
  /* /api/runs/1/rule-metrics */
  getRuleMetrics(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/rule-metrics';
    return this.http.get<RuleMetric>(url);
  };


  getFinding(id) {
    const url = '/api/findings/' + id;
    return this.http.get<Findings>(url);
  };

  getRunIndexDetails(runid) {
    const url = UriConstants.RUNS_URI  + runid + '/index';
    return this.http.get<RunIndex>(url);
  };
}
