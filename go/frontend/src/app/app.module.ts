import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ClarityModule } from '@clr/angular';
import '@clr/icons';
import { AppComponent } from './app.component';
import '@cds/core/alert/register.js';
import { CdsModule } from '@cds/angular';
import { ExecutiveSummaryComponent } from './components/executive-summary/executive-summary.component';
import { SortArrayByPropPipe } from './pipes/sort-array-by-prop.pipe';
import { AnalyzerRunComponent } from './components/analyzer-run/analyzer-run.component';
import { AnalyzerRunDetailsComponent } from './components/analyzer-run-details/analyzer-run-details.component';
import { HeaderComponent } from './components/header/header.component';
import { AnalyzerRunService } from "./services/analyzerrun.service";
import { ExecutiveSummaryService } from "./services/executivesummary.service";
import { HttpClientModule } from "@angular/common/http";
import { ExcelExportComponent } from './components/common/excel-export/excel-export.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { RulesComponent } from './components/rules/rules.component';
import {ApplicationSummaryComponent} from "./components/application-summary/application-summary.component";
import {RulesService} from "./services/rules.service";
import { AnnotationsComponent } from './components/rundata/annotations/annotations.component';
import { ApiByAppComponent } from './components/rundata/apibyapp/apibyapp.component';
import { ApiUsageDetailedComponent } from './components/rundata/apiusagedetailed/apiusagedetailed.component';
import { ApiUsageSummaryComponent } from './components/rundata/apiusagesummary/apiusagesummary.component';
import { FindingsComponent } from './components/rundata/findings/findings.component';
import { RuleByAppComponent } from './components/rundata/rulebyapp/rulebyapp.component';
import { RuleMetricsComponent } from './components/rundata/rulemetrics/rulemetrics.component';
import { SourceCodeComponent } from './components/rundata/sourcecode/sourcecode.component';
import { ThirdPartyComponent } from './components/rundata/thirdparty/thirdparty.component';
import { RunDataSummaryComponent } from './components/rundata/rundatasummary/rundatasummary.component';

@NgModule({
  declarations: [AppComponent, ExecutiveSummaryComponent, SortArrayByPropPipe, AnalyzerRunComponent, AnalyzerRunDetailsComponent, HeaderComponent, ExcelExportComponent, SearchFilterPipe, ApplicationSummaryComponent, RulesComponent, AnnotationsComponent, ApiByAppComponent, ApiUsageDetailedComponent, ApiUsageSummaryComponent, FindingsComponent, RuleByAppComponent, RuleMetricsComponent, SourceCodeComponent, ThirdPartyComponent, RunDataSummaryComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CdsModule, ClarityModule, HttpClientModule, FormsModule, NgxChartsModule, BrowserAnimationsModule],
  providers: [AnalyzerRunService, ExecutiveSummaryService, RulesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
