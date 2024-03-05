<div id="top"></div>

## 使用技術一覧


<p style="display: inline">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-MongoDB-000000.svg?logo=mongodb&style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/-Mongoose-000000.svg?logo=mongoose&style=for-the-badge">
  <img src="https://img.shields.io/badge/-JavaScript-000000.svg?logo=javascript&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-000000.svg?logo=react&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-NextAuth-000000.svg?logo=&style=plastic">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)



## プロジェクト名

独学エンジニアを繋げるアウトプット用学習アプリProBoard


## プロジェクトについて


私自身が、プログラミングの独学期間中に簡単に他のエンジニアが、作った問題を解いてアウトプット出来ないか？と思い探しましたが、日本であまりそのようなサービスがありませんでした。学んだ知識を使ってハンズオンで何かを作るというのが一番学習効率良く、何か目に見える物を作れると楽しくて独学でも挫折せず継続的に学習できるのではないかと思います。これからエンジニアを独学で目指す人の助けに少しでもなればと思いこのアプリを作成しました。



## 今後の課題


プロジェクト当初はTypeScriptでコードを書いていましたがNextAuth-betaの導入時に色々と思考しサーチしたのですが、betaということもあり情報が少なく、結局型エラーが取れず妥協で型チェックを外すことも考えましたが、本末転倒なのでTypeScriptでのプロジェクト継続を断念しました。今後は技術選定をもっと慎重にしTypeScriptでのリプレイスもしていこう思います。
機能面は当初問題の完成図を写真を上げ、確認できるようにする予定でしたが、知識不足でまだ実現していません。今後は上記のような機能や、ユーザーがアイコン写真を設定できる機能、OpenAI APIを用いたコードヘルパーや、ユーザー間でチャットが出来る機能、問題カテゴリーのデータを動的にチャートに反映させる機能を、順次導入していく予定です。



  <p align="left">
    <br />
    <a href="https://my-pro-board.vercel.app/"><strong>プロジェクト詳細 »</strong></a>
    <br />
    <br />

<br />

<p align="right">(<a href="#top">トップへ</a>)</p>


  ## 機能一覧
| アカウント作成画面 |　ログイン画面 |
| ---- | ---- |
| ![アカウント作成画面](/public/top.png) | ![ログイン画面](/public/login.png) |
| アカウント情報を作成できる機能を実装しました。 | ユーザーネームとパスワードでの認証機能を実装しました。 |

| ユーザー一覧画面 |　ユーザープロフィール画面 |
| ---- | ---- |
| ![ユーザー一覧画面](/public/users.png) | ![ユーザープロフィール画面](/public/user.png) |
| 登録済みのユーザー一覧を確認できる機能を実装しました。 | 各登録ユーザーの設定したプロフィールを見ることができる機能を実装しました。 |

| 問題一覧画面 |　問題チャレンジ画面 |
| ---- | ---- |
| ![問題一覧画面](/public/problems.png) | ![　問題チャレンジ画面](/public/problem.png) |
| 各ユーザーが投稿した問題の一覧を確認できる機能を実装しました。 | 問題を実際に解くためのページを実装しました。 |

| 投稿一覧画面 |　投稿内容編集画面 |
| ---- | ---- |
| ![投稿一覧画面](/public/myposts.png) | ![　投稿内容編集画面](/public/mypost.png) |
| 自分の投稿一覧を確認、削除できる機能を実装しました。 | 投稿した内容を編集できる機能を実装しました。 |

| ユーザー設定画面 | ヘルプページ |
| ---- | ---- |
| ![ユーザー設定画面](/public/myposts.png) | ![　ヘルプページ](/public/mypost.png) |
| アカウント情報を変更できる機能を実装しました。 | 使い方を記載したヘルプページを実装しました。 |

## 環境


| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Next.js               | 14.0.1     |
| React                 | 18.0.0     |
| Node.js               | 20.10.0    |
| Mongoose             | 8.0.0      |
| NextAuth             | 5.0.0-beta.3      |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成


```

.
├── app
│   ├── auth.js
│   ├── authconfig.js
│   ├── homeboard
│   ├── layout.js
│   ├── lib
│   ├── login
│   ├── not-found.jsx
│   ├── page.jsx
│   └── ui
├── jsconfig.json
├── middleware.js
├── next.config.js
├── package-lock.json
├── package.json
└── public
    ├── noavatar.png
    └── noproblem.jpg
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築



.env ファイルを以下の環境変数例と[環境変数の一覧](#環境変数の一覧)を元に作成

.env
MONGO=yourPassword
AUTH_SECRET=some-secret
AUTH_URL=http://localhost:3000/api/auth


.env ファイルを作成後、以下のコマンドで開発環境を構築


### 環境変数の一覧

| 変数名                 | 役割                                      | デフォルト値                       | DEV 環境での値                           |
| ---------------------- | ----------------------------------------- | ---------------------------------- | ---------------------------------------- |
| MONGO    | MongoDB のパスワード |
| AUTH_SECRET         | NextAuthのシークレットキー   |
| AUTH_URL             | NextAuth認証関連のAPIエンドポイント         |



<p align="right">(<a href="#top">トップへ</a>)</p>
