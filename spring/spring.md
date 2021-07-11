# Quick Start
* https://spring.io/quickstart 產生 spring project


# 主要參考文件
* https://spring.io/guides
* https://www.baeldung.com/rest-with-spring-series   REST
* https://www.baeldung.com/persistence-with-spring-series  JPA
* https://www.baeldung.com/security-spring  Auth


# Lib
* flywaydb DB migration https://flywaydb.org/
* JPA (Java Persistence API)   JAVA EE ORM 標準
    * JPQL (Java Persistence Query Language)
* Hibernate 是較多人用的 JPA 實作。 https://hibernate.org/
* Hibernate Search 可以用 Lucene 做 fulltext search


# Spring framework

`@RestController` -> `@Service` -> `@Repository`

* Controller 定義 Rest API
* Service 寫主要功能
* Repository 存取 Data ORM


## JPA Query
* https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
    - 5.3. Query Methods
    - Appendix C: Repository query keywords
* JPQL 語法
    * https://docs.oracle.com/javaee/6/tutorial/doc/bnbtg.html
    * https://www.thoughts-on-java.org/jpql/


## Spring 常用 Class/Annotation

* Init
	* `@Bean` CommandLineRunner init()
	* WebApplicationInitializer
* `@ControllerAdvice` 集中處理 REST exception，例如 HTTP status 400, 500
    * `@ExceptionHandler`  ResponseEntityExceptionHandler
    * HandlerExceptionResolver
    * `@InitBinder` WebDataBinder or WebBindingInitializer
* `@RestController`
	* [Method Arguments](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc-ann-arguments)
    * `@RequestMapping`
        * `@GetMapping`
        * `@PostMapping`
    * `@PathVariable`
    * `@RequestParam`
        * `@DateTimeFormat`
	    * `@ModelAttribute`  form submit
	* ServletWebRequest
    	* HttpServletRequest request
    	* HttpServletResponse response
	* `@AuthenticationPrincipal` user
* `@Component`
    * `@Service`
    * `@Repository`
* SpringApplicationContext
* configuration
	* `@ConfigurationProperties`  取得config
		* `@NestedConfigurationProperty`
	* `@PropertySource("classpath:sparklr.properties")`
		* `@Value("${sparklrPhotoListURL}") String sparklrPhotoListURL`
* `@Entity`
	* `@Table`
	* `@Column`
		* `@Id`
		* `@GeneratedValue(strategy = GenerationType.IDENTITY)`
    	* `@Temporal(TemporalType.TIMESTAMP)`
	* `@Transient`
	* `@JoinColumn`
	* `@MappedSuperclass`
	* `@PrePersist`
	* `@PreUpdate`
* `@EnableWebMvc`  Spring Boot adds it automatically when it sees spring-webmvc on the classpath.
* Event
	* `ApplicationListener<ApplicationReadyEvent>`
* Testing
	* `@RunWith(SpringRunner::class)`
	* `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)`  integration test
		* `@LocalServerPort`
		* TestRestTemplate
	* `@AutoConfigureMockMvc`  unit test
		* MockMvc
	* `@WebMvcTest`  only instantiating the web layer
	* `@ContextConfiguration`  不會開啟除了context以外的功能
	* `@TestConfiguration`
