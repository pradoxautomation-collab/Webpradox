# Estágio 1: Build da aplicação React/Vite
FROM node:20-alpine as build

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependência
COPY package.json package-lock.json ./

# Instalar dependências (forçando devDeps se necessário para buildar)
RUN npm ci --legacy-peer-deps

# Copiar todo o código do projeto
COPY . .

# Fazer o build da aplicação para /app/dist
RUN npm run build

# Estágio 2: Configurar o Servidor Nginx
FROM nginx:alpine

# Copiar a configuração customizada do Nginx para suportar o React Router (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos estáticos gerados no build para a pasta que o Nginx serve
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 do contêiner
EXPOSE 80

# Iniciar o Nginx no foreground
CMD ["nginx", "-g", "daemon off;"]
