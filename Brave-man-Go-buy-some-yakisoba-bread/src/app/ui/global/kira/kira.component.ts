import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

/**
 * キラコンポーネント
 */
@Component({
  selector: 'app-kira',
  templateUrl: './kira.component.html',
  styleUrls: ['./kira.component.scss'],
})
export class KiraComponent implements OnInit, OnDestroy {
  // キラ画像のソースパス
  src = '';
  // 表示中のキラ画像のインデックス
  index = 0;
  // キラ画像の動きを止めるサブジェクト
  kiraStopSubject = new Subject()

  ngOnInit(): void {
    this.startKira();
  }

  ngOnDestroy(): void {
    this.kiraStopSubject.next(null);
  }

  /**
   * キラ画像の表示を始める。
   */
  private startKira() {
    this.src = 'assets/images/kira0.png';
    interval(100).pipe(takeUntil(this.kiraStopSubject)).subscribe(
      () => {
        this.index++;
        if (this.index > 8) {
          this.index = 0;
        }
        this.src = `assets/images/kira/kira${this.index}.png`
      }
    );
  }
}
