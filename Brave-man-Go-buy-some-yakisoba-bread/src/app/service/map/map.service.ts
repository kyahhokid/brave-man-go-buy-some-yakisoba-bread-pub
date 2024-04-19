import { Injectable } from '@angular/core';

/**
 * 地図サービス
 */
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  /**
   * 地図を取得する。
   */
  getMap(): boolean[][] {
    return [
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      [true, true, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true],
      [true, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true],
      [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      [true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true],
      [false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    ]
  }
}
