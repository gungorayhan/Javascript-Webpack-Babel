###webpack
<p align="left">
entry: Kaynak klasörümüzü burada belirtiriz.
output: İşlemleri yaptıktan sonra dosyanın nereye kaydedileceğini burada belirtiriz.
mode: Projemizi yapılandırma durumunu belirler.      (development/production)
loaders: Webpack sadece javascript ve json dosya türleriyle çalışır. Loaders ile biz diğer dosya türlerini bu dosya türlerine çevirip, kullanabiliriz. (css, png, sass, scss, jpeg vs.)
plugins: Paketlerin optimizasyonu ve ortam değişkenleri gibi değerleri projemize ekleyebiliriz.
optimization: Optimizasyon işlemlerini burada yaparız.
watch: Dosyaları izler ve bir değişiklik olduğunda paketteki oluşturulan dosyaları günceller.
</p>

### webpack
npm init -y 
npm i -D webpack
npm i -D webpack-cli 
webpack.config.js
npm i -D webpack-dev-server
npm run -D html-webpack-plugin

### babel
npm install -D babel-loader @babel/core
webpack ayarları yapılacak
.babelrc eklenecek -> hangi işlemleri yapacağımız tanımlanacak
npm i -D @babel/preset-env

npm i babel-polyfill -> çalışma zamanında işimize yarayacak bir paket. asenkron işelmelrde kullanıcalak