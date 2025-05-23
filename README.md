# Blood Bank Management System

Un système de gestion de banque de sang développé avec **Spring Boot** pour le backend et **Angular 8** pour le frontend.

## 🩸 Objectif

Ce projet vise à gérer efficacement les donneurs de sang, les stocks de sang, les hôpitaux et les utilisateurs du système. Il comprend l'authentification avec Spring Security et JWT.

---

## 🛠️ Technologies Utilisées

### Backend :
- Java 11
- Spring Boot 2.5.0
- Spring Data JPA
- Spring Security
- MySQL
- JWT (JSON Web Tokens)
- Lombok
- H2 (base de données embarquée pour les tests)

### Frontend :
- Angular 8 (dans un dossier séparé, non inclus ici)

## 📁 Structure du projet

 src/
├── main/
│   ├── java/
│   │   └── com.application.bloodbankmanagement/
│   │       ├── controller/       # Gère les requêtes HTTP
│   │       ├── model/            # Contient les entités JPA (classes de base de données)
│   │       ├── repository/       # Interfaces JPA pour accéder aux données
│   │       ├── security/         # Configuration de la sécurité (JWT, filtres, etc.)
│   │       └── service/          # Logique métier
│   └── resources/
│       ├── application.properties # Configuration de l'application
│       └── static/                # Contenu statique (si utilisé)
└── test/                          # Tests unitaires et d’intégration


## ⚙️ Configuration du Backend

### Fichier `application.properties` :
```properties
server.port=8080

spring.datasource.url=jdbc:mysql://localhost:3306/bloodbanksystem
spring.datasource.username=root
spring.datasource.password=Gowthamraj@258

spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL55Dialect
