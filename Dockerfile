FROM hayd/alpine-deno:1.0.0

WORKDIR /app
USER deno

COPY index.js .
COPY config.js .
RUN deno cache index.js

ADD . .
RUN deno cache index.js

CMD ["run", "--allow-read", "--allow-net", "index.js"]