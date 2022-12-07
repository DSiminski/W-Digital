# Imagem de Origem
FROM node:13-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
RUN npm install react 
RUN npm install react-scripts@3.3.1 -g 
RUN npm install react-router-dom
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install react-redux
RUN npm install @reduxjs/toolkit

# Inicializa a aplicação
CMD ["npm", "start"]
