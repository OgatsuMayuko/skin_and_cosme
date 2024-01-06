Vue.filter('number_format', function(val) {
    return val.toLocaleString();
  });
  
  var app = new Vue ({
      el: '#app',
    data: {
        itemsPerPage: 3,
          currentPage: 1,
      //チェック状態 true:チェックあり false:チェックなし
      showcover: false,
      showfaunda: false,
      showtone: false,
      showsoap: false,
      showallergy: false,
      showpatch: false,
      showcomedo: false,
      showstinging : false,
      showchemical: false,
      showalcohol : false,
      showpetro: false,
      showsynthe: false,
      showparaben : false,
      showmineral: false,

      showtuya: false,
  
      showSPFPA: false,

      //「並び替え」の選択値 1:標準 2:価格が安い順・・・
      sortOrder: 1,
      budget:10000,

      selectedProduct: null,
        favorites: [],

      // 商品リスト
      products: [
  
          {
              id: 32,
              normal: "T",
              desert: "T",
              sensitive: "T",
              name: "MINON Amino Moist ブライトアップベース UV",
              maker: "第一三共ヘルスケア",
              brand: "MINON",
              URL: "https://amazon.co.jp/dp/B00SAS1BAW?tag=mybest_presses_7933-22",
              img: "img/picdata32.png",
              officialURL: "https://www.daiichisankyo-hc.co.jp/site_minon-aminomoist/products/au.html",
              price: 1373,
              perprice: 54.92,
              gram: 25,
              memo1: "紫外線、乾燥などから肌を守る化粧下地。肌色を自然な明るさに補整。",
              color: 1,
              compo: "水、シクロペンタシロキサン、酸化チタン、ジフェニルシロキシフェニルトリメチコン、PEG-9ポリジメチルシロキシエチルジメチコン、ミリスチン酸オクチルドデシル、トリエチルヘキサノイン、ペンチレングリコール、BG、セチルPEG/PPG-10/1ジメチコン、ジステアルジモニウムヘクトライト、トリメチルシロキシケイ酸、ラウロイルリシン、(ビニルジメチコン/メチコンシルセスキオキサン)クロスポリマー、塩化Na、水酸化Al、ステアリン酸、トリポリヒドロキシステアリン酸ジペンタエリスリチル、ラウロイルグルタミン酸ジ(フィトステリル/オクチルドデシル)、トリベヘニン、フェノキシエタノール、(ジメチコン/ビニルジメチコン)クロスポリマー、トコフェロール、グリチルレチン酸ステアリル、メチコン、ソルビトール発酵多糖、ナイロン-12、シリカ、メドウフォーム油、カルノシン、タウリン、グリセリン、リシンHCl、ポリクオタニウム-61、グルタミン酸、グリシン、ロイシン、ヒスチジンHCl、セリン、バリン、酸化スズ、アスパラギン酸Na、トレオニン、アラニン、イソロイシン、アラントイン、フェニルアラニン、アルギニン、プロリン、チロシン、イノシン酸2Na、グアニル酸2Na、タルク、ジメチコン、窒化ホウ素、酸化鉄",
              SPF: 0,
              PA: "+++",
              state: "つや",
              
              memo2: "肌がもつ天然由来の保湿因子であるNMFの約半分を構成するアミノ酸を豊富に含んでいるうえ、肌荒れ防止作用のあるグリチルレチン酸ステアリルも配合",
              toneup:1,	cover:1,	faundation:1,	soap:1,	patchtest:1,	allergytest:1,	noncomedogenictest:1,	alcoholfree:1,	parabenfree:1,	nonchemicalprescription:1,	syntheticfragrancefree:1,	mineraloilfree:1,	petroleumbasedsurfactantfree:1,	stingingtest:1,

            },
            {
              id: 35,
              normal: "T",
              desert: "T",
              sensitive: "T",
              name: "ミネラルプラスベース",
              maker: "ヤーマン",
              brand: "ONLY　MINERALS",
              URL: "https://amazon.co.jp/dp/B014SMYYIE?tag=mybest_presses_7933-22",
              img: "img/picdata35.png",
              officialURL: "https://www.onlyminerals.jp/products/base-makeup/mineral-plus-base.html",
              price: 3080,
              perprice: 123.2,
              gram: 25,
              memo1: "厳選されたミネラルと天然由来成分100%を使用。ノンケミカル処方でありながら、SPF27/PA+++で日常の紫外線から肌を守ります。",
              color: 2,
              compo: "水、プロパンジオール、酸化チタン、グリセリン、イソステアリン酸イソステアリル、オクチルドデカノール、ジステアリン酸ポリグリセリル-10、ステアリン酸ソルビタン、水酸化AL、イソステアリン酸、レウコノストック/ダイコン根発酵液、トリイソステアリン酸ポリグリセリル-2、キサンタンガム、ステアロイルグルタミン酸NA、パルミチン酸デキストリン、ヤシ脂肪酸スクロース、水酸化K、トコフェロール、シア脂、ケイ酸 (AL/MG)、ステアリン酸グリセリル (SE)、アルカリゲネス産生多糖体、ミリスチン酸ポリグリセリル-10、ステアリン酸グリセリル、トリ (カプリル酸/カプリン酸) グリセリル、ラミナリアオクロロイカエキス、セイヨウニワトコ花エキス、アスコフィルムノドスムエキス、センチフォリアバラ花エキス、アルゲエキス、(+/-)、ラウロイルリシン、酸化鉄、グンジョ",
              SPF: 27,
              PA: "+++",
              state: "つや",
              toneup: 1,
              cover: 1,
              soap: 1,
              alcoholfree: 1,
              parabenfree: 1,
              nonchemicalprescription: 1,
              syntheticfragrancefree: 1,
              mineraloilfree: 1,
              petroleumbasedsurfactantfree: 1,
              delv: 0, isSale: true ,
  
              memo2: "ミネラル成分と天然由来成分のみで作られた商品で、植物エキスが豊富に含まれている。"
            },
            {
              id: 36,
              normal: "T",
              desert: "T",
              mix: "T",
              sensitive: "T",
              name: "なめらか本舗 スキンケアUV下地",
              maker: "常盤薬品工業",
              brand: "SANA",
              URL: "https://amazon.co.jp/dp/B08TB33W7P?tag=mybest_presses_7933-22",
              img: "img/picdata37.png",
              officialURL: "https://noevirgroup.jp/sana/g/g70076/",
              price: 1100,
              perprice: 22,
              gram: 50,
              memo1: "スキンケア・日焼け止め・化粧下地の3役を担う。肌への刺激が少ない成分となめらか本舗オリジナルの豆乳発酵液が、素肌にうるおいを与えます。",
              color: 3,
              compo: "水、酸化亜鉛、シクロペンタシロキサン、ＢＧ、ジカプリン酸ネオペンチルグリコール、グリセリン、ＰＥＧ－９ポリジメチルシロキシエチルジメチコン、豆乳発酵液、ダイズ種子エキス、ダイズタンパク、 グリチルリチン酸２Ｋ、テトラ（ヒドロキシステアリン酸／イソステアリン酸）ジペンタエリスリチル、シリカ、レシチン、バチルアルコール、（ＰＥＧ－２４０／デシルテトラデセス－２０／ＨＤＩ）コポリマー、エタ ノール、エチルヘキシルグリセリン、キサンタンガム、クエン酸、ジェランガム、ステアリン酸、トコフェロール、トリ（カプリル酸／カプリン酸）グリセリル、ハイドロゲンジメチコン、ポリアクリル酸アンモニウ ム、ポリリノール酸スクロース、マイカ、水酸化Ａｌ、フェノキシエタノール、酸化チタン、酸化鉄",
              SPF: 40,
              PA: "+++",
              state: "つや",
              toneup: 1,
              cover: 1,
              soap: 1,
              patchtest: 1,
              allergytest: 1,
              parabenfree: 1,
              nonchemicalprescription: 1,
              syntheticfragrancefree: 1,
              mineraloilfree: 1,
              delv: 4, isSale: true ,
              memo2: "保湿成分として豆乳発酵液・ダイズ種子エキスが配合されているほか、肌荒れ防止作用があるグリチルリチン酸2Kも入っている。ただし、酸化亜鉛で肌が荒れやすい人は注意。"
            },
            {
              id: 37,
              normal: "T",
              desert: "T",
              mix: "T",
              sensitive: "T",
              name: "スキンモイスチャーベース",
              maker: "オルビス",
              brand: "ORBIS",
              URL: "https://www.amazon.co.jp/dp/B07HN2LK5X?tag=mybest_presses_7933-22",
              img: "img/picdata37.png",
              officialURL: "https://www.orbis.co.jp/small/1253050/",
              price: 1540,
              perprice: 51.333333333333336,
              gram: 30,
              memo1: "うるおいベールがファンデの粉体とピタッと密着することで、仕上がりの美しさと化粧もちが格段にUP。ファンデの仕上がりを格上げし、美しくキープします。",
              color: 1,
              compo: "水、シクロペンタシロキサン、BG、酸化チタン、グリセリン、シクロヘキサシロキサン、ジフェニルシロキシフェニルトリメチコン、ベヘニルアルコール、ジメチコン、ヒアルロン酸ヒドロキシプロピルトリモニウム、ハチミツ、トコフェロール、ベントナイト、シリカ、含水シリカ、タルク、ポリクオタニウム-61、(アクリル酸アルキル/ジメチコン)コポリマー、ホウケイ酸(Ca/Na)、酸化銀、ハイドロゲンジメチコン、ポリアクリル酸Na、水酸化Al、キサンタンガム、ペンタステアリン酸ポリグリセリル-10、ポリグリセリル-3ポリジメチルシロキシエチルジメチコン、トリステアリン酸ポリグリセリル-10、ステアロイルラクチレートNa、クエン酸、セスキイソステアリン酸ソルビタン、ココグリセリル硫酸Na、メチルパラベン、プロピルパラベン、酸化鉄",
              SPF: 28,
              PA: "+++",
              state: "matto",
              toneup: 1,
              allergytest: 1,
              nonchemicalprescription: 1,
              syntheticfragrancefree: 1,
              mineraloilfree: 1,
              delv: 0, isSale: true ,
              memo2: "ハチミツのほかには、特徴的な保湿成分は入っていない。"
            },
      ] 
  },
  computed: {
      // 絞り込み後の商品リストを返す算出プロパティ
      filleredList: function() {
        
        
        // 絞り込み後の商品リストの格納
        var newList = [];
        for (var i = 0; i < this.products.length; i++) {
          var isShow = 1;
          // i番目の商品が表示対象か判定
  
  
          // 「つや」チェックありで、つやではない場合
          if (this.showtuya && this.products[i].state !=="つや") {
            isShow = false;
          }
          if (this.showcover && this.products[i].cover !==1) {
            isShow = false;
          }
          if (this.showfaunda && this.products[i].faundation !==1) {
            isShow = false;
          }
          if (this.showtone && this.products[i].toneup !==1) {
            isShow = false;
          }
          if (this.showsoap && this.products[i].soap !==1) {
            isShow = false;
          }
          if (this.showallergy && this.products[i].allergytest !==1) {
            isShow = false;
          }
          if (this.showpatch && this.products[i].patchtest !==1) {
            isShow = false;
          }
          if (this.showcomedo && this.products[i].noncomedogenictest !==1) {
            isShow = false;
          }
          if (this.showstinging && this.products[i].stingingtest !==1) {
            isShow = false;
          }
          if (this.showchemical && this.products[i].nonchemicalprescription !==1) {
            isShow = false;
          }
          if (this.showalcohol && this.products[i].alcoholfree !==1) {
            isShow = false;
          }
          if (this.showpetro && this.products[i].petroleumbasedsurfactantfree !==1) {
            isShow = false;
          }
          if (this.showsynthe && this.products[i].syntheticfragrancefree !==1) {
            isShow = false;
          }
          if (this.showparaben && this.products[i].parabenfree !==1) {
            isShow = false;
          }
          if (this.showmineral && this.products[i].mineraloilfree !==1) {
            isShow = false;
          }
        
  
          //日焼け止め効果ありにチェックが入っててSPFが0の場合
          if (this.showSPFPA && this.products[i].SPF == 0) {
              isShow = false;
            }
            
          // 表示対象の商品だけを新しい配列に追加する
          if (isShow) {
            newList.push(this.products[i]);
          }
        }
        // 並び替え機能
        if (this.sortOrder == 1) {
  
        }
        else if (this.sortOrder == 2) {
          // 価格が安い順に並び替える
          newList.sort(function(a,b) {
            return a.price - b.price;
          });
        }
        else if (this.sortOrder == 3) {
          // 価格が高い順に並び替える
          newList.sort(function(a,b) {
            return b.price - a.price;
          });
      }else if (this.sortOrder == 4) {
              // コスパが高い順に並び替える
              newList.sort(function(a,b) {
                return a.perprice - b.perprice;
              });
        }
       
        // 絞り込み後の商品リストを返す
        return newList;
     
      },
      totalPages() {
        return Math.ceil(this.filleredList.length / this.itemsPerPage);
      },
      paginatedList() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filleredList.slice(start, end);
      },
    },
    methods: {
        nextPage() {
          if (this.currentPage < this.totalPages) {
            this.currentPage++;
          }
        },
        prevPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        },
        showDetails: function(product) {
            // モーダル表示のロジックを追加
            
            alert(`Showing details for product: ${product.name}\nPrice: ${product.price}\nBrand: ${product.brand}`);
            console.log("Showing details for product: ", product);
        },
        addToFavorites: function(product) {
            this.favorites.push(product);
          },
          removeFromFavorites: function(product) {
            this.favorites = this.favorites.filter(fav => fav.id !== product.id);
          },
          isFavorite: function(product) {
            return this.favorites.some(fav => fav.id === product.id);
          },
    }

  });
  
