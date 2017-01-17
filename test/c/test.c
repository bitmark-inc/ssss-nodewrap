#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>
#include <stdint.h>
#include <assert.h>
#include <termios.h>
#include <sys/mman.h>
#include <sys/types.h>

#include <gmp.h>

#define VERSION "0.5"
#define RANDOM_SOURCE "/dev/random"
#define MAXDEGREE 1024
#define MAXTOKENLEN 128
#define MAXLINELEN (MAXTOKENLEN + 1 + 10 + 1 + MAXDEGREE / 4 + 10)
//
//
// gcc -O2 -shared -fpic src/c/ssss_custom.c -o src/c/ssss_custom.so -lgmp
//
int main()
{
  int i, t = 3, n = 5 ;
  char** result  = (char**) split_custom("lexuanbach", t, n);
  for (i = 0; i < n; i++) {
    printf("%s\n", result[i]);
  }

  char* result1 = "1-c998761bb75aff94ed73";
  char* result2 = "2-c5e5fd6c07c549cbbaa5";
  char* result3 = "3-b41b4d6006c406c17da9";
  char* result4 = "4-3a99dd6e1b17df3574b3";
  char* result5 = "5-4b676d621a16903fb3ad";
  char * temp[] = {result4, result1, result2};
  char* secret = combine_custom(temp);
  printf("%s\n", secret);
}