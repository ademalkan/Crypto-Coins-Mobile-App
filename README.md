# Crypto-Coins-Mobile-App

## Used Packages

- Expo CLI
- Storybook
- Jest
- Typescript
- Babel
- React Native Chart Kit
- Expo Router
- React Native Tabs
- Context Api

### Hangi paketleri kullandım ve neden ?

- Expo CLI => Locali üzerinden React Native CLI başlatırken sorun oluştu. Yoğun araştırma yaptım ancak bulduğum çözümler sorunu gideremedi bu yüzden daha fazla zaman kaybetmemek adına Expo CLI ile devam ettim.
- Storybook => Her componentin storybook'u yazıldı. Bu sayede projede mevcut olan her component tek bir ekran üzerinden takip edilebilecek ve projenin ilerleyen safhalarında ihtiyaç duyulan componentin mevcut olup olmadığı yada nasıl kullanıldığı direkt olarak tespit edilebilecek. Mevcut yazdığım storylere zamanım olmadığından nasıl kullanıldığını içeren bir detay kısmı ekleyemedim.
- Jest => Testing için Jest paketini kullandım. Bütün componentlerin ve servislerin testlerini yazdım.
- Typescript => Projeye OOP esnekliği kattım bu sayede gereksiz kod tekrarlarını önledim ve her bileşene bir kural ekledim. Hangi tipte veri gelecek nasıl kullanılabilir vs.
- Babel => Kullanmış olduğum paketlerin özellikle Storybook ve Typescript kısmının derlenmesi için babel kullandım. 
- React Native Chart Kit => Kolayca oluşturulmak istenen Chartı özelleştirebilme imkanı sunduğu için bu paketi tercih ettim.
- Expo Router => Expo CLI kullandığım için daha optimize çalıştığından dolayı Expo Router kullandım.
- React Native Tabs => Projeyi kafamda planladığımda tablar halinde bir sayfa akışı düşündüm bundan dolayı projeyi tabs templati ile başlattım.
- Context Api => Redux'ın bildiğim kadarıyla Expo'ya tam desteği yok bu yüzden Context Api kullandım. State Manament ihtiyacımı bu şekilde karşıladım. Bunun dışında servisleri Context üzerinden kullandım bu şekilde belirli bir optimizasyon da sağladım.


### Performans optimizasyonları için neler yaptım ?

* Bundler Optimizasyonlarım

- Minify => metro.config.js dosyasında minify:true değerini yazdığım kodların her derlenme işleminde otomatik minify edilmesini sağladım bu şekilde daha hızlı bir geliştirme ortamı oluşturdum.
- developmentMode => Geliştirme sırasında hızlı derlemeler yapmak için develpmentMode:false değerini verdim.

* Component Optimizasyonlarım

- Componentlerimi ve fonksiyonlarımı memorize yöntemi ile sarmaladım bu şekilde daha performanslı çalışır hale getirdim ve gereksiz renderların önüne geçtim.

* State Optimizasyonlarım

- Servislerin hepsini Context Api üzerinden çalıştırdım ve bu şekilde hem belirli bir süre hafızalama yaptım hemde bütün proje içerisinde tekrar tekrar servis isteği atılmasını önledim.

- FlatList veya VirtualizedList gibi performans odaklı liste bileşenlerini kullandım. Bu, büyük liste verilerini daha optimize bir şekilde işlemesini sağlar. Daha büyük veri yapılarında VirtualizedList kullandım ve her iki List türünede özel propsları ile daha da süreci optimize hale getirdim. 

Örneğin => initialNumToRender, maxToRenderPerBatch, updateCellsBatchingPeriod, windowSize,getItemLayout,removeClippedSubviews={true} gibi proplar ile FlatList daha performanslı çalışır hale getirildi.



## App Images

## Home

![favorite](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/85a6a2a5-430a-4a2a-8e44-49f3e5ad266d)

![home - 1](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/7e5bafb4-ba12-4bd3-8c04-2059cf64a727)


## Favorites Page

![favoritecoins](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/1aa5dc90-9ef9-4269-982e-222b6e03448a)



## Coin News Page

![coins news](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/227847fb-a951-4028-9d6d-32df1bbcb23a)


## Coin News Detail

![coins detail new](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/689460c1-7232-47fa-84db-d57d4790b1d3)


## Coin Detail

![detail](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/922b59f0-9c95-42fb-8ef7-c811533869df)

![coindetail ](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/01610d6b-364e-4430-9333-1dbf30c70ce7)

![coin detail 2](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/189024dc-04d2-47a7-bcd8-8fd2b3ed29b8)

![coins detail 2](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/a7f290e5-65f3-4836-b6f3-0a96871b763b)


## Run Test

![TESTS](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/10b7bcc0-c063-4a81-98d4-9e505145b6b0)


## Run Storybook

![storybook](https://github.com/ademalkan/Crypto-Coins-Mobile-App/assets/43451577/3888baba-f6d1-4d93-8227-d0abd83156fb)
