
# Kiwi-mustache-example

This is a sample project that uses kiwi-maven-plugin, along with mustache as template engine and esbuild as bundler


## Project Structure

```
.
├── config.mjs
├── node_modules
├── package.json
├── package-lock.json
├── pom.xml
├── README.md
├── src
│   ├── main
│   │   ├── java
│   │   │   └── org
│   │   │       └── example
│   │   │           ├── App.java
│   │   │           └── GreetingController.java
│   │   ├── react
│   │   │   ├── Greeting.tsx
│   │   │   ├── Info.tsx
│   │   │   └── Loading.tsx
│   │   └── resources
│   │       ├── application.properties
│   │       ├── static
│   │       │   └── vendor
│   │       │       ├── bootstrap
│   │       │       │   ├── css
│   │       │       │   └── js
│   │       │       └── other
│   │       └── templates
│   │           └── greeting.mustache
│   └── test
│       └── java
└── tsconfig.json
```


## Maven Plugins

### Kiwi-maven-plugin

used to generate html and js code

```xml
<plugin>
    <groupId>org.github.jmorla</groupId>
    <artifactId>kiwi-maven-plugin</artifactId>
    <version>1.0-SNAPSHOT</version>
    <configuration>
        <templatePrefix>mustache</templatePrefix>
    </configuration>
    <executions>
        <execution>
        <id>Generate Kiwi sources</id>
        <goals>
            <goal>generate</goal>
        </goals>
        </execution>
        <execution>
        <id>Clean Kiwi sources</id>
        <goals>
            <goal>clean</goal>
        </goals>
        </execution>
    </executions>
</plugin>
```

### exec-maven-plugin
Used to execute esbuild command right after kiwi plugin is executed

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>exec-maven-plugin</artifactId>
    <version>3.1.1</version>
    <executions>
        <execution>
        <id>Bundle javascript</id>
        <goals>
            <goal>exec</goal>
        </goals>
        <phase>compile</phase>
        <configuration>
            <executable>npm</executable>
            <arguments>
            <argument>run</argument>
            <argument>build</argument>
            </arguments>
        </configuration>
        </execution>
    </executions>
</plugin>
```


## important files

* pom.xml Contains java dependencies and plugins configuration
* config.mjs Constains Esbuild configuration to build the entrypoints
* tsconfig.json Contains paths that esbuild uses to find react Componentes