# jooq

h1. JOOQ

h1. jOOQ-codegen

將 pom 的 jdbc.url 指到到對應的 sqlite (jdbc:sqlite:db.sqlite)
$ mvn compile

會在 generator.target.directory 產生table,recored的class (target/generated-sources/)
<pre>
├── DefaultSchema.java
├── Keys.java
├── Tables.java
└── tables
    ├── Otccreditauction.java
    ├── Tfxfutexe.java
    ├── Tfxfutmajoi.java
    ├── Tfxhugebargain.java
    ├── Tfxhugecombine.java
    ├── Tfxhugepersymbol.java
    ├── Tfxhugesingle.java
    ├── Tfxii3.java
    ├── Tfxii3callput.java
    ├── Tfxii3fut.java
    ├── Tfxii3futopt.java
    ├── Tfxii3opts.java
    ├── Tfxnormaldetail.java
    ├── Tfxnormaltrade.java
    ├── Tfxnvix.java
    ├── Tfxopt.java
    ├── Tfxoptdelta.java
    ├── Tfxoptdetail.java
    ├── Tfxoptexe.java
    ├── Tfxoptmajoi.java
    ├── Tfxovix.java
    ├── Tfxpcratio.java
    ├── Tfxsettle.java
    ├── Tfxsprddetail.java
    ├── Tfxsprdsymorder.java
    ├── Tfxsprdtrade.java
    └── records
        ├── OtccreditauctionRecord.java
        ├── TfxfutexeRecord.java
        ├── TfxfutmajoiRecord.java
        ├── TfxhugebargainRecord.java
        ├── TfxhugecombineRecord.java
        ├── TfxhugepersymbolRecord.java
        ├── TfxhugesingleRecord.java
        ├── Tfxii3Record.java
        ├── Tfxii3callputRecord.java
        ├── Tfxii3futRecord.java
        ├── Tfxii3futoptRecord.java
        ├── Tfxii3optsRecord.java
        ├── TfxnormaldetailRecord.java
        ├── TfxnormaltradeRecord.java
        ├── TfxnvixRecord.java
        ├── TfxoptRecord.java
        ├── TfxoptdeltaRecord.java
        ├── TfxoptdetailRecord.java
        ├── TfxoptexeRecord.java
        ├── TfxoptmajoiRecord.java
        ├── TfxovixRecord.java
        ├── TfxpcratioRecord.java
        ├── TfxsettleRecord.java
        ├── TfxsprddetailRecord.java
        ├── TfxsprdsymorderRecord.java
        └── TfxsprdtradeRecord.java
</pre>

<pre><code class="xml">
<?xml version="1.0" ?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>clod</groupId>
    <artifactId>jooq</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <jdk.version>1.8</jdk.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.jooq</groupId>
            <artifactId>jooq</artifactId>
            <version>3.4.2</version>
        </dependency>
        <dependency>
            <groupId>org.jooq</groupId>
            <artifactId>jooq-meta</artifactId>
            <version>3.4.2</version>
        </dependency>
        <dependency>
            <groupId>org.jooq</groupId>
            <artifactId>jooq-codegen</artifactId>
            <version>3.4.2</version>
        </dependency>
        <dependency>
            <groupId>org.xerial</groupId>
            <artifactId>sqlite-jdbc</artifactId>
            <version>3.7.15-M1</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.jooq</groupId>
                <artifactId>jooq-codegen-maven</artifactId>
                <version>3.4.2</version>

                <dependencies>
                    <dependency>
                        <groupId>org.xerial</groupId>
                        <artifactId>sqlite-jdbc</artifactId>
                        <version>3.7.15-M1</version>
                    </dependency>
                </dependencies>

                <executions>
                    <execution>
                        <goals>
                            <goal>generate</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <jdbc>
                        <driver>org.sqlite.JDBC</driver>
                        <url>jdbc:sqlite:db.sqlite</url>
                        <user></user>
                        <password></password>
                    </jdbc>
                    <generator>
                        <name>org.jooq.util.DefaultGenerator</name>
                        <database>
                            <name>org.jooq.util.sqlite.SQLiteDatabase</name>
                            <includes>.*</includes>
                            <excludes></excludes>
                            <inputSchema></inputSchema>
                        </database>
                        <target>
                            <packageName>xxx.yyy</packageName>
                            <directory>target/generated-sources/</directory>
                        </target>
                    </generator>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>

</code></pre>
