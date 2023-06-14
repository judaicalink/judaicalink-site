FROM ubuntu:latest

LABEL maintainer="JudaicaLink | Benjamin Schnabel <b.schnabel@hs-mannheim.de>"

RUN apt-get -y update && apt-get -y upgrade && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    git \
    hugo \
    rsync \
    nginx

RUN mkdir /data
RUN mkdir /data/judaicalink
RUN mkdir /data/judaicalink/web.judaicalink.org/
RUN mkdir /data/judaicalink/web.judaicalink.org/judaicalink-site

WORKDIR /data/

ADD docker/installer.sh ./
COPY docker/site/* /data/judaicalink/web.judaicalink.org/

# NGINX
COPY docker/nginx/* /etc/nginx/
COPY docker/nginx/sites-available/* /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/judaicalink.conf /etc/nginx/sites-enabled/judaicalink
RUN rm /etc/nginx/sites-enabled/default

WORKDIR /data/judaicalink/web.judaicalink.org/judaicalink-site
COPY . .

ENV PORT_NGINX=80
ENV PORT_SSL=443

EXPOSE ${PORT_NGINX}
EXPOSE ${PORT_SSL}

CMD [ "nginx", "-g", "daemon off;" ]

RUN bash -c "docker/installer.sh"