---
title: JavaDocによるドキュメンテーション
---


## JavaDocによるドキュメンテーション

Javaには、JavaDocと呼ばれるドキュメント（詳細仕様書）生成ツールがあります。
Oracle Javaの標準API仕様書がまさしくそのJavaDocにより生成されています。


JavaDocは、Javaのソースコードにコメントを追加することで、APIドキュメントを自動生成するためのツールです。これにより、開発者はソースコードを読むことなく、必要な情報を簡単に理解できます。JavaDocコメントは、慣習的にメソッドやクラスの宣言直前に記述されます。

### JavaDocコメントの開始と終了
JavaDocコメントは、`/**`で始まり、`*/`で終わります。たとえば以下のようなコメントになります。

```
/**
 * ここにJavaDocコメントを記述します。
 */
```

### タグの利用
JavaDocコメントでは、特定のタグを使って、さまざまな情報を追加できます。

以下は、一般的なタグの例です。

- `@author`: 作者の名前を記述します。
- `@version`: バージョン情報を記述します。
- `@param`: メソッドのパラメータについて説明します。パラメータ名と説明文を記述します。
- `@return`: メソッドが返す値について説明します。
- `@throws`/`@exception`: メソッドが投げる例外について説明します。例外クラス名と説明文を記述します。
- `@see`: 関連するクラスやメソッドへの参照を記述します。
- `@since`: 機能が追加されたバージョンを記述します。
- `@deprecated`: 非推奨の機能であることを示し、代替手段を提案します。

また、コメントの文書中にはHTMLタグを使うことも可能です。
たとえば、ドキュメントテキストの内部で改行を入れたい場合は、改行のタグ`<br>`を使うと良いでしょう。

### JavaDocコメントの例
以下は、タグを使用したJavaDocコメントをメソッドに追加した例です。

```java
/**
 * 与えられた2つの整数の和を計算して返します。
 *
 * @author Yamada Taro
 * @version 1.0
 * @param a 加算する最初の整数
 * @param b 加算する2番目の整数
 * @return 2つの整数の和
 * @since 1.0
 */
public int add(int a, int b) {
    return a + b;
}
```

このように、JavaDocコメントを適切に記述することで、他の開発者がコードを理解しやすくなります。
また、ドキュメントを自動生成することで、別途ドキュメントを作成する手間も削減できます。

ぜひ、JavaDocコメントの書き方を身につけて、チームでの開発をスムーズに進めてください。

## JavaDocの生成

以下のコードを`JarSample.java`として保存しましょう。


```java
public class JarSample {
    /**
     * 与えられた2つの整数の和を計算して返します。
     *
     * @author Yamada Taro
     * @version 1.0
     * @param a 加算する最初の整数
     * @param b 加算する2番目の整数
     * @return 2つの整数の和
     * @since 1.0
     */
    public int add(int a, int b) {
        return a + b;
    }

    /**
     * main
     *
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Hello, JAR FILE!!");
        System.out.println("add(10,20) -> " + new JarSample().add(10, 20));
    }
}
```

ターミナルで保存したディレクトリに移動し、以下のコマンドを実行しましょう。

```bash
$ javadoc -private -d doc JarSample.java
```

エラーや警告が出る場合は、修正が必要になることもあります。

`doc`ディレクトリが新たに生成されているはずですので、　`doc/index.html`をブラウザで開き、作成できたドキュメントを確認して見ましょう。

## IntelliJ IDEAでのJavaDoc生成

ツールバーの「Tools」→「Generate JavaDoc...」を選択すると、以下のウィンドウが出ます。

![](/docs/06/javadoc001.png)

以下の3点の設定を行わないと文字化けが発生することもあります。

- 「Output Directory:」には、ドキュメントを出力したい任意のディレクトリを指定します。
- 「Locale:」には`ja_JP`を指定して日本語ドキュメントとして生成します。
- 「Other command line arguments:」には、`-encoding utf8 -docencoding utf8 -charset utf8`を設定して、文字コードがUTF-8で出力されるようにしましょう。


「OK」ボタンでの生成後は、JavaDcoのコンパイルが行われ、エラーがなければ指定されたディレクトリにドキュメントが生成されています。

エラーや警告が出ている場合、必要に応じて修正と再生成を行ってください。

