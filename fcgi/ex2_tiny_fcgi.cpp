#include <iostream>
#include <sstream>
#include <iterator>

#include "fcgio.h"
#include "libs/json.hpp"

using namespace std;
using json = nlohmann::json;

int main(int argc, char *argv[])
{
	// int sockfd = FCGX_OpenSocket(":5687", 128);
	const char* sockpath = "/tmp/fcgi.sock";
	int sockfd = FCGX_OpenSocket(sockpath, 128);
	if (sockfd < 0) {
		cout << "Open Socket failed" << endl;
		exit(1);
	}

	FCGX_Request req;
	FCGX_Init();
	FCGX_InitRequest(&req, sockfd, 0);

	while (FCGX_Accept_r(&req) == 0) {
		fcgi_streambuf obuf(req.out);
		ostream res(&obuf);
		res << "Content-type: text/plain" << endl
			<< endl;

		char **envp = req.envp;
		while (*envp) {
			res << *envp++ << endl;
		}

		fcgi_streambuf ibuf(req.in);
		istream is(&ibuf);
		json body = json::parse(is);
		res << body << endl;
		cout << body << endl;

		FCGX_Finish_r(&req);
	}

	return 0;
}

