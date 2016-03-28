import crypt
import sys;

password = argv[0];
print argv[0];
encPass = crypt.crypt(password,"password")
print encPass;
print password;


