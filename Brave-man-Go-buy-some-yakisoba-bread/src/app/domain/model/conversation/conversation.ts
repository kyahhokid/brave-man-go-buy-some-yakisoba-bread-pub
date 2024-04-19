import { BackgroundType } from "./background-type";

/**
 * 会話
 */
export class Conversation {

  constructor(
    // 名前
    public name = '',
    // 内容
    public content = '',
    // 背景
    public backgroundType: BackgroundType | null,
  ) { }
}