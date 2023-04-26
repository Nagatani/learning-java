---
title: java.util.Scannerクラスの解説
---

標準入力から文字列を取得する場合に使用しているScannerクラスの解説を通じて、公式ドキュメントの見方や、調べ方などを学びましょう。

## 標準入力

現在標準入力から文字列を受け取るプログラムを作成する際、`java.util.Scanner`クラスを使用しています。  
Scannerが実装されるまでは、すべて`BufferedReader`を使用して、`System.in`の標準入力を`InputStreamReader`を経由して受け取る方法で行ってきました。

Scannerクラスが実装された現在では、画面からのデータの入力はScannerクラスを使用すれば事足りるようになりました。

### Scanner以前の標準入力

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BufferedReaderSample {
  public static void main(String[] args) throws IOException {
    // ↑検査例外であるIOExceptionは、InputStreamReaderなどの入出力関連プログラムで発生します。
    // 本来例外処理を適切に行わなければなりませんが、このメソッド内ではその例外発生時に対処できないため
    // throws構文を用いて例外を呼び出しもとへ伝播させます。

    // InputStreamReaderをSystem.inから生成 (InputStreamReaderは1byteずつ順次読み込み)
    InputStreamReader isr = new InputStreamReader(System.in);
    // 改行コードが送信されるまで待ち、
    // バッファに溜め込んでおいてくれるBufferedReaderをInputStreamReaderから生成
    BufferedReader bf = new BufferedReader(isr);

    // 改行コードが送信されるのを待って1行分をString型として返す
    String str = bf.readLine();

    // 入力された文字列をそのまま出力する
    System.out.println(str);

  }
}
```

## Scannerクラス

次のAPIドキュメントを見てください。

- <a href="https://docs.oracle.com/javase/jp/17/docs/api/java.base/java/util/Scanner.html" target="_blank">Scanner (Java SE 17 & JDK 17 )</a>

Scannerクラスには、一行ごとに文字列を読み取ることはもちろんのこと、文字通り入力された文字列をスキャンして指定された型として認識できるものを受け取る方法があります。

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);  // IOExceptionは内部でコントロールされているため発生しない
    System.out.println("文字列を入力してください。");
    String str = in.nextLine();
    System.out.println("入力した文字列は " + str + " です。");
  }
}
```

上記プログラムでは、今までの入力方法と同じく1行ずつ画面から入力させることが可能です。 `str`には、入力された1行の文字が入ります。

Scannerクラスは、これの他に、型を指定して値を受け取ることが可能です。  
いくつかサンプルを挙げます。

### 文字を複数分けて読み取り

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    System.out.println("単語を２つスペースで区切って入力してください。");
    String str1 = in.next();
    String str2 = in.next();
    System.out.println("入力した単語１は " + str1 + " です。");
    System.out.println("入力した単語２は " + str2 + " です。");
  }
}
```

Scannerクラスでは、通常半角スペースの空白文字をデリミタとします。

上記例では、以下の様な実行結果になります。

```bash
単語を２つスペースで区切って入力してください。
aaa bbb
入力した単語１は aaa です。
入力した単語２は bbb です。
```

これで1行に複数の値を持たせることが可能になります。

また、標準ではデリミタは半角スペースになっていますが、以下のメソッドで変更可能です。

```java
in.useDelimiter(",");
```

上記のコードを`next()`メソッドの前に呼び出しておくことで、以下のようなカンマ区切りでの標準入力が作成できます。

```bash
単語を２つカンマで区切って入力してください。
aaa,bbb
入力した単語１は aaa です。
入力した単語２は bbb です。
```

### 入力された値を整数として複数分けて読み取り

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    System.out.println("整数を２つ入力してください。");
    int x = in.nextInt();
    int y = in.nextInt();
    System.out.println("入力した整数１は " + x + " です。");
    System.out.println("入力した整数２は " + y + " です。");
  }
}
```

上記サンプルで、以下の様な処理が実現できます。

```bash
整数を２つ入力してください。
10 20
入力した整数１は 10 です。
入力した整数２は 20 です。
```

#### 入力された文字列が対応する型でなかった場合

上記サンプルで、以下のように数値以外を入力させた場合は`java.util.InputMismatchException`が発生します。

```bash
整数を２つ入力してください。
あああ いいい
Exception in thread "main" java.util.InputMismatchException
	at java.util.Scanner.throwFor(Scanner.java:864)
	at java.util.Scanner.next(Scanner.java:1485)
	at java.util.Scanner.nextInt(Scanner.java:2117)
	at java.util.Scanner.nextInt(Scanner.java:2076)
	at scannersample.ScannerSample.main(ScannerSample.java:23)
/Users/Nagatani/Library/Caches/NetBeans/8.1/executor-snippets/run.xml:53: Java returned: 1
```

この例外は、実行時例外ですので、厳密にtry構文を使用しなくても良いです。

ただし、標準入力のように型が判断できない文字列を入力されることが想定される場合は、きちんとtry構文を使用して例外処理を書きましょう。

以下のように例外処理を入れてあげることができます。


```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    System.out.println("整数を２つ入力してください。");
    try {
      int x = in.nextInt();
      System.out.println("入力した整数１は " + x + " です。");
      int y = in.nextInt();
      System.out.println("入力した整数２は " + y + " です。");
    } catch(InputMismatchException e) {
      System.out.println("入力された文字列は整数値に変換できません");
    }
  }
}
```

例外処理については、後ほどじっくりと解説いたします。

### 他の型
Scannerクラスでは、Stringやintの他に、以下の型での変換が可能です。

| 型 | 対応するnextメソッド |
|---|---|
| `byte` | `nextByte()` |
| `short` | `nextShort()` |
| `long` | `nextLong()` |
| `float` | `nextFloat()` |
| `double` | `nextDouble()` |
| `boolean` | `nextBoolean()` |

対応している型は、Stringとプリミティブ型全部です。

### Scannerクラスのメリット

なんといっても、IOExceptionが発生しないことです。

そもそもターミナルなどからキーボードによる入力を受け付ける標準入力では、IOExceptionはなかなか発生しにくいです。
新しく追加されたScannerクラスは、検査例外であるIOExceptionではなく、実行時例外しか出力しないようになっています。

ただし、Scannerクラスには、`IOException ioException()`メソッドが定義されており、必要に応じてIOExceptionを取り出すことも可能です。例外が発生していない場合には、nullが返されます。

これだけで、メソッドの宣言時に、***throws*** が要らないという素晴らしいメリットがあります。
