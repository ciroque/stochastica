FROM erlang:21-alpine

RUN mkdir -p /opt/apps/stochastica

WORKDIR /opt/apps/stochastica

COPY _build/prod/rel/stochastica/releases/0.1.0/stochastica.tar.gz .

RUN apk add --no-cache bash

RUN tar zxf stochastica.tar.gz && \
    rm stochastica.tar.gz

EXPOSE 4000
ENV PORT=4000 \
  MIX_ENV=prod \
  REPLACE_OS_VARS=true \
  SHELL=/bin/sh

ENTRYPOINT ["sh"]
