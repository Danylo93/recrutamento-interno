# Etapa 1: Construir a aplicação Angular
FROM node:20 AS build

WORKDIR /app

# Copiar os arquivos do projeto para o container
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto e fazer a build
COPY . .
RUN npm run build --prod

# Etapa 2: Servir a aplicação usando o servidor Nginx
FROM nginx:alpine

# Copiar os arquivos de build do Angular para o diretório padrão do Nginx
COPY --from=build /app/dist/recrutamento-interno/browser /usr/share/nginx/html

# Copiar o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
