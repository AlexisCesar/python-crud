#!/bin/bash
wait_time=15s
password=Database!2022

echo initializing database in $wait_time
sleep $wait_time

/opt/mssql-tools/bin/sqlcmd -S 0.0.0.0 -U sa -P $password -i ./setup.sql