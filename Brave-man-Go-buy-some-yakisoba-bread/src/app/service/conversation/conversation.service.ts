import { Injectable } from '@angular/core';
import { ChapterType } from 'src/app/domain/model/chapter/chapter-type';
import { BackgroundType } from 'src/app/domain/model/conversation/background-type';
import { Conversation } from 'src/app/domain/model/conversation/conversation';

/**
 * 会話サービス
 */
@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  // チャプター種別のキャッシュ
  chapterTypeCache: ChapterType | null = null;
  // 会話リストIDのキャッシュ
  conversationListIdCache = -1;
  // 会話リストのキャッシュ
  conversationListCache: Conversation[] = [];

  constructor() { }

  /**
   * 会話を取得する。
   * @param chapterType チャプター種別
   * @param index インデックス
   * @param conversationListId 会話リストID
   */
  get(chapterType: ChapterType, index: number, conversationListId = -1): Conversation | null {
    switch (chapterType) {
      case ChapterType.FirstYakisobaBreadConversation:
        return this.createFirstYakisobaBreadConversationChapterConversation(index);
      case ChapterType.FirstYakisobaBread:
        return this.createFirstYakisobaBreadChapterConversation(index, conversationListId);
      default:
        return null;
    }
  }

  /**
   * 最初の焼きそばパンの会話パートの会話を生成する。
   * @param index インデックス
   */
  private createFirstYakisobaBreadConversationChapterConversation(index: number) {
    if (this.chapterTypeCache !== ChapterType.FirstYakisobaBreadConversation) {
      this.cacheClear();
      this.chapterTypeCache = ChapterType.FirstYakisobaBreadConversation;
      this.conversationListCache = [
        new Conversation('???', '…め……じゃ……', BackgroundType.NightRoom),
        new Conversation('???', 'め……める……', null),
        new Conversation('???', '目覚めるのじゃ！アレン！！', null),
        new Conversation('アレン', 'へ？', null),
        new Conversation('???', 'ようやく起きたか。寝坊助じゃのう。', null),
        new Conversation('アレン', 'え？なにこれ？誰もいないのに声だけが聞こえる。', null),
        new Conversation('???', 'そりゃそうじゃ。わしは今、お主の頭の中に直接声を届けているからのう。', null),
        new Conversation('アレン', 'は？あ、あなたは一体…？', null),
        new Conversation('???', 'わしか？わしはこの世界を見守る神じゃ', null),
        new Conversation('アレン', 'え？神……？神様が僕なんかに、なんの御用ですか？', null),
        new Conversation('神', 'お主は勇者に選ばれた。かつて封印されし魔王が、もうすぐ復活を遂げようとしておる。お主には魔王討伐の任務与えよう', null),
        new Conversation('アレン', 'ちょっと話が急すぎて、ついていけないのですが……勇者？魔王？どこの御伽話ですか？', null),
        new Conversation('神', '御伽話などではない。現実の話じゃ', null),
        new Conversation('アレン', 'そんなばかな……。', null),
        new Conversation('神', 'まあ、すぐには信じられないじゃろう。そうじゃ、今の復活しかけている魔王をお主に見せてやろう。ほれ。', null),
        new Conversation('アレン', 'うわっ、急に周りの景色が', BackgroundType.SealedDemonKing),
        new Conversation('神', 'あそこの禍々しい球体が魔王を封印している宝玉じゃ。', null),
        new Conversation('アレン', '……時々光ってる？', null),
        new Conversation('神', 'うむ。封印が弱まってきているのじゃろう。', null),
        new Conversation('アレン', '……もし、封印が解けたら...何が起こるんですか…？', null),
        new Conversation('神', '魔王の力は強大じゃ。ひとたび封印が解けてしまえば、人々は為す術無く蹂躙されることになるじゃろう。', null),
        new Conversation('アレン', '...そんな恐ろしい奴を本当に僕一人で何とかできるんでしょうか。', null),
        new Conversation('神', '大丈夫じゃ。お主には試練を与える。試練を1つずつこなしていけば、いずれ魔王を討伐することも出来よう。', null),
        new Conversation('アレン', '……試練。それで徐々に魔王を討伐するための力を蓄えていくということですか……。分かりました。僕も世界が滅びるのは嫌ですし、協力します。', null),
        new Conversation('神', 'おお！そう言ってくれると信じておったぞ！さて、こんな所に長居は無用じゃな。とっとと帰るぞい。', null),
        new Conversation('アレン', 'あ、僕の部屋に戻った。', BackgroundType.NightRoom),
        new Conversation('神', 'では、第一の試練を与えるぞい。', null),
        new Conversation('アレン', 'はい。お手柔らかにお願いします。', null),
        new Conversation('神', 'うむ。では第一の試練。近所のコンビニで焼きそばパンを買ってくるのじゃ。', null),
        new Conversation('アレン', '……………………………え？', null),
        new Conversation('神', 'どうしたのじゃ？', null),
        new Conversation('アレン', 'いや、聞き間違いかな……神様、申し訳ありません。もう一度仰っていただけますか？', null),
        new Conversation('神', '仕方ないのう。良いか？第一の試練。近所のコンビニで焼きそばパンを買ってくるのじゃ。', null),
        new Conversation('アレン', '聞き間違いじゃなかった！！焼きそばパン！？魔王を倒すための試練で焼きそばパン！！？あんた何言ってんだマジで！！！？', null),
        new Conversation('神', 'おお、落ち着くのじゃアレン。口調がおかしくなっておるぞ。', null),
        new Conversation('アレン', 'ちょっと焼きそばパンの衝撃が強すぎて……。で、なんで焼きそばパンなんですか？', null),
        new Conversation('神', 'まあ、それはおいおい分かることじゃ。今は何も考えず、焼きそばパンを買ってくるのじゃ。', null),
        new Conversation('アレン', 'むぅ……分かりました。とりあえず焼きそばパン買ってきます…。', null),
        new Conversation('神', 'うむ。気をつけて言ってくるのじゃぞ。', null),
      ]
    }

    if (this.conversationListCache.length > index) {
      return this.conversationListCache[index];
    }
    return null
  }

  /**
 * 最初の焼きそばパンの会話パートの会話を生成する。
 * @param index インデックス
 */
  private createFirstYakisobaBreadChapterConversation(index: number, conversationListId: number) {
    if (this.chapterTypeCache !== ChapterType.FirstYakisobaBread || this.conversationListIdCache !== conversationListId) {
      this.cacheClear();
      this.chapterTypeCache = ChapterType.FirstYakisobaBread;
      this.conversationListIdCache = conversationListId;
      switch (conversationListId) {
        case 0: {
          this.conversationListCache = [
            new Conversation('アレン', 'あった。焼きそばパン。', null),
            new Conversation('アレン', 'これが魔王と関係あるとは思えないけど……。', null),
            new Conversation('アレン', 'まぁ……とりあえず持って帰ってみるか。', null),
          ]
          break;
        }
        case 1: {
          this.conversationListCache = [
            new Conversation('アレン', 'お会計お願いします。', null),
            new Conversation('店員', 'はい、焼きそばパンお一つですね。100円になります。', null),
            new Conversation('アレン', 'これでお願いします。', null),
            new Conversation('店員', '100円ちょうどいただきます。ありがとうございました。', null),
          ]
          break;
        }
      }
    }

    if (this.conversationListCache.length > index) {
      return this.conversationListCache[index];
    }
    return null
  }

  /**
   * 背景のパスを返す。
   * @param backgroundType 背景種別
   * @returns 
   */
  getBackgroundStyle(backgroundType: BackgroundType): any {
    switch (backgroundType) {
      case BackgroundType.NightRoom: return {
        'background-image': `url(assets/images/room-night.jpg)`,
        'background-position-x': '-300px'
      };
      case BackgroundType.SealedDemonKing: return {
        'background-image': `url(assets/images/sealed-demon-king.jpg)`,
        'background-position-x': '-200px'
      };
      default: return '';
    }
  }

  /**
   * キャッシュをクリアする。
   */
  private cacheClear() {
    this.chapterTypeCache = null;
    this.conversationListIdCache = -1;
    this.conversationListCache.splice(0);
  }
}
