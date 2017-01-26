FROM node:6

COPY ./user/src /var/lib/app
COPY ./user/scripts/startup.sh ./user/scripts/startup.test.sh /home/docker/

WORKDIR /var/lib/app

RUN chmod +x /home/docker/*.sh
RUN git clone git@github.com:DanielMontesDeOca/microservicesdemo-core.git /var/lib/core
RUN npm install --silent && npm install -g nodemon

EXPOSE 80

ENTRYPOINT ["/home/docker/startup.sh"]
