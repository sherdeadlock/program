#include "fcgi_stdio.h"
#include <stdlib.h>

extern char **environ;

void main(void)
{
	int count = 0;
	while (FCGI_Accept() >= 0) {
		/*
		printf("Content-type: text/html\r\n"
			"\r\n"
			"<title>FastCGI Hello!</title>"
			"<h1>FastCGI Hello!</h1>"
			"Request number %d running on host <i>%s</i>\n",
			++count, getenv("SERVER_NAME"));
		*/

		printf("Content-type: text/plain\n\n");
		char **s = environ;
		while(*s) {
			printf("%s\n", *s);
			s++;
		}

		char line[1024];
		while (gets(line)) {
			printf("%s\n", line);
		}
	}
}

