# 勇者よ。焼きそばパンを買ってくるのじゃ。

Angularでオリジナルゲームを作りたい。

[配信用の自己紹介とかゲーム紹介とか](https://github.com/kyahhokid/brave-man-go-buy-some-yakisoba-bread-pub/blob/master/Brave-man-Go-buy-some-yakisoba-bread/docs/introduction.md)

最終的には著作権フリーの画像とか使ってかっこよくしたいけど、publicリポジトリに画像プッシュすると二次配布と判定されて怒られそうな気がしたので、自分で作成した画像に差し替えてあります。

[プレイする(GitHubPage)](https://kyahhokid.github.io/brave-man-go-buy-some-yakisoba-bread-pub/)

## デプロイ方法

自分用備忘録。

1. 画像系をすべてバックアップを取る
1. 画像系の変更の履歴をすべて破棄する。
1. 画像を追加した場合はそのダミーデータも追加する
1. npx ng deploy --base-href=/brave-man-go-buy-some-yakisoba-bread-pub/を叩く(これでデプロイ自体は完了する。)
1. バックアップに移した画像を元に戻す。(これは本物の画像を使って開発ができるようにするため)
