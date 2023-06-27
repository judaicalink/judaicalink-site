FROM ubuntu:latest
LABEL authors="Benjamin Schnabel"

WORKDIR /data

COPY . .

RUN apt-get update && apt-get install -y python3 python3-pip hugo

ENTRYPOINT ["python3", ""]

# Nginx
