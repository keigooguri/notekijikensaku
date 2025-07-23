document.addEventListener('DOMContentLoaded', () => {
    const allArticles = [
      {
        "url": "https://note.com/kei5_kaigophoto/n/n921198e2a38a?magazine_key=mc802ac54e4b6",
        "title": "#1 名前が覚えられなくても大丈夫！介護現場で信頼関係を築く確実な方法",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n7b479fa3da2a?magazine_key=mc802ac54e4b6",
        "title": "#2 介護の現場で失敗を恐れないために！成長につながる考え方",
        "tags": ["職員マネージメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/necd262467651",
        "title": "#3 体力的にきついと感じる介護士でも大丈夫！効果的な休息と回復 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n01337ae1c4ab",
        "title": "#4 コミュニケーションが苦手な介護士でも大丈夫！心を伝える技術",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/ne1e242d50855",
        "title": "#5 利用者さんからの怒りに振り回されない！不安の裏返しを理解 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n107667518f26",
        "title": "#6 介護現場の壁を乗り越える方法 - 先輩介護士が教える悩み解決の ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n597c5e535b6f",
        "title": "#13 経営者の言葉が救う：介護職員の心に届く感謝伝達法",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n4d02a115b348",
        "title": "#16 経営者の孤独を癒す：職員の声に耳を傾けるリーダーシップの実践方法",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n00efd803e3b1",
        "title": "#17 タイムカード前の\"雑談タイム\"こそ本音が聞ける瞬間—施設長が ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n4ea961d0fd2d",
        "title": "#18 任せ上手になろう！自分でやりすぎる介護施設経営者が成長 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n669b0a0deea6",
        "title": "#21 心の栄養剤「ありがとう」で変わる職場環境 〜感謝の言葉が生み出す介護現場の力〜",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n37d528da4fad",
        "title": "#23 職員育成の秘訣：失敗を許容し成長を促す介護リーダーの心得 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/ndcabf3788e16",
        "title": "#24 「できない理由」から「やりやすい方法」へ、質問一つで変わる介護現場の関係性改善術",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/na6d8c90fef42",
        "title": "#27 数字だけでは伝わらない 介護現場のモチベーション維持術",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n0b8c9e70e2d4",
        "title": "#28 あなたの沈黙が生む不安 - 介護施設スタッフを安心させる ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n3ce5ef05205a",
        "title": "#29 「見えない苦労を認めるだけで職員は輝く」〜スタッフの心に ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n369e9f25475e",
        "title": "#30 面談で本音を引き出す技術：介護職員の離職を防ぐ信頼関係の ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n9529c1c08b2a",
        "title": "#31 忙しくても大丈夫！介護現場の「感情」を向上させる実践 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n8bd0645432a1",
        "title": "#33 マニュアルを超えた介護職員育成法 - 考える余地が自立した人材 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nd0ae2edcc484",
        "title": "#34 介護施設の問題職員対応に悩む経営者へ - 職場の信頼関係を守る ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n39c4fcc328ae",
        "title": "#36 職員の安心感が利用者の笑顔を生む！現場の”心の安全”を高める ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nef4ce6525b47",
        "title": "#38 「正解がわからなくても」スタッフを大切にする選択が介護施設を変える",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n9683b827d5f3",
        "title": "#43 【経営者と学ぶ姿勢】介護現場を変える最初の一歩は、トップ ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n6fa3772454ad",
        "title": "#44 人が育つ職場は「任せ方」が9割！介護施設スタッフの成長を ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nf540e3c91675",
        "title": "#47 職員の可能性を信じる姿勢が介護施設の未来を変える - 経営者の信頼が生み出す驚きの効果",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nc935cf6fe613",
        "title": "#50 経営理念が伝わらない？施設長の&quot;想い&quot;を介護スタッフに届ける ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nebc32efac17b",
        "title": "#52完璧を求めない教育制度が介護施設のスタッフ定着率を上げる ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n646c242cf32f",
        "title": "#54 現場の混乱を激減させる「伝わる情報共有」の実践術｜小栗 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nc9fc53fd729e",
        "title": "#55 職員の声が響く会議で信頼を築く経営術",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n4047810c8e56",
        "title": "#56 介護職員のやる気を引き出す経営者の声かけ術～「無理」を ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n6393409b109e",
        "title": "#57 職員への「お願い」が生む成長の循環 - 介護施設運営を変える ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nccf0c8d4e38e",
        "title": "#58 クレーム対応で失敗しない！介護施設のチーム信頼を守る3つの ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n526e81e2a25b",
        "title": "#60 忙しさに埋もれる前に気づきたい、職員の心を掴む経営術 ... - note",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n95999ba9c6d8",
        "title": "#62 問題職員の声に耳を傾けて職場の信頼関係を築く - 介護施設運営 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n366b89ce1886",
        "title": "#65 スタッフが自ら考えて動く介護施設の作り方｜指示待ち介護士 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n9b5e905ac1ec",
        "title": "#66 介護施設経営の迷いを解消する「職員笑顔」判断法 ～経営判断に困った時のシンプルな解決策～",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n847c05d5faa2",
        "title": "#68 職員の本音を引き出す傾聴力 - 信頼構築の実践術",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n3e85d6629df2",
        "title": "#70 評価制度の迷いを解消する承認文化の力 - 数値より「見てくれ ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n81e9076d8e85",
        "title": "#71 苦手な職員がいても大丈夫。経営者が身につけるべき”公平接触 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n903fafc6cd70",
        "title": "#73 介護職員の疲れに気づいたら｜制度改善よりも効果的な「ねぎらいの一言」実践法",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nf5af5a7b2b30",
        "title": "#75 問題職員の指導を後回しにしない経営術 - 真面目なスタッフを ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n50016aaa8a87",
        "title": "#76 制度では変わらない職場の雰囲気を、たった一言で劇的に改善 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n557c462af9f5",
        "title": "#84 介護士の想いを大切にした施設運営術 〜スタッフの心を支える ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n3ad67ac5710b",
        "title": "#85 職員ミス対応で施設の未来が変わる！信頼関係構築の実践 ... - note",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nad7b9ec588d3",
        "title": "#86 経営者の想いが届かない時こそ見直したい「背中で語る ... - note",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nd229b97eda41",
        "title": "# 89介護施設の隠れた声を聞き取る技術 ～スタッフ定着の鍵は ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n242552025c2b",
        "title": "#90 ポスターを貼るだけでは変わらない！介護施設の雰囲気を根本 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n51d6952ae7e0",
        "title": "#93 指導者の心の重荷を軽くする方法 〜教える側を支えるメンタル ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n6be495f755e2",
        "title": "#96 失った信頼を取り戻す秘訣 | 介護施設経営者が実践すべき信頼 ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n65208d3b45fd",
        "title": "#99 経営者の心の余裕が現場を救う｜介護施設運営で大切にしたい ...",
        "tags": ["職員マネジメント"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n2652aee53de1",
        "title": "#7 「人が辞めない介護施設」を作る秘訣 - 20年のベテランが教える職員の心をつかむ伝え方",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n722e5ca7332f",
        "title": "#8 介護士定着の真実：離職を繰り返さないチーム作りのヒント",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n299170088d1b",
        "title": "#9 人材難を乗り切る施設づくり：職員定着率を高める7つの実践法",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n4c0b9539c77a",
        "title": "#10 採用コストの重荷を解消！介護職員の定着率アップで成功する施設経営の秘訣",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n61a4c2ba401f",
        "title": "#11 介護スタッフの退職を防ぐ！たった15分の面談が生み出す安心感と定着率向上の秘訣",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nb8e7ba532c2e",
        "title": "#14 採用が変わる：現場の心をつかむ介護施設の求人戦略",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/na4a3c065705a",
        "title": "#15 退職希望の不安を和らげる：介護職員の心に寄り添う離職防止術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n2a3cc521a28d",
        "title": "#19 介護施設における職員定着率アップの秘訣 〜人が辞める本当の理由と居場所づくり〜",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n2eaa27118009",
        "title": "#22 介護経営者の悩みを解消！職員満足度がサービス継続の鍵となる理由",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n03243f01d84f",
        "title": "#25 【教える側の疲弊を解消】指導者へのサポートが介護職員の定着率を高める秘訣",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nad53d6714e68",
        "title": "#26 介護現場の「安心」が生み出す最強の職場環境〜福利厚生よりも大切なこと〜",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nfc6711ee0d1c",
        "title": "#32 【介護施設経営者必見】人材定着の真因は制度ではなく人間関係にあった！現場視点の改善策",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n68ac4639efb5",
        "title": "#35 「頼れる体制が生む安心感」～自分がいなくても回る介護施設の作り方～",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nf5ca02f71796",
        "title": "#39 介護職員の退職理由を理解し、前向きな組織文化を創る方法",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nac661f97ad8d",
        "title": "#40 コミュニケーション技術が決め手！介護職員の信頼関係構築法と定着率アップの秘訣",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n6ab277899010",
        "title": "#41 介護施設の採用に悩む経営者へ - 「働きたくなる職場づくり」の再発見術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n53e7b8074da5",
        "title": "#42 介護職員の強みを評価する方法 - 定着率アップのための肯定的アプローチ",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n7fff74f2a434",
        "title": "#45 人材が定着する介護施設の真髄 - 経営者が気づくべき「人」を中心とした運営のヒント",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/ncd8ab90d6730",
        "title": "#46 介護現場の雰囲気が180度変わる！小さな声かけが生み出す大きな定着効果",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nc248810952c7",
        "title": "#48 介護職員が「この仕事、やっててよかった」と感じる瞬間を創り出す施設運営術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n1874d7a4b6bc",
        "title": "#49 「職員の心をつかむ あたたかいリーダーシップで解決する介護施設の人材定着",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n34a8bd6d766f",
        "title": "#51 職員の離職に悩む介護施設経営者へ：定着率を上げる職場環境づくりの実践法",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n1feac168f146",
        "title": "#59 辞めた職員が「戻ってきたい」と言われる職場の作り方〜介護施設の真の魅力を引き出す定着支援術〜",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n3545f2c16acf",
        "title": "#61 経営者の「ありがとう」がスタッフの心を掴む - 介護施設の人材定着術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n1c5d6eb0ee30",
        "title": "#63 スタッフの自信不足が招く離職問題を解決する、成功体験積み重ね術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n3c7e484d0b66",
        "title": "#64 「人が足りない」その前に。今いる介護職員が輝ける職場環境の作り方",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/na0b2d4427293",
        "title": "#67 施設の雰囲気を変える職員の安心感づくり - 声かけから生まれる定着力",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n7a34dcee8aff",
        "title": "#69 介護スタッフの退職相談｜引き止めより理由を聞く対話術で職場改善",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n0a31542aa241",
        "title": "#72 スタッフが辞めない職場の共通点｜雑談が生む定着率向上の仕組み",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n22eac2ce0fd5",
        "title": "#74 優秀な介護職員ほど「心の居場所」を重視する理由とスタッフ定着の新常識",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n5b134572999c",
        "title": "#77 スタッフの離職に悩む経営者必見！現場に足を運ぶだけで変わる職場環境改善術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nc46d9886f93e",
        "title": "#79 介護施設の「いつも通り」を変える！スタッフが自然と定着する心地よい現場作りの技術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n06e30867675e",
        "title": "#80 一人辞めると「連鎖退職の空気」に？初動対応で施設を守る3つの鉄則",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n6715f132b5da",
        "title": "#81 経営者の何気ない一言が職場を変える　言葉選びで実現するスタッフ定着術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n52ee50376ba8",
        "title": "#82 介護施設でスタッフが定着する温かなコミュニケーション術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n369e3486f65e",
        "title": "#83 現場のベテランが辞める前に知っておきたい、スタッフ定着の本当の秘訣",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nc9f6394dc0b4",
        "title": "#87 スタッフが辞めない施設の秘密 - 働きがいを生み出す経営者の視点転換術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n8d5416f69f35",
        "title": "#88 スタッフが辞めない施設の秘訣：「できない」を「できる」に変える関係づくり",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n19320d4d4538",
        "title": "#91 介護職員の成長を焦らない経営者が実践する「信じて見守る」スタッフ定着術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n7c187747ec71",
        "title": "#94 給与アップが難しくても大丈夫！介護士が「ずっとここで働きたい」と思う職場づくりの秘訣",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n025644afb0e9",
        "title": "#95 職員が辞めない施設の秘密｜求人広告より大切な「今いる人」を輝かせる定着術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nd876402b35ab",
        "title": "#97 スタッフが「また明日も来たい」と思える職場づくり｜介護施設の離職率を下げる空気感作りの実践法",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n7b0675a57895",
        "title": "#98 スタッフの心が離れる前に気づく力。制度より大切な「寄り添い技術」",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n47f80164eb35",
        "title": "#100 職員の声を活かす場づくりが施設運営の鍵｜意見しやすい環境で定着率向上",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nac1b513a9f55",
        "title": "#101 ベテラン職員の心の声を聞けば、介護施設の人材定着は変わる",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/ne7e14931cc55",
        "title": "#102 職員の家庭を支えることが、施設の未来を変える理由",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n78e06baa85d6",
        "title": "#103 スタッフが辞めない職場の秘密：「働けてよかった」と思える瞬間を意図的に生み出す経営術",
        "tags": ["人材確保と定着"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n354af6f35e79",
        "title": "#12 介護施設経営者が知るべき真実：利益を出すことで職員を守る経営術",
        "tags": ["収益の安定化"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n2e6562a858e9",
        "title": "#20 経営危機を乗り越える笑顔の力 〜数字だけでは見えない介護現場の本質〜",
        "tags": ["収益の安定化"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nb53fcfd8cff4",
        "title": "#78 利益追求への罪悪感を手放す！介護施設の健全経営で職員を守る方法",
        "tags": ["収益の安定化"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/nc1a75ff34a0c",
        "title": "#92 売上だけじゃない！介護施設経営の真の安定は職員の安心感が決める",
        "tags": ["収益の安定化"]
      },
      {
        "url": "https://note.com/kei5_kaigophoto/n/n4ef4dbd124a6",
        "title": "#37 【介護施設経営のマラソン術】疲れたときこそ歩いていい - 長期視点で考える施設運営の極意",
        "tags": ["未来への不安"]
      }
    ];

    const tagButtons = document.querySelectorAll('.tag-btn');
    const searchButton = document.getElementById('search-btn');
    const resultsList = document.getElementById('results-list');
    const resultsContainer = document.getElementById('results-container');

    let selectedTags = [];

    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const tag = button.getAttribute('data-tag');
            if (selectedTags.includes(tag)) {
                selectedTags = selectedTags.filter(t => t !== tag);
            } else {
                selectedTags.push(tag);
            }
        });
    });

    searchButton.addEventListener('click', () => {
        if (selectedTags.length === 0) {
            alert('検索するハッシュタグを1つ以上選択してください。');
            return;
        }

        const filteredArticles = allArticles.filter(article => {
            return selectedTags.every(tag => article.tags.includes(tag));
        });

        displayResults(filteredArticles);
    });

    function displayResults(articles) {
        resultsList.innerHTML = '';

        if (articles.length === 0) {
            resultsList.innerHTML = '<li>該当する記事が見つかりませんでした。</li>';
        } else {
            articles.forEach(article => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = article.url;
                link.textContent = article.title;
                link.target = '_blank'; // リンクを新しいタブで開く
                listItem.appendChild(link);
                resultsList.appendChild(listItem);
            });
        }
        resultsContainer.style.display = 'block';
    }
});