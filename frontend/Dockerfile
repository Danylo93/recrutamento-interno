# Utiliza a imagem oficial do Node.js para construir a aplicação
FROM node:18 AS build

WORKDIR /app

# Instala as dependências da aplicação
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Compila a aplicação Angular
RUN npm run build --prod

# Utiliza a imagem oficial do Nginx para servir a aplicação
FROM nginx:alpine

# Copia os arquivos compilados para o diretório do Nginx
COPY --from=build /app/dist/ /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para o tráfego HTTP
EXPOSE 80

# Define o comando para
