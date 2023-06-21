# yarn をインストールしましょう
```
yarn -v
```
でバージョンが出なければインストールします。
```
corepack enable yarn
```
参照：
https://zenn.dev/teppeis/articles/2021-05-corepack


# セットアップ
```
yarn
```

# 実行
```
yarn dev
```

# API スキーマの管理

## 概要

- サブモジュールを利用して行います。
- [API スキーマのリポジトリ](git@github.com:ih14c-13-14/schema.git)
- 書き込みは backend repo からではなく、schema repo を開いてそちらから出すようにしましょう。PR とレビュー依頼もしてください。

## スキーマ更新時のハンドリング

### スキーマ追従作業をする人

以下のコマンドを実行してください。
`yarn submodule-update`

### 他の人がスキーマ更新したのを取り込む人

最新の main を取り込んだ上で、以下のコマンドを実行してください。
`git submodule update --init`
