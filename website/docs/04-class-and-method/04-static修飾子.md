---
title: static修飾子
sidebar_position: 4
---

クラスのフィールドやメソッドをクラスをインスタンス化することなく使用したい場合はstatic修飾子を使う

## static
毎度おなじみmainメソッドに指定してある修飾子です。

これは、そのメソッドやフィールドが **静的** であることを表しています。
「静的である」とは、プログラム実行時にメモリへすべて展開され、共有されます。
クラスを実体化（インスタンス化）しなくても、アクセスできる状態を指します。

static修飾子は、フィールドやメソッドに設定できます。

### staticなフィールド、メソッド
それぞれ、**クラスフィールド** 、**クラスメソッド** と呼ばれます。

### staticなフィールドの注意点
クラスフィールドは、プログラム実行時にすべてがメモリに展開され、**共有** されます。
共有されるということは、インスタンスを複数作成して、それぞれのインスタンスからクラスフィールドに対して操作を加えた場合、相互に影響しあうこととなります。

`new`演算子を使って、複数のインスタンスを作成したとしても、クラスフィールドに対する操作は、すべてのインスタンスに影響を及ぼしてしまいます。

サンプルソースを以下に載せておきます。

ファイル名: `MyClass.java`

```java
public class MyClass {
  public static int value;   //このフィールドは、すべてのインスタンスで共有される
  public int getValue() { return value; }
}
```

ファイル名: `MyClassTest.java`

```java
public class MyClassTest {
  public static void main(String[] args) {

    MyClass.value = 1;

    MyClass m1 = new MyClass();
    MyClass m2 = new MyClass();

    System.out.println("MyClassの値：" + MyClass.value);
    System.out.println("MyClass m1の値：" + m1.getValue());
    System.out.println("MyClass m2の値：" + m2.getValue());

    m1.value = 2;
    System.out.println("m1.value = 2;を実行");
    System.out.println("MyClassの値：" + MyClass.value);
    System.out.println("MyClass m1の値：" + m1.getValue());
    System.out.println("MyClass m2の値：" + m2.getValue());

    m2.value = 3;
    System.out.println("m2.value = 3;を実行");
    System.out.println("MyClassの値：" + MyClass.value);
    System.out.println("MyClass m1の値：" + m1.getValue());
    System.out.println("MyClass m2の値：" + m2.getValue());

  }
}
```

実行結果は以下のようになります。

```
$ javac MyClassTest.java
$ java MyClassTest
MyClassの値：1
MyClass m1の値：1
MyClass m2の値：1
m1.value = 2;を実行
MyClassの値：2
MyClass m1の値：2
MyClass m2の値：2
m2.value = 3;を実行
MyClassの値：3
MyClass m1の値：3
MyClass m2の値：3
```

すべてのインスタンスで共有されていることがわかると思います。


## mainメソッドを見てみよう
javaコマンドで実行しているmainメソッドを持つクラスは、インスタンス化してない状態で実行できています。

mainメソッドには、必ずstatic修飾子が付きます。
つまり、プログラム実行時にインスタンス化をしなくても勝手にメモリに展開されているためインスタンス化の必要がありません。

## staticメソッドの注意点

static修飾子のついたメソッドは、クラスをインスタンス化しなくても（`new`演算子でクラス変数に代入しなくても）直接呼び出すことが可能です。
`System.out.println`や、`Math.abs`などがそうです。

ただし、static修飾子のついたメソッド内では、**static修飾子がついていない同じクラスのフィールドやメソッドを使って状態を操作することはできません。**

staticが付いているものだけはメモリに展開されていますが、それ以外のフィールドやメソッドはnew演算子を使いインスタンス化しメモリに展開する必要があります。
staticなメソッドから動的なフィールドを操作しようとするとコンパイルエラーになりますのでご注意ください。

(じゃあ全部staticで良いじゃないか。とお考えの方、それ、C言語と何が違いますかね？大規模なプログラムやデータになりすべてをメモリに展開しきれなくなった場合どうしますか？それでできてしまうプログラムはオブジェクト指向言語で作らなくても良くないですか？)

## まとめ
staticは静的なフィールドやメソッドを作成したい場合に使用します。

staticは便利な反面、影響範囲を良く理解しないと危険です。
乱用は避けましょう。
