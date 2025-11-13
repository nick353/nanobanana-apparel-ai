# ===== ビルドステージ =====
# Node.js 20 の環境を準備
FROM node:20-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# nanobanana-siteフォルダのpackage.jsonをコピー
COPY nanobanana-site/package*.json ./

# 依存関係をインストール
RUN npm install

# nanobanana-siteフォルダの全ファイルをコピー
COPY nanobanana-site/ ./

# 本番用にビルドを実行
RUN npm run build


# ===== 公開ステージ =====
# Caddy サーバーの環境を準備
FROM caddy:2-alpine

# ビルドステージから、ビルド済みのファイル（distフォルダの中身）をコピー
COPY --from=builder /app/dist /usr/share/caddy/dist

# Caddyfileをコピー
COPY Caddyfile /etc/caddy/Caddyfile
