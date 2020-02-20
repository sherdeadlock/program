Framework
=========

int FCGX_OpenSocket(const char *path, int backlog)
int FCGX_Init(void)
int FCGX_InitRequest(FCGX_Request *request, int sock, int flags)
int FCGX_Accept_r(FCGX_Request *request)
void FCGX_Finish_r(FCGX_Request *request)
void FCGX_Free(FCGX_Request * request, int close)
void FCGX_ShutdownPending(void)
char *FCGX_GetParam(const char *name, FCGX_ParamArray envp)
int FCGX_StartFilterData(FCGX_Stream *stream)

Stream
======

int FCGX_FClose(FCGX_Stream *stream)
int FCGX_GetError(FCGX_Stream *stream)
void FCGX_SetExitStatus(int status, FCGX_Stream *stream)
void FCGX_ClearError(FCGX_Stream *stream)

int FCGX_GetChar(FCGX_Stream *stream)
char *FCGX_GetLine(char *str, int n, FCGX_Stream *stream)
int FCGX_GetStr(char *str, int n, FCGX_Stream *stream)
int FCGX_UnGetChar(int c, FCGX_Stream *stream)
int FCGX_HasSeenEOF(FCGX_Stream *stream)

int FCGX_PutChar(int c, FCGX_Stream *stream)
int FCGX_PutS(const char *str, FCGX_Stream *stream)
int FCGX_PutStr(const char *str, int n, FCGX_Stream *stream)
int FCGX_FPrintF(FCGX_Stream *stream, const char *format, ...)
int FCGX_VFPrintF(FCGX_Stream *stream, const char *format, va_list arg)
int FCGX_FFlush(FCGX_Stream *stream)

