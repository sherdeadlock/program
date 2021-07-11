* http://hibernate.org/
* https://www.thoughts-on-java.org/category/tips/


# Hibernate

### hibernate.hbm2ddl.auto

* https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html#configurations-hbmddl

Value           | Description
----------------|--------------------------------------------------------
none            | No action will be performed.
create-only     | Database creation will be generated.
drop            | Database dropping will be generated.
create          | Database dropping will be generated followed by database creation.
create-drop     | Drop the schema and recreate it on SessionFactory startup. Additionally, drop the schema on SessionFactory shutdown.
validate        | Validate the database schema
update          | Update the database schema


WARNING: We've seen Hibernate users trying to use SchemaUpdate
to update the schema of a production database automatically.
This can quickly end in disaster and won't be allowed by your DBA.


# JPA

# @Convert

將 `Enum` 轉成自訂 `Type`

* `@JsonValue`, `@JsonCreator` 當轉成 JSON 時，將` Enum` 轉成 id，id 解回 `Enum`
* `PropertyEditorSupport` spring `@RequestParam` 並不是 JSON，所以多處理 Deserialization
* 直接在 Converter 加上 `@Converter(autoApply = true)`  會自動轉換，不用每個 Column 都加

```java
public enum ScrapReason {
	None(0, "無資料"),
	Hit(1, "撞傷"),
	Crash(2, "壓傷"),
	;

	private int _id;
	private String _name;

	ScrapReason(int id, String name) {
		_id = id;
		_name = name;
	}

	@JsonValue
	public int getId() {
		return _id;
	}

	public String getName() {
		return _name;
	}

	@JsonCreator
	public static ScrapReason valueOf(int id) {
		for (ScrapReason reason : values()) {
			if (reason._id == id)
				return reason;
		}
		return None;
	}
}

public class ScrapReasonConverter implements AttributeConverter<ScrapReason, Integer> {
	@Override
	public Integer convertToDatabaseColumn(ScrapReason attribute) {
		return attribute.getId();
	}

	@Override
	public ScrapReason convertToEntityAttribute(Integer dbData) {
		return ScrapReason.valueOf(dbData);
	}
}

public class Model {
	@Convert(converter = ScrapReasonConverter.class)
	private ScrapReason scrapNote;
}


public static class ScrapReasonBinder extends PropertyEditorSupport {
	@Override
	public void setAsText(String text) throws IllegalArgumentException {
		if (text == null || text.length() == 0) {
			setValue(null);
		} else {
			int id = Integer.parseInt(text);
			setValue(ScrapReason.valueOf(id));
		}
	}
}

@Controller
@RequestMapping("springCtrl")
public class SpringController {
	@InitBinder
	void initBinder(final WebDataBinder binder){
		binder.registerCustomEditor(ScrapReason.class, new ScrapReasonBinder());
	}
}
```

# @JsonFormat(shape = JsonFormat.Shape.OBJECT)

* 加在 enum 直接轉 JsonObject, @JsonCreator 會拿到  JsonObject

```java
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.io.IOException;


public class TestJson {

    @JsonFormat(shape = JsonFormat.Shape.OBJECT)
    public enum State {
        None(0, "None"),
        Open(1, "Open"),
        Close(2, "Close"),
        ;
        private int _id;
        private String _name;

        State(int id, String name) {
            _id = id;
            _name = name;
        }

        public int getId() {
            return _id;
        }

        public String getName() {
            return _name;
        }

        public static State valueOf(int id) {
            for (State state : values()) {
                if (state._id == id)
                    return state;
            }
            return None;
        }

        @JsonCreator
        public static State from(ObjectNode obj) {
            int id = obj.get("id").asInt();
            return valueOf(id);
        }
    }

    public static void main(String[] args) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        String sJson = mapper.writeValueAsString(State.Open);
        System.out.println(sJson);
        State state = mapper.readValue(sJson, State.class);
        System.out.println(state);
    }
}
```


# @ElementCollection

會多開一個 table OriginTableName_TypeName(origin_pk, enum_id)

```java
@ElementCollection(targetClass = ScrapReason.class, fetch = FetchType.EAGER)
@Convert(converter = ScrapReasonConverter.class)
private List<ScrapReason> scrapNote;
```


# @Index

FK 會自動加 Index

```java
@Table(
	name = "region",
	indexes = {
		@Index(name = "my_index_name",  columnList="iso_code", unique = true),
		@Index(name = "my_index_name2", columnList="name",     unique = false)
	}
)

@Table(
	name = "multi_columns",
	indexes = {
		@Index(name = "i_company_activity", columnList = "activity_id,company_id")
	}
)
```

# id serialization

如果使用 `@JsonBackReference` 避免 recursive json serialization, 可以轉成 id。
Json 轉回 Object 時，需要自己塞回 `Bar`。

```java
class Foo {
	@Transient
	Integer barId;

	@ManyToOne
	@JsonBackReference
	Bar bar;

	Integer getBarId() {
		if (bar != null) {
			return bar.getId();
		} else if (barId != null) {
			return barId;
		} else {
			return null;
		}
	}

	void setBarId(Integer barId) {
		this.barId = barId;
	}
}
```

# Inheritance

* [HANDLING ENTITIES INHERITANCE WITH SPRING DATA JPA](http://blog.netgloo.com/2014/12/18/handling-entities-inheritance-with-spring-data-jpa/)

# 保留編號

* http://stackoverflow.com/questions/14152348/generated-sequence-starts-with-1-instead-of-1000-which-is-set-in-annotation
* `ALTER TABLE tbl AUTO_INCREMENT = 100;`


# JPA

* DDL (Data Definition Language)
* cascade http://westerly-lzh.github.io/cn/2014/12/JPA-CascadeType-Explaining/
* update https://stackoverflow.com/questions/39741102/how-to-beautifully-update-a-jpa-entity-in-spring-data
    * http://modelmapper.org/ dto mapping
    * https://github.com/DozerMapper/dozer dto mapping
    * http://mapstruct.org/ dto mapping
* DAO.save id=0 會新增一筆

Annotation              | Description
------------------------|------------------------------------------------------------
@Entity	                | This annotation specifies to declare the class as entity or a table.
@Table                  | This annotation specifies to declare table name.
@Basic                  | This annotation specifies non constraint fields explicitly.
@Embedded               | This annotation specifies the properties of class or an entity whose value instance of an embeddable class.
@Id                     | This annotation specifies the property, use for identity (primary key of a table) of the class.
@GeneratedValue         | This annotation specifies, how the identity attribute can be initialized such as Automatic, manual, or value taken from sequence table.
@Transient              | This annotation specifies the property which in not persistent i.e. the value is never stored into database.
@Column                 | This annotation is used to specify column or attribute for persistence property.
@SequenceGenerator      | This annotation is used to define the value for the property which is specified in @GeneratedValue annotation. It creates a sequence.
@TableGenerator         | This annotation is used to specify the value generator for property specified in @GeneratedValue annotation. It creates a table for value generation.
@AccessType             | This type of annotation is used to set the access type. If you set @AccessType(FIELD) then Field wise access will occur. If you set @AccessType(PROPERTY) then Property wise assess will occur.
@JoinColumn             | This annotation is used to specify an entity association or entity collection. This is used in many- to-one and one-to-many associations.
@UniqueConstraint       | This annotation is used to specify the field, unique constraint for primary or secondary table.
@ColumnResult           | This annotation references the name of a column in the SQL query using select clause.
@NamedQueries           | This annotation is used for specifying list of named queries.
@NamedQuery             | This annotation is used for specifying a Query using static name.
@DiscriminatorColumn    |
@DiscriminatorValue     | Specifies the value of the discriminator column for entities of the given type.
@Enumerated             | Specifies that a persistent property or field should be persisted as a enumerated type.
@ElementCollection      |

Annotation              | Description
------------------------|------------------------------------------------------------
@ManyToMany             | This annotation is used to define a many-to-many relationship between the join Tables.
@ManyToOne              | This annotation is used to define a many-to-one relationship between the join Tables.
@OneToMany              | This annotation is used to define a one-to-many relationship between the join Tables.
@OneToOne               | This annotation is used to define a one-to-one relationship between the join Tables.

`@EntityListeners`
`@ExcludeSuperclassListeners`

http://sqltech.cl/doc/oas10gR31/web.1013/b28221/undejbs003.htm#BABIAAGE

Type            | Description
----------------|------------------------------------------------------------------------
@PrePersist     | Executed before the entity manager persist operation is actually executed or cascaded. This call is synchronous with the persist operation.
@PreRemove      | Executed before the entity manager remove operation is actually executed or cascaded. This call is synchronous with the remove operation.
@PostPersist    | Executed after the entity manager persist operation is actually executed or cascaded. This call is invoked after the database INSERT is executed.
@PostRemove     | Executed after the entity manager remove operation is actually executed or cascaded. This call is synchronous with the remove operation.
@PreUpdate      | Executed before the database UPDATE operation.
@PostUpdate     | Executed after the database UPDATE operation.
@PostLoad       | Executed after an entity has been loaded into the current persistence context or an entity has been refreshed.


```java
import org.springframework.data.repository.query.Param;

@Query(value  =
    " SELECT a.id, a.lastname FROM person a" +
    " WHERE a.name = :name AND a.birthday = :date ", nativeQuery = true)
public List<Object[]> getPersonInfo(
    @Param("name") String name,
    @Param("date") Date date);

```


### Convert
* http://www.thoughts-on-java.org/jpa-21-type-converter-better-way-to/
* http://stackoverflow.com/questions/23564506/is-it-possible-to-write-a-generic-enum-converter-for-jpa
* https://stackoverflow.com/questions/25738569/jpa-map-json-column-to-java-object  json


### Query
* [JPQL](http://docs.oracle.com/javaee/5/tutorial/doc/bnbtg.html)
    * https://www.thoughts-on-java.org/jpql/
* Query methods
	* http://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
	* http://docs.spring.io/spring-data/jpa/docs/current/reference/html/#_supported_query_keywords
* JPA Criteria API


### lazy loading

* org.hibernate.LazyInitializationException: failed to lazily initialize a collection of role: eu.cite.model.Project.scenarios, could not initialize proxy - no Session
    * AbstractLazyInitializer
    * JavassistLazyInitializer.invoke
    ```
    org.hibernate.LazyInitializationException: could not initialize proxy - no Session
        at org.hibernate.proxy.AbstractLazyInitializer.initialize(AbstractLazyInitializer.java:148)
        at org.hibernate.proxy.AbstractLazyInitializer.getImplementation(AbstractLazyInitializer.java:266)
        at org.hibernate.proxy.pojo.javassist.JavassistLazyInitializer.invoke(JavassistLazyInitializer.java:68)
    ```
* ~~ http://www.codedata.com.tw/java/hibernate-lazy-loading/ ~~
* http://stackoverflow.com/questions/22702851/no-bean-named-sessionfactory-is-defined-after-opensessioninviewfilter
* https://vladmihalcea.com/2016/09/13/the-best-way-to-handle-the-lazyinitializationexception/ OpenEntityManagerInViewFilter


# Custom Validator

* Constraint
* ConstraintValidator
