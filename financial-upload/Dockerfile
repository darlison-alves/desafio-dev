FROM openjdk:8-jdk-alpine

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} app.jar

EXPOSE 5432

COPY db ./
COPY mvnw ./

ENTRYPOINT ["java","-jar","/app.jar"]