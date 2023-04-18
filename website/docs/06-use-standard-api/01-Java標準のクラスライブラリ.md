---
title: Java標準のクラスライブラリ
sidebar_position: 1
---

# Javaの強力なライブラリ群

Javaには、標準でいくつかのクラスがすでに作成されており、それらのクラスを利用してプログラム開発が行えます。

たとえば、`System.out.println`などの標準出力などをサポートしているSystemクラスや、`parseInt`などの文字列を整数型に変えるメソッドなどを持ち、整数型自体を表す`Integer`クラス、数学計算などのstaticなメソッドを持つ`Math`クラスなどがクラスライブラリとして提供されています。

これらは、Javaの標準APIとして言語に搭載されています。

また、クラスライブラリを自分で作成することもできます。
作成したクラスライブラリを配布することで、他の開発者がそのクラスを使ってプログラム開発が行えるようになります。

# Java SEのAPIドキュメント

Javaの標準機能のドキュメントとして、<a href="https://docs.oracle.com/javase/jp/17/docs/api/index.html" target="_blank">JavaSDK & JDK API概要 (Java SE 17 & JDK 17 )</a> があります。  
資料で説明されている標準APIのクラスだけでなく、サンプルコード等で使用されているクラスやメソッドを、上記リンク先より調べるようにしましょう。

大抵のプログラミング言語には、こういった公式ドキュメントが存在しています。
公式のドキュメントを見る癖をつけることで、どんな言語でも困ったときに調べて解決できる能力となります。

## Stringクラスを見てみよう

上記ドキュメントサイトの検索ボックスより、「String」と入力して、`java.lang.String`について見てみましょう。

# 文字列操作

Stringクラスのいろいろなメソッドを使って、文字列を操作してみましょう。

## 文字列の長さと文字を取り出す

サンプルプログラムでは、コメントを削除しています。

このサンプルプログラムでは、インスタンス化したStringの変数に対して処理が行われている点を確認しましょう。

```java
public class Sample {
  public static void main(String[] args) {
    String str = "Hello";

    char ch1 = str.charAt(0);
    char ch2 = str.charAt(1);
    int len = str.length();

    System.out.println(str + "の1番目の文字は" + ch1 + "です。");
    System.out.println(str + "の2番目の文字は" + ch2 + "です。");
    System.out.println(str + "の長さは" + len + "です。");
  }
}
```

実行結果:

```
Helloの1番目の文字はHです。
Helloの2番目の文字はeです。
Helloの長さは5です。
```

変数`str`の中身を変えて試してみましょう。日本語も使えます。


## 文字列の大文字と小文字を変換する

このサンプルプログラムでは、`.toUpperCase()`と`.toLowerCase()`を実行した後に、String型のインスタンスである`str`の中身は変化していないことも確認しておきましょう。

```java
import java.util.Scanner;

public class Sample {

  public static void main(String[] args) {
    System.out.println("英字を入力してください。");

    Scanner sc = new Scanner(System.in);

    String str = sc.nextLine();

    String stru = str.toUpperCase();
    String strl = str.toLowerCase();

    System.out.println("大文字に変換すると" + stru + "です。");
    System.out.println("小文字に変換すると" + strl + "です。");
  }

}
```

## 文字列から文字を検索する

このサンプルプログラムでは、`.indexOf`の戻り値に対して条件分岐が行われています。

```java
import java.util.Scanner;

public class Sample {

  public static void main(String[] args) {
    System.out.println("文字列を入力してください。");

    Scanner sc = new Scanner(System.in);

    String str1 = sc.nextLine();

    System.out.println("検索文字を入力してください。");

    String str2 = sc.nextLine();
    char ch = str2.charAt(0);

    int num = str1.indexOf(ch);

    if (num != -1) {
      System.out.println(str1 + "の" + (num + 1) + "番目に「" + ch + "」がみつかりました。");
    } else {
      System.out.println(str1 + "に「" + ch + "」はありません。");
    }

  }

}
```


## 文字列を連結する

このサンプルプログラムでは、新しく`StringBuilder`クラスを使用しています。このクラスは、文字列を連結するためのバッファを用意し、連結操作自体をサポートするクラスです。
ドキュメントにも目を通しておきましょう。

```java
import java.util.Scanner;

public class Sample {

  public static void main(String[] args) {
    System.out.println("文字列を入力してください。");
    Scanner sc = new Scanner(System.in);
    String str1 = sc.nextLine();

    System.out.println("追加する文字列を入力してください。");
    String str2 = sc.nextLine();

    StringBuilder sb = new StringBuilder(str1);
    sb.append(str2);

    System.out.println(str1 + "に" + str2 + "を追加すると" + sb + "です。");
  }

}
```

また、ほぼ同じ処理ができるライブラリとして、`StringBuffer`というものがあります。しかし。Java SE 7以降では、このクラスではなく`StringBuilder`を使用することが推奨されています。StringBufferもStringBuilderもどちらとも文字列連結のためのクラスですが、StringBuilderの方が、今作成しているようなシングルスレッドプログラムでは処理が高速です。
(GUIアプリケーションなどのマルチスレッドプログラミングにて、スレッド間での共有を行う場合は、StringBufferを使ってください。それ以外は、StringBuilderの方が確実です。わざわざ文字連結のためのオブジェクトを共有することはあまりしないので良いと思いますが……)

## 文字列からchar型の配列を取得する

String型の文字列は、内部的にcharの配列を生成できます。

String型のオブジェクトから、`toCharArray()`メソッドを使うことで、その文字列を`char[]`で取得できます。j
文字列を1文字ずつ処理したい場合などには、これを使いましょう。

```java
import java.util.Scanner;

public class Sample55 {

    public static void main(String[] args) {
        System.out.println("文字列を入力してください。");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();


        System.out.println("１文字ずつ表示します。");
        // 拡張forを使って1文字ずつ取り出して処理する
        for (char c : str.toCharArray()) {
            System.out.println(c);
        }
    }
}
```


## その他のクラス

Javaには、Stringだけでなく、他にも便利なクラスライブラリが多数存在しています。
「これどうやればいいんだろう？」などと思った時には、JavaのAPIドキュメントを見たり、Googleなどの検索エンジンに聞いてみるなどしてみるとよいでしょう。

※ただし、Google等で検索をする場合、ブログの記事などがヒットした場合には、Javaのバージョンはいくつなのかとか、投稿日時などを見てなるべく新しい記事を参考にしましょう。

# まとめ
- 先人たちが残してくれている強大なクラスライブラリを使い、楽にプログラミングをしよう。
- クラスライブラリを使うことで、オブジェクト指向の考え方について知ろう。
