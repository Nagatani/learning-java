---
title: 学習用RPGの作成(SimpleRPG)
---

今回作成するプログラムは、「継承」や「抽象クラス」、「インターフェイス」を学ぶための基礎的なプログラムになります。

まず、いままで学んだクラスやメソッドの書き方を使って、テキストベースのRPGのようなものを作成します。

この仕様に沿ったプログラムのソースコードは、資料として配布いたします。  
ソースコードをこの資料と照らし合わせて良く読んでください。

## RPGの基礎部分を作成する

### 作成するところ

1. 攻撃結果クラスの作成
2. 勇者クラスの作成
    1. 勇者の攻撃メソッド作成
    2. 勇者がダメージを受けるメソッド作成
3. 敵クラスの作成
    1. 敵の攻撃メソッド作成
    2. 敵がダメージを受けるメソッド作成
4. メインクラスの作成
    1. 勇者生成メソッド作成
    2. 敵生成メソッド作成
    3. 勇者クラスの行動メソッド作成
    4. 敵クラスの行動メソッド作成
    5. 勇者と敵キャラの戦闘メソッド作成
    6. メインメソッド作成

### プロジェクト設定

+ プロジェクト名
    - `SimpleRPG`
+ パッケージ
    - `jp.ac.learning`

# 詳細仕様

## 攻撃結果クラス (AttackResult.java)

攻撃行動の結果を返すために用意するクラスです。
下記コードを使ってください。※パッケージ構文は、各自のパッケージ名に変更すること

```java
package jp.ac.learning;
/**
 * 行動後の戻り値
 */
public class AttackResult {
    public static final int BATTLE_END = 1;
    public static final int CONTINUE = 0;
    /**
     * 攻撃によって与えたダメージ
     */
    public int damage = 0;
    /**
     * アクション後の戦闘状態
     * 初期値は継続とする
     */
    public int state = CONTINUE;
}
```


## 勇者クラス (Hero.java)

勇者のステータス、行動を定義するクラス

### フィールド

- `private String name` - 名前
- `private int hp` - 体力
- `private int atk` - 攻撃力
- `private int def` - 防御力
- `private int agi` - 素早さ

### コンストラクタ

+ `public Hero(String name, int hp, int atk, int def, int agi)`
    - それぞれ引数の値で初期値セット

### メソッド
#### アクセサメソッド(get○○のみ実装)

+ `public String getName()` - 名前を返す
+ `public int getHp()`  - HPを返す
+ `public int getAtk()` - ATKを返す
+ `public int getDef()` - DEFを返す
+ `public int getAgi()` - AGIを返す

#### 行動制御メソッド

+ `public AttackResult attack(Enemy target)`
    - 敵に対して攻撃を行う処理を実装します。
    - 下記与えるダメージの計算式にしたがって計算されたダメージ量を引数の相手に与えます。
    - 戻り値は、AttackResultのインスタンスを生成し、ダメージ量と戦闘続行かどうかの状態をAttackResultの定数フィールドを使って設定して返します。
+ `public boolean receiveDamage(int damage)`
    - 勇者がダメージを受ける。（勇者のインスタンスから呼び出さず、敵であるEnemyから呼ばれる）
    - フィールドのhpから引数のダメージ分を減算し、0を下回る場合はhpに0を代入する。  
    戻り値はダメージを受けたあとのHPが0以下の場合trueを返し、戦闘続行不可能とする。

## 敵クラス (Enemy.java)

敵のステータス、行動を定義するクラス

### フィールド

- `private String name` - 名前
- `private int hp` - 体力
- `private int atk` - 攻撃力
- `private int def` - 防御力
- `private int agi` - 素早さ

### コンストラクタ

+ `public Enemy(String name, int hp, int atk, int def, int agi)`
    - それぞれ引数の値で初期値セット

### メソッド
#### アクセサメソッド(get○○のみ実装)

+ `public String getName()` - 名前を返す
+ `public int getHp()`  - HPを返す
+ `public int getAtk()` - ATKを返す
+ `public int getDef()` - DEFを返す
+ `public int getAgi()` - AGIを返す

#### 行動制御メソッド

+ `public AttackResult attack(Hero target)`
    - 勇者に対して攻撃を行う処理を実装します。
    - 下記の与えるダメージの計算式にしたがって計算されたダメージ量を引数の相手に与えます。
    - 戻り値は、AttackResultのインスタンスを生成し、ダメージ量と戦闘続行かどうかの状態をAttackResultの定数フィールドを使って設定して返します。
+ `public boolean receiveDamage(int damage)`
    - 敵がダメージを受けます。（敵自身のインスタンスから呼び出さず、勇者であるHeroから呼ばれます）
    - フィールドのhpから引数のダメージ分を減算し、0を下回る場合はhpに0を代入します。  
    戻り値はダメージを受けたあとのHPが0以下の場合trueを返し、戦闘続行不可能とします。

## 与えるダメージの計算式

与えられるダメージ計算は`攻撃を行うオブジェクトの攻撃力`から`攻撃されるオブジェクトの防御力 ÷ 2`（小数点以下切り上げ）を減算し、ランダムに`-3`〜`+3`の変化を持たせた数値をそのままHPに対して減算する形式とします。

プログラム中では以下のように計算を行ってください。

```java
        // 引数の攻撃対象targetに対して与えることのできるダメージを算出
        // 与えるダメージ = 自身の攻撃力 - 敵の防御力 / 2 (小数点以下切り上げ) に、-3〜+3のランダムな値を加算
        int damage = (int)Math.ceil((double)this.getAtk() - (target.getDef() / 2.0))
                + (new java.util.Random().nextInt(7) - 3); // ← −3〜+3のランダムな値
```

小数点以下切り上げの方法は、`Math.ceil()`を使います。

#### キャラクター生成時のパラメータ初期値について

キャラクターのパラメータは、次の表にまとめられた範囲に従いランダムに決定させます。

##### 勇者の場合

| パラメータ | ランダム範囲 |
|:--------:|:----------:|
| HP | 80 〜 120 |
| ATK | 8 〜 15 |
| DEF | 8 〜 15 |
| AGI | 8 〜 15 |


##### 敵の場合

| パラメータ | ランダム範囲 |
|:--------:|:----------:|
| HP | 50 〜 200 |
| ATK | 10 〜 20 |
| DEF | 5 〜 15 |
| AGI | 10 〜 20 |


## メインクラス(SimpleRPG.java)
mainメソッドを持つクラス  
画面表示や画面からの入力は、すべてこのクラス内で行います。

### フィールド

- `Hero hero`
- `Enemy enemy`

### コンストラクタ
なし

### メソッド

- `Hero createHero()`
    + 勇者を生成して返すメソッド
    + 名前を画面から入力させ、それ以外のパラメータは後述するランダムでのパラメータ決定に従いインスタンスを生成し返します
- `Enemy createEnemy()`
    + メソッド内部に、`final String[] ENEMY_NAMES = {"敵1", "敵2", "敵3", "敵4", "敵5"};` のように敵キャラクターの名前を定めた配列を用意し、敵の名前はこの配列よりランダムで選ばれます。
    + 名前は上記配列からランダムで決定し、それ以外のパラメータは後述するランダムでのパラメータ決定に従いインスタンスを生成し返します
- `boolean heroAction()`
    + 勇者の1回分の行動決定と行動を行わせるメソッド
    + 画面より、攻撃か逃亡かを選択させ、その行動結果を画面に表示します
    + 戻り値は、行動により戦闘続行可否をbooleanで返します
- `boolean enemyAction()`
    + 敵の1回分の攻撃行動を行わせるメソッド（敵は攻撃の行動のみ行います）
    + 戻り値は、行動により戦闘続行可否をbooleanで返します
- `void battleLoop()`
    + 戦闘処理の無限ループを用意します
    + 無限ループ内では、勇者と敵の素早さを比較し行動順序を入れ替え、それぞれの行動を行います
    + 行動により戦闘続行不可能になった場合は、その場で無限ループを抜け、メソッドを終了します
- `public static void main(String[] args)`
    + メインメソッド
    + 下記のフローに従い、上記メソッドを利用してゲームの流れを実装します
- その他必要に応じて追加してもよい

### mainメソッドでの処理の流れ

mainメソッド内でのゲームの進行（主要な部分のみ）は以下のフローにしたがってください。

![](/docs/07/SimpleRPG-Flow.png)



## SimpleRPGの動作確認

今回は、このゲームが動作することを大前提として以降の実習を行います。

サンプルプログラムを以下に提示しておきます。

###  攻撃結果クラス (AttackResult.java)

<details><summary>クリックで表示する</summary>
<p>

```java
package jp.ac.learning;

/**
 * 行動後の戻り値
 */
public class AttackResult {
    public static final int BATTLE_END = 1;
    public static final int CONTINUE = 0;
    /**
     * 攻撃によって与えたダメージ
     */
    public int damage = 0;
    /**
     * アクション後の戦闘状態
     * 初期値は継続とする
     */
    public int state = CONTINUE;
}

```
</p>
</details>


### 勇者クラス (Hero.java)

<details><summary>クリックで表示する</summary>
<p>

```java
package jp.ac.learning;

public class Hero {

    private String name; // - 名前
    private int hp; // - 体力
    private int atk; // - 攻撃力
    private int def; // - 防御力
    private int agi; // - 素早さ

    /**
     * 各ステータスを指定して初期化
     * @param name
     * @param hp
     * @param atk
     * @param def
     * @param agi
     */
    public Hero(String name, int hp, int atk, int def, int agi) {
        // それぞれ引数の値で初期値セット
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.agi = agi;
    }

    public String getName() {
        return name;
    }

    public int getHp() {
        return hp;
    }

    public int getAtk() {
        return atk;
    }

    public int getDef() {
        return def;
    }

    public int getAgi() {
        return agi;
    }

    public AttackResult attack(Enemy target) {
        // 敵に対して攻撃を行う処理を実装します。

        // 引数の攻撃対象targetに対して与えることのできるダメージを算出
        // 与えるダメージ = 自身の攻撃力 - 敵の防御力 / 2 (小数点以下切り上げ) に、-3〜+3のランダムな値を加算
        int damage = (int)Math.ceil((double)this.getAtk() - (target.getDef() / 2.0))
                + (new java.util.Random().nextInt(7) - 3); // ← −3〜+3のランダムな値

        // 与えるダメージの計算式に従って計算されたダメージ量を引数の相手に与えます。
        boolean isBattleEnd = target.receiveDamage(damage);

        // 戻り値は、AttackResultのインスタンスを生成し、ダメージ量と戦闘続行かどうかの状態をAttackResultの定数フィールドを使って設定して返します。
        AttackResult ret = new AttackResult();
        ret.damage = damage;
        if (isBattleEnd) {  // 戦闘が終わる場合により詳細な状態を渡したい
            ret.state = AttackResult.BATTLE_END;
        } // CONTINUE は初期値なので、ENDの場合のみ設定すればOK
        return ret;
    }

    /**
     * ダメージを受ける
     * @param damage 受けるダメージ量
     * @return 戦闘続行可能な場合 false , 不可能な場合 true
     */
    public boolean receiveDamage(int damage) {
        // 勇者がダメージを受ける。(自分で呼び出さず、敵であるEnemyから呼ばれる)

        // フィールドのhpから引数のダメージ分を減算し、
        this.hp -= damage;

        // 0を下回る場合はhpに0を代入する。
        if (this.hp <= 0) {
            this.hp = 0;
            // 戻り値はダメージを受けたあとのHPが0以下の場合trueを返し、戦闘続行不可能とする。
            return true;
        }
        // HPはまだ残っているので、戦闘は続行
        return false;
    }
}
```
</p>
</details>

### 敵クラス (Enemy.java)

<details><summary>クリックで表示する</summary>
<p>

```java
package jp.ac.learning;

public class Enemy {

    private String name; // - 名前
    private int hp; // - 体力
    private int atk; // - 攻撃力
    private int def; // - 防御力
    private int agi; // - 素早さ

    /**
     * 各ステータスを指定して初期化
     * @param name
     * @param hp
     * @param atk
     * @param def
     * @param agi
     */
    public Enemy(String name, int hp, int atk, int def, int agi) {
        // それぞれ引数の値で初期値セット
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.agi = agi;
    }

    public String getName() {
        return name;
    }

    public int getHp() {
        return hp;
    }

    public int getAtk() {
        return atk;
    }

    public int getDef() {
        return def;
    }

    public int getAgi() {
        return agi;
    }

    public AttackResult attack(Hero target) {
        // 敵に対して攻撃を行う処理を実装します。

        // 引数の攻撃対象targetに対して与えることのできるダメージを算出
        // 与えるダメージ = 自身の攻撃力 - 敵の防御力 / 2 (小数点以下切り上げ) に、-3〜+3のランダムな値を加算
        int damage = (int)Math.ceil((double)this.getAtk() - (target.getDef() / 2.0))
                + (new java.util.Random().nextInt(7) - 3); // ← −3〜+3のランダムな値

        // 与えるダメージの計算式に従って計算されたダメージ量を引数の相手に与えます。
        boolean isBattleEnd = target.receiveDamage(damage);

        // 戻り値は、AttackResultのインスタンスを生成し、ダメージ量と戦闘続行かどうかの状態をAttackResultの定数フィールドを使って設定して返します。
        AttackResult ret = new AttackResult();
        ret.damage = damage;
        if (isBattleEnd) {  // 戦闘が終わる場合により詳細な状態を渡したい
            ret.state = AttackResult.BATTLE_END;
        } // CONTINUE は初期値なので、ENDの場合のみ設定すればOK
        return ret;
    }

    /**
     * ダメージを受ける
     * @param damage 受けるダメージ量
     * @return 戦闘続行可能な場合 false , 不可能な場合 true
     */
    public boolean receiveDamage(int damage) {
        // 勇者がダメージを受ける。(自分で呼び出さず、敵であるEnemyから呼ばれる)

        // フィールドのhpから引数のダメージ分を減算し、
        this.hp -= damage;

        // 0を下回る場合はhpに0を代入する。
        if (this.hp <= 0) {
            this.hp = 0;
            // 戻り値はダメージを受けたあとのHPが0以下の場合trueを返し、戦闘続行不可能とする。
            return true;
        }
        // HPはまだ残っているので、戦闘は続行
        return false;
    }
}
```
</p>
</details>


### メインクラス(SimpleRPG.java)

<details><summary>クリックで表示する</summary>
<p>

```java
package jp.ac.learning;

import java.util.Random;
import java.util.Scanner;

public class SimpleRPG {

    // このクラスでは、画面からの入力をいろいろなメソッドで行うため、
    // フィールド化しておく
    final static Scanner scanner = new Scanner(System.in);

    Hero hero;
    Enemy enemy;

    /**
     * 勇者を生成して返すメソッド
     * @return 勇者オブジェクト
     */
    Hero createHero() {

        //勇者の名前を入力させます
        System.out.println("勇者の名前を入力");
        String name = scanner.nextLine();

        // 以下の表に従ってパラメータを生成
        Hero hero = new Hero( // パラメータ	ランダム範囲
                name,
                new Random().nextInt(41) + 80,  // HP	80 〜 120
                new Random().nextInt(8) + 8,   // ATK	8 〜 15
                new Random().nextInt(8) + 8,   // DEF	8 〜 15
                new Random().nextInt(8) + 8);  // AGI	8 〜 15

        return hero;
    }

    /**
     * 敵を生成して返すメソッド
     * @return 敵オブジェクト
     */
    Enemy createEnemy() {

        final String[] ENEMY_NAMES = {"敵1", "敵2", "敵3", "敵4", "敵5"};

        // 上記配列から、ランダムに1つだけの名前を抽出して敵の名前とする。
        String name = ENEMY_NAMES[new Random().nextInt(ENEMY_NAMES.length)];

        Enemy enemy = new Enemy( // パラメータ	ランダム範囲
                name,
                new Random().nextInt(151) + 50,  // HP  	50 〜 200
                new Random().nextInt(11) + 10,  // ATK	10 〜 20
                new Random().nextInt(11) + 5,   // DEF	5 〜 15
                new Random().nextInt(11) + 10); // AGI	10 〜 20

        return enemy;

    }

    /**
     *  勇者の行動
     * @return falseの場合続行不能
     */
    boolean heroAction() {
        // 勇者の1回分の行動決定と行動を行わせるメソッド

        // 画面より、攻撃か逃亡かを選択させ、その行動結果を画面に表示します
        System.out.println("勇者の行動を決めてください(1: 攻撃, それ以外: 逃亡)");
        String input = scanner.nextLine();

        if (input.equals("1")) {
            // 攻撃だった場合
            AttackResult ret = hero.attack(enemy);
            System.out.println(enemy.getName() + "に" + ret.damage + "のダメージ");
            if (ret.state == AttackResult.BATTLE_END) {
                // 戦闘終了
                System.out.println(enemy.getName() + "を倒しました。ゲームクリア。");
                return false; // 続行不能
            }
            // 戻り値は、行動により戦闘続行可否をbooleanで返します
            return true;
        } else {
            // 逃亡だった場合
            System.out.println(hero.getName() + "は逃亡しました。ゲームオーバー");
            return false; // 続行不能
        }
    }

    /**
     *  敵の行動
     * @return falseの場合続行不能
     */
    boolean enemyAction() {
        // 敵の1回分の攻撃行動を行わせるメソッド（敵は攻撃の行動のみ行います）
        // 攻撃だった場合
        AttackResult ret = enemy.attack(hero);
        System.out.println(hero.getName() + "に" + ret.damage + "のダメージ");
        if (ret.state == AttackResult.BATTLE_END) {
            // 戦闘終了
            System.out.println(hero.getName() + "は無残にも倒れてしまった。ゲームオーバー");
            return false; // 続行不能
        }
        // 戻り値は、行動により戦闘続行可否をbooleanで返します
        return true;
    }

    /**
     *  行動のループ処理
     */
    void battleLoop() {
        //戦闘処理の無限ループを用意します
        while(true) {
            // 無限ループ内では、勇者と敵の素早さを比較し行動順序を入れ替え、それぞれの行動を行います
            // 行動により戦闘続行不可能になった場合は、その場で無限ループを抜け、メソッドを終了します
            if (hero.getAgi() >= enemy.getAgi()) {
                // 勇者のほうが早い
                if (!heroAction()) return;
                if (!enemyAction()) return;
            } else {
                if (!enemyAction()) return;
                if (!heroAction()) return;
            }
        }
    }

    public static void main(String[] args) {
        SimpleRPG app = new SimpleRPG();

        app.hero = app.createHero();
        System.out.println("勇者: " + app.hero.getName() + " HP:" + app.hero.getHp() + " ATK:" + app.hero.getAtk() + " DEF:" + app.hero.getDef() + " AGI:" + app.hero.getAgi());
        app.enemy = app.createEnemy();
        System.out.println("敵　: " + app.enemy.getName() + " HP:" + app.enemy.getHp() + " ATK:" + app.enemy.getAtk() + " DEF:" + app.enemy.getDef() + " AGI:" + app.enemy.getAgi());

        app.battleLoop();
    }
}
```
</p>
</details>