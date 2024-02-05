FROM nginx:mainline AS Web-base

# ポート開放
EXPOSE 80 443

# OpenSSLのインストール
RUN apt-get update && apt-get install -y openssl

# nginx.confのコピー
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


FROM Web-base AS Web-dev

# confディレクトリのコピー
COPY ./nginx/conf_dev/ /etc/nginx/conf/


FROM Web-base AS Web-prod

# confディレクトリのコピー
COPY ./nginx/conf_prod/ /etc/nginx/conf/


FROM python:3.9.18 AS app-base

# ポート開放
EXPOSE 8000

# requirements.txtのコピー
COPY ./python/requirements.txt /var/www/app/requirements.txt

# requirements.txtのインストール
RUN pip install --no-cache-dir -r /var/www/app/requirements.txt

FROM app-base AS node-install

# Node.jsのインストール
COPY --from=node:lts  /usr/local/bin/node /usr/local/bin/node
COPY --from=node:lts  /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:lts  /usr/local/bin/npm /usr/local/bin/npm

# npm用のシンボリックリンクを作成
RUN ln -s /usr/local/lib/node_modules/npm/lib/cli.js /usr/local/lib/cli.js
