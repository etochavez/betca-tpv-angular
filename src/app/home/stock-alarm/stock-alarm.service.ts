import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '../../core/http.service';
import {AppEndpoints} from '../../app-endpoints';
import {StockAlarm, StockAlarmArticleSearch, StockAlarmCreate} from './stock-alarm.model';

@Injectable({
  providedIn: 'root'
})
export class StockAlarmService {

  constructor(private httpService: HttpService) {
  }

  readAll(): Observable<StockAlarm[]> {
    return this.httpService.get(AppEndpoints.STOCK_ALARM);
  }

  create(stockAlarmCreate: StockAlarmCreate): Observable<StockAlarmCreate> {
    return this.httpService.post(AppEndpoints.STOCK_ALARM, stockAlarmCreate);
  }

  update(id: string, stockAlarm: StockAlarm): Observable<StockAlarm> {
    return this.httpService.put(AppEndpoints.STOCK_ALARM + '/' + id, stockAlarm);
  }

  delete(stockAlarm: StockAlarm): Observable<StockAlarm> {
    return this.httpService.delete(AppEndpoints.STOCK_ALARM + '/' + stockAlarm.id);
  }

  searchArticle(searchArticleState: string): Observable<StockAlarmArticleSearch[]> {
    return this.httpService.get(AppEndpoints.STOCK_ALARM + '/' + searchArticleState);
  }
}
