FROM elixir:1.8-alpine AS BOB_THE_BUILDER

ARG MIX_ENV=prod

ENV MIX_ENV=${MIX_ENV}

WORKDIR /opt/app

RUN apk update && \
    apk upgrade --no-cache && \
    apk add --no-cache build-base git

RUN mix local.rebar --force && \
    mix local.hex --force

COPY . .

RUN mix do deps.get, deps.compile, compile

RUN mkdir -p /opt/app/built && \
    mix release --verbose && \
    cp _build/prod/rel/stochastica/releases/0.1.0/stochastica.tar.gz /opt/app/built

## Now, build the actual release image

FROM alpine:3.9

RUN apk add --no-cache bash openssl

RUN mkdir -p /opt/app/stochastica

WORKDIR /opt/app/stochastica

COPY --from=BOB_THE_BUILDER /opt/app/built/stochastica.tar.gz .

RUN tar zxf stochastica.tar.gz && \
    rm stochastica.tar.gz

EXPOSE 4000
ENV PORT=4000 \
  MIX_ENV=prod \
  REPLACE_OS_VARS=true \
  SHELL=/bin/sh

ENTRYPOINT ["/opt/app/stochastica/bin/stochastica"]
CMD ["foreground"]