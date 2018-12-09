#include <iostream>
#include <sstream>
#include <iterator>
#include "fcgio.h"

#include "libs/json.hpp"

using namespace std;
using json = nlohmann::json;

int main(int argc, char *argv[])
{
	FCGX_Request req;
	FCGX_Init();
	FCGX_InitRequest(&req, 0, 0);

	while (FCGX_Accept_r(&req) == 0) {
		fcgi_streambuf obuf(req.out);
		ostream res(&obuf);
		res << "Content-type: text/plain\n"
			<< "\n";

		char **envp = req.envp;
		while (*envp) {
			res << *envp++ << endl;
		}

		fcgi_streambuf ibuf(req.in);
		istream is(&ibuf);
		json body = json::parse(is);
		res << body << endl;

		FCGX_Finish_r(&req);
	}

	return 0;
}
