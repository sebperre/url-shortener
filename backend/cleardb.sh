#!/bin/bash

count=$(sqlite3 urls.db "select count() from urls")
sqlite3 urls.db "DELETE FROM urls;"
echo "Succesfully Cleared All Entries ($count) from URL Database"
