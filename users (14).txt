# CyanideNW PayTR Kurulum

Bu paket Node.js/Express için hazır PayTR iFrame ödeme sistemi ekler.

## Paketler
- VIP = 100 TL
- VIP+ = 200 TL

## Dosyaları projeye koyma
Bu klasördeki dosyaları kendi projenin ana klasörüne kopyala:

- `server.js`
- `package.json`
- `lib/rcon.js`
- `public/payment.html`
- `public/payment-success.html`
- `public/payment-fail.html`
- `.env.example`

Eski `server.js` dosyan varsa önce yedeğini al.

## .env ayarı
`.env.example` dosyasını `.env` olarak kopyala ve doldur:

```env
BASE_URL=https://seninsiten.com
PAYTR_MERCHANT_ID=...
PAYTR_MERCHANT_KEY=...
PAYTR_MERCHANT_SALT=...
PAYTR_TEST_MODE=1
PAYTR_DEBUG_ON=1

RCON_ENABLED=false
RCON_HOST=127.0.0.1
RCON_PORT=25575
RCON_PASSWORD=...
```

Canlıya geçerken:

```env
PAYTR_TEST_MODE=0
PAYTR_DEBUG_ON=0
```

## PayTR panelinde Bildirim URL
PayTR panelinde Bildirim URL / Callback URL olarak şunu yaz:

```txt
https://seninsiten.com/paytr/callback
```

Başarılı URL:

```txt
https://seninsiten.com/payment-success.html
```

Başarısız URL:

```txt
https://seninsiten.com/payment-fail.html
```

## Çalıştırma

```bash
npm install
npm start
```

Ödeme sayfası:

```txt
http://localhost:3000/payment.html
```

## Minecraft otomatik VIP verme
Sunucunda `server.properties` içinde:

```properties
enable-rcon=true
rcon.port=25575
rcon.password=GÜÇLÜ_BİR_ŞİFRE
```

Sonra `.env` içinde:

```env
RCON_ENABLED=true
RCON_HOST=SUNUCU_IP
RCON_PORT=25575
RCON_PASSWORD=GÜÇLÜ_BİR_ŞİFRE
VIP_GROUP=vip
VIP_PLUS_GROUP=vipplus
```

Ödeme başarılı olunca şu komut çalışır:

```txt
lp user OyuncuAdi parent add vip
lp user OyuncuAdi parent add vipplus
```

## Önemli güvenlik notu
Sipariş teslimi sadece `/paytr/callback` içinde yapılır. `payment-success.html` sadece bilgi sayfasıdır.
