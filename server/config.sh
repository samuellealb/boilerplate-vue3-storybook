#!/usr/bin/bash

FILE=.env
if test -f "$FILE"; then
  echo ".env file exists"
else 
  echo "HOST=0.0.0.0" >> $FILE
  echo "PORT=1337" >> $FILE
  APP_KEYS_VALUE=$(head -c 10 /dev/random | base64)
  echo "APP_KEYS=${APP_KEYS_VALUE}" >> $FILE
  ADMIN_JWT_SECRET_VALUE=$(head -c 10 /dev/random | base64)
  echo "ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET_VALUE}" >> $FILE
  API_TOKEN_SALT_VALUE=$(head -c 10 /dev/random | base64)
  echo "API_TOKEN_SALT=${API_TOKEN_SALT_VALUE}" >> $FILE
fi