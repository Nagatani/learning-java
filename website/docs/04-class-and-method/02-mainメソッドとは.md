---
title: mainメソッドとは
sidebar_position: 3
---

## mainメソッドはJavaのエントリーポイント

Javaでは「mainメソッド」がエントリーポイント（クラスを実行する際の入り口）となります。

### mainメソッドのルール

Javaのmainメソッドは、以下の条件をすべて満たしているメソッドです。

1. アクセス修飾子はpublicである
2. staticメソッドである
3. メソッドの戻り値はvoidである
4. メソッド名は“main”である（すべて小文字）
5. メソッドの引数の型はStringの配列`String[]`またはStringの可変長引数`String...`のみ（引数名はargsでなくても良い）

```java
class Main {
    public static void main(String[] args) {
        // 何かの処理
    }
}
```

```java
class Main {
    // これでもOK
    public static void main(String... arguments) {
        // 何かの処理
    }
}
```

### mainメソッドの条件はしっかりとチェックされる

mainメソッドの条件は、Javaの実行時にきっちりチェックされます。
たとえば、以下のようなものはJavaのメソッドとしては文法どおりなのでコンパイルはできますが、mainメソッドとしては認識されません。

```java
// アクセス修飾子がpublicではない
static void main(String[] args) { }
// メソッドがstaticではない
public void main(String[] args) { }
// メソッドの戻り値がvoidではない
public static int main(String[] args) { }
// メソッド名が"main"ではない
public static void Main(String[] args) { }
// 引数がStringの配列または可変長引数ではない
public static void main(String args) { }
// 引数がStringの配列だけではない(intが邪魔)
public static void main(String[] args, int intValue) { }
```
 
### 引数のString配列にパラメータが入る

mainメソッドのString配列には、Java実行時にコマンドラインで指定されたパラメータの文字列が設定されています。
※この内容は、前回の資料にあるコマンドライン引数を参照のこと

### mainメソッドを終わらせかた

mainメソッドはプログラム中で一番最初に動くものだとは言え、普通のメソッドです。

mainメソッドの最後まで処理が進めば終わりますし、途中で`return;`すれば、そのタイミングで終わらせられます。

C言語のプログラムと違い、単純にreturnした場合は、プログラムからの戻り値を指定できません。
returnで終了させてしまった場合のプログラムからの戻り値が設定される変数“ERRORLEVEL”の内容は0ですが、これはJavaの中で戻り値を指定せず、プログラム実行中にエラーが起きなかった場合に標準的な動作です。

プログラム中でエラーが起きた場合などは、戻り値をエラーの種類を表す何かの数字にしたい場合、`System.exit()`や`Runtime.exit()`を使い、引数に渡す数字でエラーを指定します。

### 戻り値を指定して終わらせる

Javaプログラムを終了させるなら、`System.exit(int)`、`Runtime.exit(int)`、`Runtime.halt(int)`が使えます。これらはmainメソッドの外でも使うことができ、実行した時点ですぐにJavaプログラム全体が終了します。

しかも、これらのクラス・メソッドを使うと、プログラムからの戻り値を整数（`int`）で指定できます。

1. `System.exit(int)`：Rutime.exit(int)と同じもの
2. `Runtime.exit(int)`：Javaプログラムを終了しますが、終了時処理がある場合は実行する
3. `Runtime.halt(int)`：Javaプログラムをすぐに終了し、終了時処理があっても実行しない

## メインメソッドまとめ

いままでおまじないのように書いていたメインメソッドの構文は、それぞれがきちんと意味のあるもので構成されています。まだ講義では教えていないアクセス制限やstatic修飾子などがあって、完全に理解するにはまだ情報が足りていないことだと思います。
この時点で知っておいてほしいことは、構文をコピペで済ませている場合に、一度貼り付けたコードの意味を知ろうとすることも知識量を増やし、結果的に技術力の向上につながる。ということです。