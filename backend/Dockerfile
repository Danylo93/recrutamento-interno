# Utiliza a imagem oficial do Maven com JDK 17 para construir a aplicação
FROM maven:3.8.4-openjdk-17-slim AS build

WORKDIR /app

# Copia os arquivos de configuração do Maven e as dependências
COPY pom.xml .
COPY src ./src

# Compila a aplicação
RUN mvn clean package -DskipTests

# Utiliza a imagem oficial do Eclipse Temurin JRE 17 para rodar a aplicação
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copia o JAR construído para o container
COPY --from=build /app/target/*.jar app.jar

# Define o comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
