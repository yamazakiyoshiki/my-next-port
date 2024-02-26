<div id="top"></div>

## 使用技術一覧


<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-JavaScript-F7Df1E.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <!-- ミドルウェア一覧 -->
  <img src="https://img.shields.io/badge/-Mongoose-880000.svg?logo=mongoose&style=for-the-badge">
  <img src="https://img.shields.io/badge/-NextAuth-000000.svg?logo=&style=plastic">
  <!-- インフラ一覧 -->
  <img src="https://img.shields.io/badge/-MongoDB-47A248.svg?logo=mongodb&style=for-the-badge&logoColor=white">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)

<br />
<div align="right">
    <a href="READMEの作成方法のリンク"><strong>READMEの作成方法 »</strong></a>
</div>
<br />
<div align="right">
    <a href="Dockerfileの詳細リンク"><strong>Dockerfileの詳細 »</strong></a>
</div>
<br />

## プロジェクト名

独学エンジニアを繋げるアウトプット用学習アプリProBoard


## プロジェクトについて


私自身が、プログラミングの独学期間中に簡単に他のエンジニアが、作った問題を解いてアウトプット出来ないか？と思い探しましたが、日本であまりそのようなサービスがありませんでした。学んだ知識を使ってハンズオンで何かを作るというのが一番学習効率良く、何か目に見える物を作れると楽しくて独学でも挫折せず継続的に学習できるのではないかと思います。これからエンジニアを独学で目指す人の助けに少しでもなればと思いこのアプリを作成しました。
初めは問題の完成図を写真を上げ、確認できるようにする予定でしたが、知識不足でまだ実現していません。今後は上記のような機能や、ユーザーがアイコン写真を設定できる機能、OpenAPIを用いたコードヘルパーや、ユーザー間でチャットが出来る機能、問題カテゴリーのデータを動的にチャートに反映させる機能を、順次導入していく予定なのでどうぞよろしくお願いします。



  <p align="left">
    <br />
    <a href="https://my-pro-board.vercel.app/"><strong>プロジェクト詳細 »</strong></a>
    <br />
    <br />

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境


| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Next.js               | 14.0.1     |
| React                 | 18.0.0     |
| Node.js               | 20.10.0    |
| Mongoose             | 8.0.0      |
| NextAuth             | 5.0.0-beta.3      |

その他のパッケージのバージョンは pyproject.toml と package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成




├── app
│   ├── auth.js
│   ├── authconfig.js
│   ├── homeboard
│   │   ├── help
│   │   │   └── page.jsx
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── problems
│   │   │   ├── [id]
│   │   │   │   ├── detail
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── error.jsx
│   │   │   │   ├── page.jsx
│   │   │   │   └── resolve
│   │   │   │       └── page.jsx
│   │   │   ├── add
│   │   │   │   ├── error.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── mypost
│   │   │   │   └── page.jsx
│   │   │   ├── page.jsx
│   │   │   └── resolves
│   │   │       └── page.jsx
│   │   └── users
│   │       ├── [id]
│   │       │   ├── error.jsx
│   │       │   ├── page.jsx
│   │       │   └── profile
│   │       │       └── page.jsx
│   │       ├── add
│   │       │   └── page.jsx
│   │       └── page.jsx
│   ├── layout.js
│   ├── lib
│   │   ├── actions.js
│   │   ├── data.js
│   │   ├── models.js
│   │   ├── services
│   │   │   └── problemsService.js
│   │   └── utils.js
│   ├── login
│   │   ├── error.jsx
│   │   └── page.jsx
│   ├── not-found.jsx
│   ├── page.jsx
│   └── ui
│       ├── error.module.css
│       ├── globals.css
│       ├── homeboard
│       │   ├── card
│       │   │   ├── card.jsx
│       │   │   └── card.module.css
│       │   ├── chart
│       │   │   ├── chart.jsx
│       │   │   └── chart.module.css
│       │   ├── footer
│       │   │   ├── footer.jsx
│       │   │   └── footer.module.css
│       │   ├── help
│       │   │   ├── help.jsx
│       │   │   └── help.module.css
│       │   ├── homeboard.module.css
│       │   ├── homecontents
│       │   │   ├── homecontens.jsx
│       │   │   └── homecontents.module.css
│       │   ├── navbar
│       │   │   ├── navbar.jsx
│       │   │   ├── navbar.module.css
│       │   │   └── responsiveNavbar
│       │   │       ├── navcontents
│       │   │       │   ├── navcontents.jsx
│       │   │       │   └── navcontents.module.css
│       │   │       ├── responsiveNavbar.jsx
│       │   │       └── responsiveNavbar.module.css
│       │   ├── pagination
│       │   │   ├── pagination.jsx
│       │   │   └── pagination.module.css
│       │   ├── problems
│       │   │   ├── addProblem
│       │   │   │   └── addProblem.module.css
│       │   │   ├── detailProblem
│       │   │   │   └── detail.module.css
│       │   │   ├── mypost
│       │   │   │   └── mypost.module.css
│       │   │   ├── problems.module.css
│       │   │   ├── resolveProblem
│       │   │   │   └── resolves.module.css
│       │   │   └── singleProblem
│       │   │       └── singleProblem.module.css
│       │   ├── resolve
│       │   │   └── resolve.module.css
│       │   ├── rightbar
│       │   │   ├── rightbar.jsx
│       │   │   └── rightbar.module.css
│       │   ├── search
│       │   │   ├── search.jsx
│       │   │   └── search.module.css
│       │   ├── sidebar
│       │   │   ├── menuLink
│       │   │   │   ├── menuLink.jsx
│       │   │   │   └── menuLink.module.css
│       │   │   ├── sidebar.jsx
│       │   │   └── sidebar.module.css
│       │   └── users
│       │       ├── addUser
│       │       │   └── addUser.module.css
│       │       ├── singleUser
│       │       │   ├── singleUser.module.css
│       │       │   └── usersProfile
│       │       │       └── usersProfile.module.css
│       │       └── users.module.css
│       ├── login
│       │   ├── createAccountForm
│       │   │   ├── createAccountForm.jsx
│       │   │   └── createAccountForm.module.css
│       │   ├── login.module.css
│       │   └── loginForm
│       │       ├── loginForm.jsx
│       │       └── loginForm.module.css
│       └── notfound.module.css
├── jsconfig.json
├── middleware.js
├── next.config.js
├── package-lock.json
├── package.json
└── public
    ├── astronaut.png
    ├── noavatar.png
    └── noproblem.jpg

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

<!-- コンテナの作成方法、パッケージのインストール方法など、開発環境構築に必要な情報を記載 -->


.env ファイルを以下の環境変数例と[環境変数の一覧](#環境変数の一覧)を元に作成

.env
MONGO=yourPassword
AUTH_SECRET=some-secret
AUTH_URL=http://localhost:3000/api/auth


.env ファイルを作成後、以下のコマンドで開発環境を構築


### 環境変数の一覧

| 変数名                 | 役割                                      | デフォルト値                       | DEV 環境での値                           |
| ---------------------- | ----------------------------------------- | ---------------------------------- | ---------------------------------------- |
| MONGO    | MongoDB のパスワード | root                               |                                          |
| AUTH_SECRET         | NextAuthのシークレットキー   | django-db                          |                                          |
| AUTH_URL             | NextAuth認証関連のAPIエンドポイント         |



<p align="right">(<a href="#top">トップへ</a>)</p>