---
title: "IntelliJ IDEA Community Editionのダウンロードとインストール"
sidebar_position: 1
---

Javaの開発には、IntelliJ IDEAがオススメです。

資料内にあるコードは、IntelliJ IDEAのCommunity Editionを使用して開発を行うことを想定して書かれているものがほとんどです。

IntelliJ IDEA Community Editionを使用しなくても、問題なく資料を読み進めることは可能ですが、オススメの開発環境を入れた状態で進めた方がストレスなく開発できると思いますので、ぜひダウンロードとインストールをしましょう。

## Toolbox Appのダウンロード

IntelliJ IDEA Community Editionは、JetBrainsの製品ダウンロードをサポートしてくれるToolbox Appよりダウンロード、インストールします。

- [JetBrains Toolbox App：ツールを簡単に管理](https://www.jetbrains.com/ja-jp/toolbox-app/)

ダウンロードが完了したらそのままインストールを始めましょう。

## Toolbox Appのインストール

dmgファイルを開き、画面の指示にしたがってください。
インストールが完了して、アプリを開くと、画面右上のメニューバーにToolbox Appが常駐するようになります。

Toolboxを開くと、初回はライセンスへの同意と言語の選択があります。
言語はお好きなものを選んでもらえば良いですが、初期値はEnglishなので、日本語が良い人は日本語に変えましょう。
資料は日本語に変えたもので解説を進めます。

## IntelliJ IDEA CEのインストール

IntelliJ IDEA Community EditionをToolboxよりインストールします。

![](/docs/01/SCR-20220413-ojf.png)

ダウンロードは、学内で一斉に行うと間違いなく失敗します。
ダウンロード失敗時の不具合などは、場合によってはサポート出来ない状況になる可能性もあります。
ネットワークの状況が混雑していないタイミングで行うか、自宅の回線を使ってダウンロードしてください。

## IntelliJ　IDEA　CEインストール完了後の設定

インストールが完了したら、一度IntelliJ IDEAを起動してください。

初回の起動時には、UIの設定などさまざまな質問がされます。以下のように進めればOKです。

1. 利用規約の同意を行います。
    - ![](/docs/01/Intelli001.png)
2. 利用状況の送信可否を決定します。
    - ![](/docs/01/Intelli002.png)

### IntelliJ IDEAの日本語化
英語のままで良い場合、この手順は飛ばしてください。

![](/docs/01/SCR-20220413-ovo.jpeg)

以下の画像を参考に日本語化のプラグイン「Japanese Language Pack」をインストールします。

![](/docs/01/SCR-20220413-owl.png)

インストール後は、IDEを再起動するように求められますので、IntelliJIDEAを再起動してください。

### Java SDKの指定

新規プロジェクトの画面にて、初回のみJava SDKの設定を行います。

![](/docs/01/SCR-20220413-p2d.jpeg)

新規SDKの画面にて、インストールしたJava SDKのバージョンのホームディレクトリを指定します。

![](/docs/01/SCR-20220413-p33.jpeg)

この講義の指示通りにインストールしているなら、Java17が出ているはずですが、もし出ていなければサポートしますので教えてください。


### プロジェクトを作成してみよう

![](/docs/01/SCR-20220413-pfh.jpeg)

次回以降は課題などの設問ごとにプロジェクトを作成しますので、プロジェクト名などの指示がある場合には、その指示にしたがってください。


### クラスを配置してみよう

画面左側にあるプロジェクトパネルより、srcフォルダを右クリック→「new」→「Java class」を選びます。

![](/docs/01/idea06-2.png)

新規にクラスを作成します。名前は任意で良いですが、必ず大文字からはじめてください。
今回は、「HelloIdea」としています。

![](/docs/01/idea07-2.png)

この時、「.java」などの拡張子の指定は不要です。

クラスが作成できたら、mainメソッドやSystem.out.printlnなどを使ってHello Worldのプログラムを書いてみましょう。

作成されたJavaファイルを以下の手順に従いコードを書いてみましょう。

#### 1. `public class HelloIdea {` で改行を差し込み、「main」と入力して［tab］キーを入力します。

```java
public class HelloIdea {
    main[tab]
}
```

以下のように自動挿入されます。

```java
public class HelloIdea {
    public static void main(String[] args) {
        
    }
}
```

#### 2. mainのカッコ内で、「sout」と入力して［tab］キーを入力します。

```java
public class HelloIdea {
    public static void main(String[] args) {
        sout[tab]
    }
}
```

以下のようになります。

```java
public class HelloIdea {
    public static void main(String[] args) {
        System.out.println();
    }
}
```

#### 3. カーソルが移動した位置に画面表示したい文言を好きなように入力します。今回は「"Hello, Idea!"」と入力しました。

```java
public class HelloIdea {
    public static void main(String[] args) {
        System.out.println("Hello, Idea!");
    }
}
```

IDEが提供しているコードの入力サポートが使える場合は、どんどん使用しましょう。

### クラスの実行

mainメソッドが存在しているクラスは、クラス単体で実行ができます。IntelliJ IDEAでは、メソッド単位での実行もサポートされます。

![](/docs/01/idea08.png)

適当なプログラムを作成して、実行してみましょう。


以降は、IDEを使ってコードを書き、実行確認していきましょう。  
この資料での説明は以上です。
